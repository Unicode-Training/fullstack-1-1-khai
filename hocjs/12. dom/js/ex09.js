//DOM Nodes
// - Dùng JavaScript để tạo ra 1 thẻ h1 và đưa vào cây DOM
// - Cú pháp: document.createElement('tagname')

//1. Tạo Node (Object)
// const h1 = document.createElement("h1");
// h1.innerHTML = "Hello World";
// // console.log(h1);

// // //2. Thêm Node vào cây DOM (Dựa vào 1 thẻ html có sẵn)
// const rootEl = document.querySelector("#root");
// rootEl.append(h1);

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   //   h1.innerText = "Xin chào JS";
//   const h2 = document.createElement("h2");
//   h2.innerText = "Học DOM không khó";
//   rootEl.append(h2);
// });

//Cách cũ
// const btn = document.querySelector(".btn");
// const rootEl = document.querySelector("#root");
// rootEl.innerHTML = `<h1>Hello World</h1>`;
// btn.addEventListener("click", function () {
//   rootEl.innerHTML += `<h2>Học DOM không khó</h2>`;
//   const h1El = document.querySelector("h1");
//   h1El.innerText = "Xin chào js";
// });

// const repeater = document.querySelector(".repeater");
// const addBtn = document.querySelector(".add-btn");
// addBtn.addEventListener("click", function () {
//   repeater.innerHTML += `<div class="group-item">
//       <input type="text" placeholder="Vui lòng nhập" />
//       <button class="remove-btn">&times;</button>
//     </div>`;
// });
// const removeBtnList = document.querySelectorAll(".remove-btn");
// removeBtnList.forEach(function (removeBtn) {
//   removeBtn.addEventListener("click", function () {
//     removeBtn.parentElement.remove();
//   });
// });

// const handleRemoveItem = function (e) {
//   e.target.parentElement.remove();
// };

// const groupItem = document.createElement("div");
// groupItem.classList.add("group-item");
// const input = document.createElement("input");
// input.placeholder = `Vui lòng nhập`;
// const removeBtn = document.createElement("button");
// removeBtn.classList.add("remove-btn");
// removeBtn.innerHTML = `&times;`;

// removeBtn.addEventListener("click", handleRemoveItem);

// groupItem.append(input);
// groupItem.append(removeBtn);

// repeater.append(groupItem);

// addBtn.addEventListener("click", function () {
//   const groupItem = document.createElement("div");
//   groupItem.classList.add("group-item");
//   const input = document.createElement("input");
//   input.placeholder = `Vui lòng nhập`;
//   const removeBtn = document.createElement("button");
//   removeBtn.classList.add("remove-btn");
//   removeBtn.innerHTML = `&times;`;

//   removeBtn.addEventListener("click", handleRemoveItem);

//   groupItem.append(input);
//   groupItem.append(removeBtn);
//   repeater.append(groupItem);
// });

//cloneNode --> Sao chép 1 node có sẵn

//replaceChild --> Thay thế 1 node cũ thành 1 node mới

//removeChild --> Xóa node con trong 1 node cha

/*
Sự khác nhau giữa remove và removeChild
- remove xóa phần tử trên cây DOM
- removeChild xóa phần tử con tồn tại trong 1 phần tử cha
*/
const body = document.querySelector("body");
const title = document.querySelector(".title");
const h2 = document.createElement("h2");
h2.innerHTML = "Học js không khó";
body.replaceChild(h2, title);
const box = document.querySelector(".box");
box.append(title);
box.removeChild(title);
// h2.remove();
// for (let i = 1; i <= 5; i++) {
//   const titleClone = title.cloneNode(true);
//   body.append(titleClone);
// }
