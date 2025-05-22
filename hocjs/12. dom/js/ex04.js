//Attribute
/*
DOM build sẵn các thuộc tính tương ứng với các thuộc tính HTML
Cú pháp: element.ten_thuoc_tinh
*/
// const aEl = document.querySelector("a");
// console.log(aEl.href);
// console.log(aEl.id);
// console.log(aEl.title);
// console.log(aEl.target);
// console.log(aEl.className);

// aEl.href = "https://unicode.vn";

//Lấy giá trị của input
// const inputEl = document.querySelector("input");
// const buttonEl = document.querySelector("button");
// const imgPreview = document.querySelector(".img-preview");
// buttonEl.addEventListener("click", function () {
//   const value = inputEl.value;
//   //   inputEl.value = ""; //Xóa dữ liệu input
//   //   inputEl.placeholder = "Ahihi"; //Thêm placeholder

//   if (value) {
//     //Khởi tạo thẻ img
//     const imgHtml = `<img src="${value}">`;
//     //Đưa thẻ img vào .img-preview
//     imgPreview.innerHTML = imgHtml;
//   }
// });

//Bài tập: Nhập link ảnh vào ô input --> Hiển thị ảnh đó bên dưới ô input

//Data Attribute
/*
- Thuộc tính do lập trình viên tự tạo để giải quyết 1 bài toán của js hoặc css
- Được w3c công nhận là hợp lệ
- Cú pháp: data-*

Có 2 cách để truy cập vào data attribute từ js

Cách 1: Dùng hàm getAttribute và setAttribute

Cách 2: Dùng object dataset (Được DOM build sẵn)
*/

const h3El = document.querySelector("h3");
// const count = h3El.getAttribute("data-count");
// console.log(count);

// h3El.setAttribute("data-count", 20);
// h3El.setAttribute("data-name", "Unicode");

console.log(h3El.dataset);
const count = h3El.dataset.count;
console.log(count);

h3El.dataset.count = 20;
h3El.dataset.name = "Unicode";

//Naming convention
/*
Nếu bên html có data attribute: data-animation-duration 
--> Chuyển qua dataset: dataset.animationDuration
*/
console.log(h3El.dataset.animationDuration);

h3El.dataset.animationTimingFunction = "ease-in-out"; //data-animation-timing-function

//classList
/*
Object được DOM build sẵn để quản lý các class trong 1 element
*/
// console.log(h3El.className);
// console.log(h3El.classList);

//Các phương thức trong classList

//1. add(): Thêm class mới vào element
h3El.classList.add("title3");

//2. remove(): Xóa class
h3El.classList.remove("title-2");

//3. replace: Thay thế class
h3El.classList.replace("title3", "active");

//4. toggle(): Kiểm tra nếu không tồn tại class thì thêm mới, tồn tại sẽ xóa
h3El.classList.toggle("open"); //Thêm mới
h3El.classList.toggle("open"); //Xóa bỏ

//5. contains(): Kiểm tra class tồn tại trong element
console.log(h3El.classList.contains("active"));

//Xóa phần tử html: element.remove()
// h3El.remove();

//Xóa thuộc tính: element.removeAttribute(tenthuoctinh);

h3El.removeAttribute("data-count");
