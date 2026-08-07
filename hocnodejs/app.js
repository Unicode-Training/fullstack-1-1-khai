// console.log('Hello anh em');
// console.log(document);
// console.log(window);
// const { a, b } = require('./a');
// console.log(a, b);

// const moment = require('moment');
// console.log(moment().format('DD/MM/YYYY HH:mm:ss'));

// import { a, b } from "./b.js";
// console.log(a, b);

// import moment from "moment";
// console.log(moment().format('DD/MM/YYYY HH:mm:ss'));

// import fs from "fs";

// const content = fs.readFileSync(`./data/data1.txt`, 'utf-8');
// console.log(content);

// fs.readFile(`./data/data1.txt`, (err, data) => {
//     console.log(err);
//     console.log(data.toString());
// })

// import fs from "fs/promises";
// fs.readFile(`./data/data1.txt`, 'utf-8').then(data => {
//     console.log(data);
// });

// try {
//     const content = await fs.readFile(`./data/data1.txt1`, 'utf-8')
//     console.log(content);
// } catch {
//     console.log('Có lỗi');

// }

// import fs from "fs";
// fs.writeFileSync('./data/data2.txt', 'Học Nodejs không khó 1111\n', {
//     flag: 'a+'
// });

// fs.writeFile('./data/data2.txt', 'Học Nodejs không khó 1111\n', { flag: 'a+' }, (err) => {
//     console.log(err);
// })

// import fs from "fs/promises";
// const status = await fs.writeFile('./data/data2.txt', 'Học Nodejs không khó 1111\n', {
//     flag: 'a+'
// });
// console.log(status);

//Xóa file
// import fs from "fs";
// fs.unlinkSync(`./data`);
// fs.rmdirSync('./data');

//Scan folder
// import fs from "fs";
// const list = fs.readdirSync('./data');
// list.forEach(item => {
//     const path = `./data/${item}`;
//     const pathInfo = fs.statSync(path);
//     if (pathInfo.isDirectory()) {
//         console.log(`${item} là folder`);
//     } else {
//         console.log(`${item} là file`);
//     }
// })

//Xóa folder cha
// - Xóa tất cả các file của tất cả folder
// - Xóa tất cả folder con
// - Xóa folder cha

//Hàm deleteAllFiles có 2 việc
// - Xóa tất cả file
// - Lấy danh sách folder
// const deleteAllFiles = (folderPath) => {
//     const folders = [];
//     const list = fs.readdirSync(folderPath);
//     list.forEach(item => {
//         const path = `${folderPath}/${item}`;
//         const pathInfo = fs.statSync(path);
//         if (!pathInfo.isDirectory()) {
//             //Nếu là file xóa luôn
//             fs.unlinkSync(path);
//         } else {
//             //Đệ quy để tìm tất cả file
//             folders.push(path);
//             folders.push(...deleteAllFiles(path));
//         }
//     });
//     return folders;
// }

// const deleteAllFolders = (folderPath) => {
//     const folders = deleteAllFiles('./data');
//     folders.reverse().forEach((folder) => {
//         fs.rmdirSync(folder)
//     });
//     fs.rmdirSync(folderPath); //Xóa folder cha
// };

// deleteAllFolders('./data');

//Tạo folder
// const path = './data/sub1/sub2';
// const pathArray = path.split('/');
// let partialPath = '';
// pathArray.forEach((item) => {
//     partialPath += item + '/';
//     if (item !== '.' && item !== '..') {
//         console.log(partialPath);
//         fs.mkdirSync(partialPath);
//     }
// })

// const createFile = (pathFile) => {
//     const pathArray = pathFile.split('/').slice(0, -1);
//     const fileName = pathFile.split('/').slice(-1).join();

//     //Tạo folder
//     let partialPath = '';
//     pathArray.forEach((item) => {
//         partialPath += item + '/';
//         if (item !== '.' && item !== '..') {
//             if (!fs.existsSync(partialPath)) {
//                 fs.mkdirSync(partialPath);
//             }

//         }
//     });

