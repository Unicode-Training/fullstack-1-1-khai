//DOM CSS
/*
Lý thuyết: Dựa 1 object có sẵn của DOM để can thiệp vào CSS Inline
*/
const boxEl = document.querySelector(".box");
const fadeoutBtn = document.querySelector(".fadeout-btn");
const fadeinBtn = document.querySelector(".fadein-btn");
// console.log(boxEl.style);
// boxEl.style.backgroundColor = "yellow"; //background-color
// boxEl.style.fontStyle = "italic";
// const css = {
//   backgroundColor: "yellow",
//   fontStyle: "italic",
// };
// Object.assign(boxEl.style, css);
fadeoutBtn.addEventListener("click", function () {
  boxEl.style.transition = "opacity 1s ease";
  boxEl.style.opacity = 0;
  setTimeout(() => {
    boxEl.style.display = "none";
    boxEl.style.opacity = null;
    boxEl.style.transition = null;
  }, 1000);
});
fadeinBtn.addEventListener("click", function () {
  boxEl.style.transition = "opacity 1s ease";
  boxEl.style.opacity = 0;
  boxEl.style.display = "block";
  setTimeout(() => {
    boxEl.style.opacity = 1;
  }, 1000);
});
