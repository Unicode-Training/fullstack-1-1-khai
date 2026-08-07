
// console.log('Hello anh em 123');
// import { a } from "./home.js";
// console.log(a);

import http from "http";
import "dotenv/config";
// import path from "path";
// import { type User } from "./types/index.type.js";

// const getData = async (): Promise<User> => {
//     return new Promise((resolve) => resolve({
//         id: 1,
//         name: "Hoàng An"
//     }))
// }

// const data = await getData();
// console.log(data);

const server = http.createServer((req, res) => {
    const apiKey = req.headers['x-api-key'];
    console.log(apiKey);
    console.log(process.env.DB_URL);
    const a: unknown = 10;
    console.log(a);

    res.end('Hello');
});

server.listen(3000, () => {
    console.log('Đang chạy với port 3000');
})