//     //Tạo file
//     fs.writeFileSync(`${partialPath}${fileName}`, 'console.log(1)');

// }

// createFile(`./data/sub1/sub2/admin/HomeController.ts`);

//url: Bóc tách từng thành phần của url để tiện cho quá trình xử lý
// import url from "url";
// const urlString = 'https://unicode.vn:8080/khoa-hoc?q=abc&status=active';
// const urlParse = url.parse(urlString, true);
// console.log(urlParse);
// console.log(urlParse.pathname);
// console.log(urlParse.query.status);

//path: Xử lý đường dẫn trong hệ thống tệp
// import path from "path";
// console.log(path);

// const pathString = "/uploads/products/image.jpg";
// const pathParse = path.parse(pathString);
// console.log(pathParse);
// console.log(path.extname(pathString));
// console.log(path.basename(pathString));

//Nối path
// const pathData = path.join('data', 'data.txt'); //data/data.txt
// console.log(pathData);

// const pathData = path.resolve('data', 'data.txt');
// console.log(pathData);

// import "./modules/home.js";

//Module cypto
// import crypto from "crypto";
// - Tạo UUID
// - Tạo số nguyên ngẫu nhiên
// - Mã hóa md5
// - Mã hóa sha1
// console.log(crypto.randomUUID());
// console.log(crypto.randomInt(100000, 999999));
// console.log(crypto.createHash('md5').update('123456').digest('hex'));
// console.log(crypto.createHash('sha1').update('123456').digest('hex'));
// const randomNumber = crypto.randomInt(100000, 999999).toString();
// const activeToken = crypto.createHash('md5').update(randomNumber).digest('hex');
// console.log(activeToken);

//Module http
import http from "http";
import url from "url";
const PORT = 3000;
const server = http.createServer((req, res) => {
    const urlParse = url.parse(req.url, true);
    const pathname = urlParse.pathname;
    const method = req.method;
    const apiKey = req.headers['x-api-key'];

    if (pathname === '/api/users') {
        const users = [
            {
                id: 1,
                name: "User 1"
            },
            {
                id: 2,
                name: "User 2"
            },
            {
                id: 3,
                name: "User 3"
            }
        ]
        res.setHeader('x-abc', 123);
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        return res.end(JSON.stringify(users))
    }

    if (pathname === '/api/products') {
        return res.end('Danh sách sản phẩm')
    }

    if (pathname === '/google/redirect') {
        //Xử lý logic
        //Chuyển hướng sang google
        const googleUrl = 'https://google.com';
        res.statusCode = 301;
        res.setHeader("Location", googleUrl);
        return res.end('');
    }
    const origins = [
        'http://localhost:1234',
        'https://unicode.vn'
    ]
    if (pathname === "/api/auth/login") {
        const requestOrigin = req.headers.origin;

        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        if (origins.includes(requestOrigin)) {
            res.setHeader('Access-Control-Allow-Origin', requestOrigin)
        }

        res.setHeader('Access-Control-Allow-Headers', 'Content-Type,x-api-key');
        res.setHeader('Access-Control-Allow-Methods', 'PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        console.log(`Request tới login`, req.method);
        console.log(`Cookie:`, req.headers['cookie']);


        return res.end(JSON.stringify({
            success: true,
            message: "Login success"
        }));
    }

    res.statusCode = 404;
    return res.end('Không tìm thấy');
});
server.listen(PORT, () => {
    console.log(`Running: http://localhost:${PORT}`);
});

//Request
// - url
// - method
// - headers
// - body

//Response
// - status: 
// + success: 200, 201 (Created)
// + redirect: 301, 302
// + client error: 400 (Validate), 401 (Xác thực thất bại), 403 (Không có quyền), 404 (Không tìm thấy), 429 (Số lượng request nhiều quá)
// + server error: 500 (Lỗi chung)

// - headers
// - message

//Nguyên tắc chuyển hướng (Redirect)
// - Do trình duyệt
// - Server trả về status là 301, 302
// - Server trả về header: Location: duong-dan-can-chuyen-huong