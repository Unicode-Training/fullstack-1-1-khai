const WebSocket = require("ws");
const wss = new WebSocket.Server({
  port: 8080,
});
const getClientId = () => {
  return Math.floor(new Date().getTime() + Math.random() * 1000);
};
const messageList = [];
wss.on("connection", (ws) => {
  console.log("Đã kết nối websocket");
  const clientId = getClientId();
  ws.clientId = clientId;

  //Các thông điệp nhận và gửi giữa server client
  ws.on("message", (message) => {
    const { type, payload } = JSON.parse(message);
    if (type === "send-message") {
      //Thêm message vào mảng messageList
      messageList.push(payload);
      const data = {
        type: "new-message",
        payload: messageList,
      };
      wss.clients.forEach((client) => {
        if (client.readyState === 1) {
          client.send(JSON.stringify(data));
        }
      });
    }

    if (type === "load-message") {
      wss.clients.forEach((client) => {
        if (client.readyState === 1) {
          client.send(
            JSON.stringify({
              type: "new-message",
              payload: messageList,
            })
          );
        }
      });
    }
  });

  ws.on("close", () => {
    console.log("Đóng kết nối websocket");
  });
});
