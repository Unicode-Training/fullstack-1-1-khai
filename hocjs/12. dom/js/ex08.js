//DOM Navigation: Lựa chọn các element dựa vào 1 element đã cho trước
/*
- Element cha --> element.parentElement
- Element con --> element.children
- Element bên trái --> element.previousElementSibling
- Element bên phải --> element.nextElementSibling
*/

// const buttonList = document.querySelectorAll("ul li button");
// buttonList.forEach(function (button) {
//   button.addEventListener("click", function () {
//     // console.log(button);
//     const li = button.parentElement;
//     if (li) {
//       li.style.border = `1px solid red`;
//     }
//   });
// });

// const liList = document.querySelectorAll(".menu li");
// liList.forEach(function (li) {
//   li.addEventListener("click", function () {
//     // console.log(li);
//     const ulChildren = li.children[0];
//     const liChildren = ulChildren.children;
//     for (let i = 0; i < liChildren.length; i++) {
//       liChildren[i].style.border = `1px solid red`;
//     }
//   });
// });

const nextBtn = document.querySelector(".next-btn");
nextBtn.addEventListener("click", function () {
  const activeItem = document.querySelector(".products .active");
  const nextItem = activeItem.nextElementSibling;
  if (nextItem) {
    nextItem.classList.add("active");
    activeItem.classList.remove("active");
  } else {
    //Thêm class active phần tử đầu tiên
    const firstItem = document.querySelector(".products h2:first-child");
    firstItem.classList.add("active");
    //Xóa class active phần tử cuối
    const lastItem = document.querySelector(".products h2:last-child");
    lastItem.classList.remove("active");
  }
});

const prevBtn = document.querySelector(".prev-btn");
prevBtn.addEventListener("click", function () {
  const activeItem = document.querySelector(".products .active");
  const prevItem = activeItem.previousElementSibling;
  if (prevItem) {
    prevItem.classList.add("active");
    activeItem.classList.remove("active");
  } else {
    const lastItem = document.querySelector(".products h2:last-child");
    lastItem.classList.add("active");

    const firstItem = document.querySelector(".products h2:first-child");
    firstItem.classList.remove("active");
  }
});
