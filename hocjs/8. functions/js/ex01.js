/*
Function
- Cú pháp trong lập trình
- Cho phép nhóm các đoạn chương trình con thuận tiện cho việc gọi lại

Cú pháp: 

1. Định nghĩa báo hàm
function tenham() {
    Code
}

function tenham(thamso1, thamso,...) {
    Code
}

Lưu ý tên hàm:
- Quy tắc đặt tên giống như biến
- Sử dụng động từ

2. Gọi hàm
tenham()
tenham(doiso1, doiso2,...)

Hàm return: Mang giá trị cụ thể
- Chỉ cần thêm từ khóa return vào cuối hàm
- Khi từ khóa return được gọi --> Thoát hàm (Các đoạn code bên dưới return không hoạt động)
Hàm không return (void): Máng giá trị undefined

Tham số còn lại (Tham số cuối cùng)
function tenham(thamso1, thamso2, ...thamsocuoi) {
   Code
   thamsocuoi --> Trả về 1 mảng
}
*/

// function showMessage(msg, status = "success") {
//   console.log("Xin chào anh em JS");
//   console.log("msg", msg);
//   console.log("status", status);
// }
// showMessage("Unicode", "danger");

// function sum(a, b) {
//   if (!a || !b) {
//     return "Không tính được";
//   }
//   const total = a + b;
//   return total;
// }
// const result = sum(10, 20);
// console.log(result);

// function something(a, b, ...args) {
//   console.log(`a`, a);
//   console.log(`b`, b);
//   console.log(`args`, args);
// }
// something(10, 20, 30, 40, 50);

//Phạm vi (scope)
/*
4 phạm vi
- Global Scope --> Phạm vi toàn cục
- Function Scope --> Phạm vi hàm
- Block Scope --> Phạm vi khối: if else, switch case, for, while,...
- Module Scope --> Phạm vi mô đun

Biến, hàm được khai báo trong phạm vi toàn cục --> Sử dụng ở mọi nơi
Biến, hàm được khai báo trong các phạm vi còn lại --> Chỉ được trong phạm vi đó và các phạm vi con
*/

//Global Scope
// let a = 10;
// function showMessage() {
//   console.log(`a`, a);
//   //Function scope
//   let b = 20;
//   for (let i = 1; i <= 5; i++) {
//     //Block scope
//     console.log(`b`, b);
//     console.log(`i`, i);
//   }
//   //   console.log(i);
// }

// showMessage();

//Bài tập 1:
/*
- Tạo ra hàm có tên là getMax, nhận 3 tham số a, b, c
- Tìm giá trị lớn nhất trong 3 tham số và trả về (return)
- Hiển thị kết quả lớn nhất ở bên ngoài hàm
*/
// function getMax(a, b, c) {
//   //Logic
//   if (
//     a === undefined ||
//     a === null ||
//     b === undefined ||
//     b === null ||
//     c === undefined ||
//     c === null
//   ) {
//     return;
//   }
//   let max = a;
//   if (max < b) {
//     max = b;
//   }
//   if (max < c) {
//     max = c;
//   }
//   return max;
// }
// const result = getMax(10, 20, 2);
// console.log(result);

//Anonymous function (Hàm ẩn danh, hàm không tên):
// - Dùng trong expression function
// - Dùng trong hàm callback
//Expression function --> Hàm biểu thức (Gán hàm vào 1 biến)
// const getMessage = function getMsg(msg) {
//   console.log(msg);
//   //   return "Unicode Academy" + msg;
// };
// if (typeof getMessage === "function") {
//   getMessage("Ahihi"); //Lời gọi hàm chủ động
// }

//Callback
// const display = function (a, func, ...args) {
//   //args --> Đối số của callback (func)
//   //args là 1 mảng
//   //Mục tiêu: Lấy từng phần tử của mảng đưa vào từng tham số của hàm callback
//   console.log(`a`, a);
//   if (typeof func === "function") {
//     func(...args); //spread operator
//     // func.apply(null, args);
//   }
// };
// const showMessage = function (msg, status, isShow) {
//   console.log("Học JS không khó", msg, status, isShow);
// };

// display(10, showMessage, "Unicode", "success", false);

// display(10, function () {
//   console.log("Học JS không khó");
// });

//Hàm setTimeout(callback, timeout, ...args): Delay 1 hàm callback sau 1 khoảng thời gian nhất định
// setTimeout(
//   function (value, status) {
//     console.log("Học JS không khó");
//     console.log(`value`, value);
//     console.log(`status`, status);
//   },
//   2000,
//   "Unicode",
//   "success"
// );

//Tác dụng của callback
// - Xử lý các tác vụ bất đồng bộ

//Đồng bộ:
// - step1 --> 2s
// - step2 --> 3s
// - step3 --> 1s

//Bất đồng bộ
// - step1 --> 2s
// - step2 --> 3s
// - step3 --> 1s
// const downloadFile = function (callback) {
//   //Giả định việc download mất 2 giây mới trả về tên file
//   setTimeout(function () {
//     console.log("Đã download file a.jpg");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 2000);
// };
// const showImage = function () {
//   console.log("Đã hiển thị file");
// };
// downloadFile(showImage);

// setTimeout(function () {
//   console.log("Học JS");
// }, 0);
// console.log("A");

//Vấn đề của callback: Lồng nhiều callback vào với nhau --> Callback Hell
// const getA = function (callback) {
//   setTimeout(function () {
//     console.log("A");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 1500);
// };
// const getB = function (callback) {
//   setTimeout(function () {
//     console.log("B");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 2000);
// };
// const getC = function (callback) {
//   setTimeout(function () {
//     console.log("C");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 1000);
// };
// //A --> B --> C --> Hoàn thành
// getA(function () {
//   getB(function () {
//     getC(function () {
//       console.log("Hoàn thành");
//     });
//   });
// });
//Es6 Promise
//Es7: Async await

//Closure
let a = 10;

const display = function (c) {
  console.log("display");
  let b = 20;
  return function () {
    console.log("Học js không khó");
    console.log(`a`, a);
    console.log(`b`, b);
    console.log(`c`, c);
  };
  //   showMessage();
  //   return showMessage; //Trả về 1 hàm
};
const showMessage = display("Unicode");
showMessage();

//Tìm hiểu trước thuật toán đệ quy
let str = "abcd";
// let result = str.split("").reverse().join("");
// console.log(result);
let result = "";
for (let i = 0; i < str.length; i++) {
  const char = str[str.length - i - 1];
  result += char;
}
console.log(result);
