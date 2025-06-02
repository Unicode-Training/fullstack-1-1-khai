//Event Object: 1 đối tượng chứa các thông tin của sự kiện
//e.target: Element đang tác động sự kiện (click, mouse,...)
//this: Element đang lắng nghe sự kiện
// const buttonEl = document.querySelector("button");
// // const inputEl = document.querySelector("input");
// buttonEl.addEventListener("mousedown", function (e) {
//   //e = event object
//   console.log(e.target);
//   console.log(this);
// });
// inputEl.addEventListener("keydown", function (e) {
//   console.log(e);
// });

//e.preventDefault(): Ngăn các hành động mặc định của thẻ html
/*
- Thẻ a khi click sẽ chuyển hướng tới url trong href
- Thẻ form khi submit sẽ tải lại trang
*/
// const aEl = document.querySelector("a");
// aEl.addEventListener("click", function (e) {
//   e.preventDefault();
//   const href = this.href;
//   console.log(href);
// });

//e.stopPropagation()
/*
Chặn hành động nổi bọt của sự kiện trong thẻ html con ra ngoài thẻ html cha
Lưu ý: Cha và con phải cùng sự kiện
*/

// const boxEl = document.querySelector(".box");
// const buttonEl = document.querySelector("button");
// boxEl.addEventListener("click", function () {
//   console.log("Box clicked");
// });
// buttonEl.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("Button clicked");
// });
const menuEl = document.querySelector(".menu");
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  menuEl.style.display = "block";
  const x = e.clientX;
  const y = e.clientY;
  menuEl.style.left = `${x}px`;
  menuEl.style.top = `${y}px`;
});

menuEl.addEventListener("click", function (e) {
  e.stopPropagation();
});
document.addEventListener("click", function () {
  menuEl.style.display = "none";
});
document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    menuEl.style.display = "none";
  }
});

//DOM Navigation
