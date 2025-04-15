let content = `<h2>Học lập trình JS không khó. Học lập trình JS không khó. Học lập trình JS không khó. Học lập trình JS không khó</h2>`;
let keyword = "LẬP trìnH";

let position = content.toLowerCase().indexOf(keyword.toLowerCase());

let newContent = "";

//content = `<h2>Học lập trình <span>JS</span> không khó. Học lập trình <span>JS</span> không khó</h2>`

//Làm sao để để highlight tất cả
/*
Bước 1: Highlight keyword đầu tiên tìm được
Bước 2: Lưu lại nội dung từ đầu đến hết nội dung đã highlight
Bước 3: Cắt bỏ đoạn đã lưu ra khỏi content ban đầu
Bước 4: Lặp lại bước 1 với content mới
*/

while (position !== -1) {
  newContent +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>`;
  //Xóa bỏ đoạn đã lưu vào newContent
  content = content.slice(position + keyword.length);
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
}

//Hiển thị lên giao diện
document.body.innerHTML = newContent + content;
