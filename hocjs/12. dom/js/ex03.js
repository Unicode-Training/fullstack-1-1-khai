//DOM HTML
const contentEl = document.querySelector(".content");
const bntEl = document.querySelector(".btn");
const content = contentEl.innerHTML;
const spanEl = document.querySelector("h3 span");
bntEl.addEventListener("click", function () {
  //innerHTML
  //   console.log(contentEl.innerHTML);
  //innerText
  //   console.log(contentEl.innerText);
  //textContent
  //   console.log(contentEl.textContent);
  //outerHTML
  //   console.log(contentEl.outerHTML);
  //   contentEl.innerHTML = `<i>Học lập trình không khó</i>`;
  //   contentEl.innerText = `<i>Học lập trình không khó</i>`;
  //   contentEl.outerHTML = `<i>Học lập trình không khó</i>`;
  if (contentEl.innerHTML) {
    contentEl.innerHTML = "";
    this.innerText = "Hiện";
  } else {
    contentEl.innerHTML = content;
    this.innerText = "Ẩn";
  }

  //Lấy giá trị đếm ban đầu
  let count = spanEl.innerText;
  count++; //Tăng lên 1 đơn vị
  spanEl.innerText = count; //Cập nhật lại giao diện
});
