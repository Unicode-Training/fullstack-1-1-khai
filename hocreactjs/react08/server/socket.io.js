const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});
const messageList = [];
io.on("connect", (socket) => {
  console.log("Đã kết nối socket.io: ", socket.id);

  //Lắng nghe các event
  socket.on("message-1", (data) => {
    console.log(data);
    io.emit("new-message-1", "Message từ server");
  });
  socket.on("message-2", (data) => {
    console.log(data);
  });

  socket.on("load-message", () => {
    // io.emit("message-list", messageList);
    io.in("room-chat").emit("message-list", messageList);
  });
  socket.on("send-message", (data) => {
    messageList.push(data);
    // io.emit("new-message", data);
    io.in("room-chat").emit("new-message", data);
  });

  //Lắng nghe message join-room
  socket.on("join-room", () => {
    socket.join("room-chat"); //join
    //Trả về client messsage
    socket.emit("joined-room");
  });

  //Lắng nghe message leave-room
  socket.on("leave-room", () => {
    socket.leave("room-chat");
    socket.emit("leaved-room");
  });

  socket.on("disconnect", () => {
    console.log("Ngắt kết nối socket.io: ", socket.id);
  });
});

httpServer.listen(8080);

//emit --> Gửi event
//on --> Lắng nghe
