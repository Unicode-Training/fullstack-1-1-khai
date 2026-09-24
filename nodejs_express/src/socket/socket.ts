import { Server, Socket } from "socket.io";

export const webSocket = (io: Server) => {
    io.on("connection", (socket: Socket) => {
        console.log(`Kết nối socket: ${socket.id}`);

        //Event Emit
        socket.on('new-message', (data) => {
            console.log(data);
            socket.emit('list-message', 'Chào anh em Client');
        });

        socket.on('disconnect', () => {
            console.log('Đã đóng kết nối');

        })
    });
}