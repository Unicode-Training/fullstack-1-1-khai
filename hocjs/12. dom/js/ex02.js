/*
Event: Hành động từ phía người dùng tác động lên các thẻ html: click, mouseover, mouseout, dblclick, submit...
- Trong DOM có sẵn các sự kiện
- Việc của lập trình là lắng nghe các sự kiện đó để thực hiện 1 logic nhằm giải quyết bài toán

Cú pháp lắng nghe sự kiện: 
element.on{tensukien} = function() {
    //Logic cần xử lý
}
*/
const btnEl = document.querySelector(".btn");
// btnEl.onclick = function () {
//   console.log("Click me");
// };
// btnEl.onmouseover = function () {
//   console.log("User vừa trỏ chuột vào");
// };

// const inputEl = document.querySelector(".field");
// inputEl.onfocus = function () {
//   console.log("User focus vào input");
// };
// inputEl.onblur = function () {
//   console.log("User blur khỏi input");
// };
// inputEl.oninput = function () {
//   console.log("User nhập giá trị vào input");
// };

// const handleClick = function () {
//   console.log("User vừa click vào button");
// };

// btnEl.addEventListener("click", handleClick);

// btnEl.addEventListener("mouseover", handleClick);

// btnEl.addEventListener("click", function () {
//   console.log("User vừa click vào button 2");
// });

// btnEl.onclick = function () {
//   console.log("User vừa click vào button");
// };

// btnEl.onclick = function () {
//   console.log("User vừa click vào button 2");
// };

//Từ khóa this trong event: Chính là element đang lắng nghe event
// btnEl.addEventListener("mousedown", function (e) {
//   //e = event object: Thông tin, thông số của sự kiện
//   //   console.dir(this); //btnEl
//   //   this.innerHTML = `Clicked`;
//   console.log(e);
// });

//Lắng nghe sự kiện trong 1 danh sách
const liList = document.querySelectorAll("ul li");
liList.forEach(function (li) {
  //   console.dir(li);
  li.addEventListener("click", function () {
    // console.log(this);
    this.innerHTML = "Clicked";
  });
});
