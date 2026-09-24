"use client";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
export default function DemoSocket() {
  const [socket, setSocket] = useState<Socket | null>(null);
  useEffect(() => {
    const connectSocket = () => {
      const socket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER);
      socket.on("connect", () => {
        console.log("Đã kết nối");
      });
      socket.on("disconnect", () => {
        console.log("Đã đóng kết nối");
      });
      setSocket(socket);

      //Listen
      socket.on("list-message", (data) => {
        console.log(data);
      });
    };
    connectSocket();
  }, []);
  return (
    <div>
      <h2 className="mb-3 text-3xl">Demo Socket</h2>
      <button
        className="bg-green-600 px-3 py-1 rounded-2xl text-white cursor-pointer"
        onClick={() => {
          socket?.emit("new-message", "Lời chào Client");
        }}
      >
        Click me
      </button>
    </div>
  );
}
