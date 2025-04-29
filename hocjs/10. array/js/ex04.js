// const myArr = ["User 1", "User 2", "User 3", "User 4"];
//1. forEach
// myArr.forEach(function (value, index) {
//   console.log(value, index);
// });

//2. map
// - Duyệt giống forEach
// - Trả về 1 mảng mới có số lượng phần tử giống mảng cũ
// - Giá trị từng phần tử của mảng mới là giá trị trả về của callback
// const newArr = myArr.map(function (value, index) {
//   console.log(value, index);
//   return `${index + 1} - ${value}`;
// });
// console.log(newArr);

//3. filter
//- Duyệt giống forEach
//- Trả về 1 mảng chứa các phần tử của mảng ban đầu nếu callback trả về là truthy
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArr = numbers.filter(function (value, index) {
//   return value % 2 === 0;
// });
// console.log(newArr);

//4. find
// - Duyệt giống forEach
// - Trả về phần tử đầu tiên tìm được
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = numbers.find(function (value) {
//   return value % 2 === 0;
// });
// console.log(result);

//5. findLast
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = numbers.findLast(function (value) {
//   return value % 2 === 0;
// });
// console.log(result);

//6. findIndex
//- Giống find nhưng trả về index
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = numbers.findIndex(function (value) {
//   return value % 2 === 0;
// });
// console.log(result);

//7. findLastIndex
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = numbers.findLastIndex(function (value) {
//   return value % 2 === 0;
// });
// console.log(result);

//Bài tập:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Yêu cầu 1: Tính tổng các số chẵn trong mảng (Dùng các hàm ở trên)
// let total = 0;
// numbers.forEach((value) => {
//   if (value % 2 === 0) {
//     total += value;
//   }
// });
// console.log(total);

//Yêu cầu 2: Tìm các số chẵn trong mảng và trả về mảng mới. Sau đó tăng từng số chẵn thêm 2 đơn vị
//Output: [4, 6, 8, 10]
// const newArr = numbers
//   .filter((value) => {
//     return value % 2 === 0;
//   })
//   .map((value) => {
//     return value + 2;
//   });
// console.log(newArr);

//Yêu cầu 3: Xóa các phần tử chẵn trong mảng
// const newArr = numbers.filter((value) => {
//   return value % 2 !== 0;
// });
// console.log(newArr);

//8. every
// - Trả về true/false
// - Trả về true nếu tất cả các phần tử trả về truthy
// const numbers = [1, 3, 5, 7, 9];
// const result = numbers.every((value) => {
//   return value % 2 !== 0;
// });
// console.log(result);

//9. some
// - Chỉ cần ít nhất 1 phần tử đúng
// const numbers = [1, 3, 5, 7, 9, 2];
// const result = numbers.some((value) => {
//   return value % 2 === 0;
// });
// console.log(result);

//10. reduce
/*
Cú pháp: 
const result = myArr.reduce(function(prev, current, index) {
    //Logic
}, initialValue)
*/
// const numbers = [5, 10, 15, 20, 25, 30];
// console.log(numbers);

// const result = numbers.reduce((prev, current, index) => {
//   console.log(`prev: ${prev}`, `current: ${current}`, `index: ${index}`);
//   return current;
// }, 0);
// console.log(result);

// const total = numbers.reduce((prev, current) => {
//   console.log(`prev: ${prev}`);

//   return prev + current;
// }, 0);
// console.log(total);

//Bài tập: Tìm phần tử lớn nhất (Dùng reduce)
// const numbers = [5, 2, 1, 9, -1];
// const result = numbers.reduce((max, number) => {
//   if (max < number) {
//     return number;
//   }
//   return max;
// });
// console.log(result);

// const arr1 = [1, 2, 5, 7];
// const arr2 = [3, 2, 7];
//Tìm phần tử giao giữa 2 mảng (Có trong mảng 1 và mảng 2)
//Output: [2,7]
// const result = arr1.reduce((prev, current) => {
//   //Kiểm tra xem current có nằm trong arr2 không?
//   if (arr2.includes(current)) {
//     prev.push(current);
//   }
//   return prev;
// }, []);
// console.log(result);

//Lọc trùng mảng
const myArr = ["User 1", "User 2", "User 1", "User 3"];
//Logic chung:
// - Tạo mảng mới
// - Duyệt qua từng phần tử của mảng cũ
// - Thêm phần tử mảng mới (Trước khi thêm kiểm tra xem phần tử có tồn tại trong mảng không?)
let a = 10;
const newArr = myArr.reduce((prev, current) => {
  if (!prev.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);

console.log(newArr);
