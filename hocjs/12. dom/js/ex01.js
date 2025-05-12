/*
DOM = Document Object Model = Mô hình hóa tài liệu HTML dưới dạng đối tượng
- Dễ dàng thay đổi giao diện của trang web
- Xử lý các tương tác từ người dùng lên các thẻ html
- Trong DOM có object thể hiện tên là document
*/
console.dir(document);

//Ví dụ: Cần thay đổi tiêu đề của trang web
// document.title = "Unicode Academy";
// document.body.innerHTML = `<h1>Thử cập nhật giao diện</h1>`;
// document.body.children[0].innerHTML = `Hoàng An`;

//Chọn phần tử html
//1. Chọn phần tử html theo id --> document.getElementById("id")
// const titleEl = document.getElementById("title");
// console.dir(titleEl);

//2. Chọn phần tử html theo class --> document.getElementsByClassName("class") --> Trả về 1 danh sách
// const titleList = document.getElementsByClassName("title");
// console.log(titleList);
// titleList[1].innerHTML = `Ahihi`;

//3. Chọn phần tử html theo tagname --> document.getElementsByTagName("tagname") --> Trả về 1 danh sách
// const pList = document.getElementsByTagName("p");
// console.log(pList);

//4. Chọn phần tử html đầu tiên dựa vào css selector --> document.querySelector('selector')
// const titleEl = document.querySelector("#title");
// console.dir(titleEl);

//5. Chọn tất cả phần tử html dựa vào css selector --> document.querySelectorAll('selector')
// const titleList = document.querySelectorAll("#title");
// console.log(titleList);

// const h2El = document.querySelector(".content .title");
// console.dir(h2El);
