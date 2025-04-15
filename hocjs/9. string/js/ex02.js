//Bài 1: Lấy username của 1 email bất kỳ
// let email = "vjhushvcudsvhufdv@gmail.com"; //hoangan.web

// let position = email.indexOf("@");
// let username = email.slice(0, position);
// console.log(username);

//Bài 2: Chuyển ký tự đầu tiên của chữ thành ký tự HOA
// let firstName = "hoàng"; //Hoàng
// let result = firstName.charAt(0).toUpperCase() + firstName.slice(1);
// console.log(result);

//Bài 3: Chuyển tất cả ký tự đầu tiên của mỗi từ trong 1 chuỗi thành chữ HOA
let fullname = `tạ  hoàng an`; //Tạ Hoàng An
fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);
for (let i = 1; i < fullname.length; i++) {
  //Lấy từng ký tự trong chuỗi
  let char = fullname.charAt(i);
  let charNext = fullname.charAt(i + 1);
  if (char === " " && charNext !== " ") {
    const position = i + 1; //Đây là vị trí ký tự cần chuyển thành chữ hoa
    fullname =
      fullname.slice(0, position) +
      charNext.toUpperCase() +
      fullname.slice(position + 1);
  }
}
console.log(fullname);
