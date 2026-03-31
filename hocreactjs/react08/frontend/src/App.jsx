import { useState } from "react";
import { useEffect } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:8080");
export default function App() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [isJoined, setIsJoined] = useState(false);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });
    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });
    socket.on("joined-room", () => {
      setIsJoined(true);
      socket.emit("load-message");
    });
    socket.on("leaved-room", () => {
      setIsJoined(false);
    });
  }, []);
  useEffect(() => {
    socket.on("new-message", (data) => {
      console.log("New message from server: ", data);
      setMessageList((prev) => [...prev, data]);
    });
    socket.emit("load-message");
    socket.on("message-list", (data) => {
      setMessageList(data);
    });
    return () => {
      socket.off("new-message");
      socket.off("message-list");
    };
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSendMessage = (e) => {
    e.preventDefault();
    socket.emit("send-message", message);
    setMessage("");
  };
  const handleJoinRoom = () => {
    if (!isJoined) {
      socket.emit("join-room");
    } else {
      socket.emit("leave-room");
    }
  };
  return (
    <div>
      {/* <h1>{message}</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button> */}

      <h1>Chatbox</h1>
      <button onClick={handleJoinRoom}>Join Room</button>
      {isJoined && (
        <>
          <div
            style={{
              height: "300px",
              width: "300px",
              overflow: "auto",
              border: "1px solid #ccc",
            }}
          >
            {messageList.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <form onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Tin nhắn..."
              onChange={handleChange}
              value={message}
              required
            />
            <button>Gửi</button>
          </form>
        </>
      )}
    </div>
  );
}
