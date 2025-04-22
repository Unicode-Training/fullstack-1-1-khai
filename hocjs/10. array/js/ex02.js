//Mảng đa chiều (Nested Array)
// const myArr = [
//   ["User 1", "user1@gmail.com"],
//   ["User 2", "user2@gmail.com"],
//   ["User 3", "user3@gmail.com"],
// ];
// //Thêm phần tử mới cho mảng cha
// myArr[myArr.length] = ["User 4", "user4@gmail.com"];

// //Thêm phần tử mới vào mảng con
// // - Xác định index của mảng cha
// // - Truy cập vào mảng con thông qua index của mảng cha
// // - Thêm vào mảng con
// const findArr = myArr[2];
// findArr[findArr.length] = 32;
// console.log(myArr);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const size = 3;
//Chunk array --> [[1,2,3], [4,5,6], [7,8,9], [10]]

/*
[[]] --> [[1]] --> [[1,2]] --> [[1,2,3]]
[[1,2,3], [4]] --> [[1,2,3], [4,5]] --> [[1,2,3], [4,5,6]]
[[1,2,3], [4,5,6], [7]] --> [[1,2,3], [4,5,6], [7,8]] --> [[1,2,3], [4,5,6], [7,8, 9]] 
[[1,2,3], [4,5,6], [7,8, 9], [10]] 
*/
const newArr = [[]];
for (let i = 0; i < numbers.length; i++) {
  //Lấy số lượng phần tử của mảng con cuối cùng
  const lastChildArr = newArr[newArr.length - 1];
  const childrenArrLength = lastChildArr.length;
  if (childrenArrLength < size) {
    lastChildArr[lastChildArr.length] = numbers[i];
  } else {
    newArr[newArr.length] = [numbers[i]];
  }
}
console.log(newArr);

//Buổi sau: Học các hàm xử lý mảng
console.log(Array.prototype);
