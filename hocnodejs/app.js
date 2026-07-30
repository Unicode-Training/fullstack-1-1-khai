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
import fs from "fs";
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