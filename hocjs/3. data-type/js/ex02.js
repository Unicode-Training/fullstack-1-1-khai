//Ép kiểu
//1. Ép từ số sang chuỗi
// let age = 32;
// // age = age + "";
// age = age.toString();
// console.log(age, typeof age);

// let check = true;
// check = check.toString();
// console.log(check, typeof check);

// //Lưu ý: Kiểu dữ liệu nào cũng có thể chuyển sang được toString()

//2. Ép từ các kiểu khác sang số (Thường là chuỗi)
// let a = "10"; //string
// // a = +a;
// a = Number(a);
// console.log(a, typeof a);

//Lưu ý: Giá trị nào không chuyển sang được số sẽ trả về kết quả NaN (Not A Number)

//3. Ép các kiểu dữ liệu sang boolean
let a = -1;
a = Boolean(a);
console.log(a, typeof a);
/*
Các giá trị sau sẽ chuyển thành false
"", 0, null, undefined, NaN, false

Các trường hợp còn lại sẽ thành true
*/
