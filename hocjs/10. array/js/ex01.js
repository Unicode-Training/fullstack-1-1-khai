/*
Mảng thể hiện 1 danh sách các giá trị (Bất kỳ kiểu dữ liệu)
- Mỗi giá trị trong mảng gọi là 1 phần tử
- Đi kèm với mỗi giá trị là 1 chỉ số (index) --> Tăng tuần tự từ 0
*/

//Khai báo mảng
// const myArr = []; //Khai báo mảng rỗng
// console.log(myArr);

// const myArr2 = ["An", 1, 3, false]; //Khai báo màng có giá trị ban đầu
// console.log(myArr2);

//Kiểm tra biến có phải mảng không?
// console.log(Array.isArray(myArr));

//Thêm dữ liệu vào mảng
// const myArr = [];
// myArr[0] = "An";
// myArr[1] = "Khải";
// myArr[myArr.length] = 1;

// //Truy cập vào phần tử mảng (Xác định được index)
// // console.log(myArr[1]);

// //Cập nhật giá trị của mảng (Xác định được index)
// myArr[1] = "Khải 2";

//Duyệt qua tất cả phần tử của mảng
// for (let i = 0; i < myArr.length; i++) {
//   const value = myArr[i];
//   console.log(value);
// }

// for (let index in myArr) {
//   //Giá trị index trong vòng lặp này sẽ là chuỗi
//   const value = myArr[index];
//   //   console.log(value);
//   console.log(index, typeof index, value);
// }

// for (let value of myArr) {
//   console.log(value);
// }

//Xóa phần tử trong mảng
// 1. Xác định được index cần xóa
// 2. Duyệt qua từng phần tử trong mảng
// 3. Thêm các phần tử trong mảng vào 1 mảng mới (Loại trừ phần tử cần xóa)
// const users = ["User 1", "User 2", "User 3", "User 4"];
// const newUsers = [];
// for (let i = 0; i < users.length; i++) {
//   if (i === 1) {
//     continue;
//   }
//   const value = users[i];
//   newUsers[newUsers.length] = value;
// }
// console.log(newUsers);

//Bài tập 1: Thêm 1 phần tử vào đầu mảng users
// const users = ["User 1", "User 2", "User 3", "User 4"];
// const newElement = "User 0";
// const newUsers = [];
// newUsers[0] = newElement;
// for (let i = 0; i < users.length; i++) {
//   const value = users[i];
//   newUsers[newUsers.length] = value;
// }
// console.log(newUsers);

//Bài tập 2: Tìm phần tử có giá trị null và đổi chỗ với phần tử cuối cùng của mảng
// const myArr = ["An", 10, false, null, "Unicode", "Javascript"];
// //Output: ["An", 10, false, "Javascript", "Unicode", null];
// console.log(myArr);

// //B1: Tìm ra index của phần tử có giá trị null
// let indexNull;
// for (let i = 0; i < myArr.length; i++) {
//   const value = myArr[i];
//   if (value === null) {
//     indexNull = i;
//     break;
//   }
// }
// //B2: Nếu indexNull có giá trị >=0 --> Tiến hành đổi chỗ với phần tử cuối
// if (indexNull >= 0) {
//   const lastElement = myArr[myArr.length - 1];
//   myArr[indexNull] = lastElement;
//   myArr[myArr.length - 1] = null;
// }
// console.log(myArr);

//Thuật toán sắp xếp nổi bọt
// const myArr = [5, 2, -1, 8, 3]; //[-1, 2, 3, 5, 8]
//Kỹ thuật: So sánh từng phần tử với các phần tử phía sau nó, nếu phần tử nào không thỏa mãn thì đổi chỗ
/*
Lần 1:
- So sánh 5 với 2
- So sánh 5 với -1
- So sánh 5 với 8
- So sánh 5 với 3

Lần 2:
- So sánh 2 với -1
- So sánh 2 với 8
- So sánh 2 với 3
*/
// for (let i = 0; i < myArr.length - 1; i++) {
//   for (let j = i + 1; j < myArr.length; j++) {
//     if (myArr[i] > myArr[j]) {
//       //Đổi chỗ myArr[i] và myArr[j]
//       const tmp = myArr[i]; //Gán vào biến trung gian
//       myArr[i] = myArr[j];
//       myArr[j] = tmp;
//     }
//   }
// }
// console.log(myArr);

//a = 10
//b = 20
//c = a
//a = b = 20;
//b = c

//Tìm giá trị lớn nhất của 1 mảng
// const myArr = [5, 2, -1, 8, 3];
// let max = myArr[0];
// for (let i = 1; i < myArr.length; i++) {
//   if (max < myArr[i]) {
//     max = myArr[i];
//   }
// }
// console.log(max);
