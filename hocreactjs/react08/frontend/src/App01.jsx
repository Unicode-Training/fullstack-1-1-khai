import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [socket, setSocket] = useState();
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    //Sự kiện khi kết nối websocket thành công
    ws.onopen = () => {
      console.log("Đã kết nối tới server");
    };

    //Sự kiện khi đóng kết nối
    ws.onclose = () => {
      console.log("Đóng kết nối với server");
    };
    return () => {
      ws.close(); //Đóng kết nối khi component unmount
    };
  }, []);

  useEffect(() => {
    if (!socket) {
      return;
    }
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: "load-message" }));
    };
    socket.onmessage = ({ data }) => {
      const { type, payload } = JSON.parse(data);
      if (type === "new-message") {
        setMessageList(payload);
      }
    };
  }, [socket]);
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message) {
      return;
    }
    const data = {
      type: "send-message",
      payload: message,
    };
    socket.send(JSON.stringify(data));
    setMessage("");
  };
  return (
    <div>
      <h1>Số người online: 0</h1>
      <div
        style={{
          height: "300px",
          overflow: "auto",
          border: "1px solid red",
        }}
      >
        {messageList.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button>Send</button>
      </form>
    </div>
  );
}
