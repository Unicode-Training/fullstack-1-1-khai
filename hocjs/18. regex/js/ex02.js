//Thay thế
//Dùng hàm replace(pattern, newValue)

//Ví dụ: Thay tất cả các số thành ***
// let str = "Xin chao anh em 1234 abc 1111";
// const pattern = /\d+/g;
// str = str.replace(pattern, "***");
// console.log(str);

//Đối sánh chuỗi
// Nguyên tắc:
// - Group 1 --> $1
// - Group 2 --> $2
// - Group n --> $n
// let str = "Xin chao anh em https://unicode.vn abc https://google.com";
// const pattern = /((?:http|https):\/\/\w+\.[a-z]{2,})/g;
// str = str.replace(pattern, `<a href="$1" target="_blank">$1</a>`);
// document.body.innerHTML = str;

/*
https://www.youtube.com/watch?v=_9GX5hYnH98
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/_9GX5hYnH98"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
></iframe>

Bước 1: Lấy url youtube từ thẻ input

Bước 2: Viết regex để lấy id youtube

Bước 3: Tạo mã iframe với id youtube lấy được ở trên

Bước 4: Cập nhật mã iframe vào class video 

Các dạng phổ biến

https://youtube.com/watch?v=_9GX5hYnH98
https://youtu.be/_9GX5hYnH98
https://youtu.be/_9GX5hYnH98?....
https://youtube.com/watch?v=_9GX5hYnH98&....
*/

const input = document.querySelector("input");
const video = document.querySelector(".video");
input.addEventListener("input", () => {
  const url = input.value;
  const pattern =
    /(?:http|https):\/\/(?:www\.|)(?:youtube\.com\/watch\?v=([\w-]+)|youtu\.be\/([\w-]+))/;
  const match = url.match(pattern);
  if (match[1]) {
    const videoId = match[1];
    const iframeHtml = `<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/${videoId}"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
></iframe>`;
    video.innerHTML = iframeHtml;
  }
});
