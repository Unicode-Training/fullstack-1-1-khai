//Thuật toán / giải thuật đệ quy
/*
- Chỉ áp dụng với hàm
- Gọi lại chính hàm đang định nghĩa để có thao tác lặp lại
- Lưu ý: Thiết lập điều kiện dừng --> Lặp vô hạn
- Trong lập trình web, đệ quy thường giải quyết các bài toán đa cấp

Ưu điểm: Dễ setup (Nhàn cho lập trình viên)
Nhược điểm: Chạy chậm (Khổ cho người dùng)
*/

// const showNumber = (n) => {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// };
// showNumber(10);

//Hiển thị số fibonacci
// const fibonacci = (n) => {
//   //n là vị trí số fibonacci cần tìm
//   if (n === 1 || n === 2) {
//     return 1;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };
// console.log(fibonacci(5)); //Cần tìm số fibonacci thứ 5

/*
fibonacci(5) = fibonacci(4) + fibonacci(3)
             = fibonacci(3) + 1 + 1 + 1
             = 1 + 1 + 1 + 1 + 1
*/

//Bài tập: Tính tổng các số nguyên từ n đến 1 bằng cách dùng đệ quy
// const getTotal = (n) => {
//   if (n === 1) {
//     return n;
//   }
//   return n + getTotal(n - 1);
// };
// console.log(getTotal(10)); //55

//Bài tập 2: Tính tổng các số chẵn từ n đến 1 bằng cách dùng đệ quy
const getTotal = (n) => {
  if (n === 0) {
    return 0;
  }
  //Kiểm tra n là số lẻ --> giảm đi 1 đơn vị để về số chẵn gần nhất
  if (n % 2 !== 0) {
    n--;
  }
  return n + getTotal(n - 2);
};
console.log(getTotal(11));
