//Arrow function: Phiên bản mới của function truyền thống (expression, declaration)

// - Rút gọn cú pháp
// - Không thay thế function truyền thống (Sẽ có trường hợp không thể dùng arrow function)

//declaration
function something() {}

//expression
const something2 = function () {};

//arrow
const showMessage = (msg) => {
  console.log("ok chưa?");
  console.log(msg);
};
// showMessage("Unicode");

//Rút gọn của arrow function (Có return)
const sum = (a, b) => a + b;
// console.log(sum(10, 20));

//Lưu ý:
// - Không thay thế function truyền thống
// - trong các trường hợp cần lấy ngữ cảnh gọi function (context) --> dùng function truyền thống

//IIFE (Immediately Invoked Function Expression): Hàm tự gọi, hàm dùng 1 lần
// (function (msg) {
//   console.log("học js không khó");
//   console.log(msg);
// })("Unicode");

// ((msg) => {
//   console.log("Học js quá khó");
//   console.log(msg);
// })("Unicode");

const display = () => {
  let total = 0;
  let a = 10;
  let b = 20;
  return (total = a + b), total;
};
console.log(display());
