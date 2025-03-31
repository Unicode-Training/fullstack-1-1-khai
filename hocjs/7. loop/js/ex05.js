//Vòng lặp while
/*
- Lặp với số lần lặp không xác định trước
- Dựa vào điều kiện đúng của biểu thức để chạy

while (dieukien) {
    Câu lệnh
    Câu lệnh để thay đổi điều kiện
}

Lưu ý: Các từ khóa break, continue vẫn như vòng lặp for
*/

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//Ví dụ: Cho trước 1 số nguyên n, lấy số nguyên đó chia cho 2 cho đến khi nào không chia được nữa, hiển thị số lần đã chia cho 2
// let n = 1000;
// let count = 0; //Đếm xem chia bao nhiêu lần
// while (n % 2 === 0) {
//   count++;
//   n = n / 2;
// }
// console.log(count);

//Vòng lặp do while
/*
Chỉ khác vòng lặp while ở lần chạy đầu tiên: Chạy nội dung vòng lặp trước sau đó mới kiểm tra điều kiện

==> Luôn chạy ít nhất 1 lần
*/
// let n = 100;
// while (n < 1) {
//   console.log(n);
// }
// do {
//   console.log(n);
// } while (n < 1);

//Bài tập: Cho trước 1 số nguyên n, đảo ngược số nguyên đó (Không dùng xử lý chuỗi)
let n = 12032004; //Output: 54321
let result = 0; //Lưu trữ kết quả

while (n > 0) {
  //Khi nào n === 0 --> Thoát vòng lặp
  let temp = n % 10; //Lấy số dư chia 10
  result = result * 10 + temp; //cộng vào kết quả
  n = (n - temp) / 10; //Giảm n xuống 1 đơn vị
}
console.log(result);
