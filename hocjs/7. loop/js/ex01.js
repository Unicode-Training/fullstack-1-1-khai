/*
Vòng lặp là gì?

- Cú pháp của ngôn ngữ lập trình cho phép đoạn chương trình chạy lặp đi lặp lại theo số lần nhất định (Phụ thuộc vào điều kiện lặp)
- 2 loại vòng lặp
+ Vòng lặp với số lần xác định trước (Lưu vào 1 biến): for
+ Vòng lặp với số lần không xác định trước (Phụ thuộc vào điều kiện tính toán): while, do while
*/

//Vòng lặp for
/*
Cú pháp: 
for (giatrikhoitao; dieukien; buocnhay) {
    Code
}
*/
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     for (let k = 1; k <= 5; k++) {
//       console.log(`i = ${i}, j = ${j}, k = ${k}`);
//     }
//   }
// }

//Từ khóa break: Thoát vòng lặp khi vòng lặp chưa chạy xong
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     break;
//   }
// }

//Từ khóa continue: Bỏ qua bước lặp
// for (let i = 1; i <= 10; i++) {
//   if (i === 5 || i === 6) {
//     continue;
//   }
//   console.log(i);
// }

//Bài 1: Tính tổng các số chẵn từ 1 đến n
// let n = 10;
// let total = 0; //Giả định ban đầu = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     total = total + i;
//   }
// }
// console.log(total);

//Bài 2: Tính n!
//5! = 1 * 2 * 3 * 4 * 5
// let n = 5;
// let result = 1;
// for (let i = 1; i <= n; i++) {
//   result = result * i;
// }
// console.log(result);

//Bài 3: Tính giá trị biểu thức sau
//total = 1 + 1*2 + 1*2*3 + ... + 1*2*3*...*n
// let n = 5; //1 + 1*2 + 1*2*3 + 1*2*3*4 + 1*2*3*4*5
// let total = 0;
// let temp = 1;
// for (let i = 1; i <= n; i++) {
//   temp = temp * i;
//   total = total + temp;
// }
// console.log(total);

//Bài 4: Kiểm tra 1 số xem có phải là số nguyên tố không?
/*
Điều kiện số nguyên tố:
- Phải là số nguyên
- Lớn hơn 1
- Chỉ chia hết cho 1 và chính nó
*/
let n = 1.5;
let check = true; //Giả định là số nguyên tố
if (n % 1 === 0 && n > 1) {
  //Tìm xem số n có chia hết cho số nào nữa không ngoài 1 và n
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      check = false;
      break;
    }
  }
} else {
  check = false;
}

if (check) {
  console.log("Là số nguyên tố");
} else {
  console.log("Không phải số nguyên tố");
}
