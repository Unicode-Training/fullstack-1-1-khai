//Các hàm xử lý
console.log(Array.prototype);

const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];

//1. length
// console.log(myArr.length);
// myArr.length = 3;
// console.log(myArr);

//2. concat(...array): Nối nhiều mảng thành 1 mảng
// const array1 = [1, 2, 3];
// const array2 = ["A", "B", "C"];
// const newArr = myArr.concat(array1, array2);
// console.log(newArr);

//3. indexOf(value): Kiểm tra xem value có trong mảng hay không? Nếu có trả về index đầu tiên tìm được, không có trả về -1
// console.log(myArr.indexOf("Item 2"));

//4. lastIndexOf(value): Kiểm tra xem value có trong mảng hay không? Nếu có trả về index cuối cùng tìm được, không có trả về -1
// console.log(myArr.lastIndexOf("Item 2"));

//5. includes(value): Kiểm tra xem value có trong mảng hay không? Nếu có trả về true, không cá trả về false
// console.log(myArr.includes("Item 2"));

//6. slice(start,end): Cắt mảng từ start đến end-1 và trả về mảng mới
// console.log(myArr.slice(1, 3));
// console.log(myArr.slice(1));
// console.log(myArr.slice(-2));

//7. join(separator): Nối các phần tử mảng thành chuỗi
// console.log(myArr.join("-"));

//8. fill(value): Thay thế giá trị các phần tử trong mảng thành value (Trả về mảng mới sau khi đã thay và thay đổi luôn mảng ban đầu)
// const newArr = myArr.fill();
// console.log(newArr);
// console.log(myArr);

//9. push(): Thêm các phần tử vào cuối mảng (Thay đổi mảng ban đầu, trả về số lượng phần tử sau khi thêm)
// const count = myArr.push("A", "B", "C");
// console.log(count);
// console.log(myArr);

//10. unshift(): Thêm các phần tử vào đầu mảng (Thay đổi mảng ban đầu, trả về số lượng phần tử sau khi thêm)
// const count = myArr.unshift("A", "B", "C");
// console.log(count);
// console.log(myArr);

//11. pop(): Xóa phần tử cuối mảng (Trả về giá trị phần tử đã xóa và thay đổi mảng ban đầu)
// const value = myArr.pop();
// console.log(value);
// console.log(myArr);

//12. shift(): Xóa phần tử đầu mảng (Trả về giá trị phần tử đã xóa và thay đổi mảng ban đầu)
// const value = myArr.shift();
// console.log(value);
// console.log(myArr);

//13. reverse(): Đảo ngược mảng (Trả về mảng mới sau khi đảo ngược và thay đổi mảng ban đầu)
// const newArr = myArr.reverse();
// console.log(newArr);
// console.log(myArr);

//14. sort()
// const myArr = ["Tùng", "Dũng", "An", "Văn"];
// myArr.sort();
// console.log(myArr);

//Nâng cao của hàm sort()
// myArr.sort((a, b) => {
//   //   console.log(`a: ${a}, b: ${b}`);
//   //Nếu hàm này trả về số âm --> Đổi chỗ
//   if (b < a) {
//     return -1;
//   }
// });
// console.log(myArr);

//15. splice(start, count): Xóa count phần từ start
// myArr.splice(0, 1);
// console.log(myArr);

//Bài tập: Sắp xếp mảng sau tăng dần theo tên
const customers = [
  "Tạ Hoàng An",
  "Nguyễn Văn Dũng",
  "Nguyễn Tuấn Anh",
  "Phạm Văn Tuấn",
];
/*
[
"Tạ Hoàng An",
"Nguyễn Tuấn Anh",
"Nguyễn Văn Dũng",
"Phạm Văn Tuấn",
]
*/
// const getFirstname = (fullname) => {
//   return fullname.split(" ").slice(-1)[0];
// };

// customers.sort((a, b) => {
//   const firstNameA = getFirstname(a);
//   const firstNameB = getFirstname(b);
//   if (firstNameA < firstNameB) {
//     return -1;
//   }
// });
// console.log(customers);

//Bài tập: Chuyển mảng dưới đây thành mảng 1 chiều (Làm phẳng mảng)
// Yêu cầu: Không được dùng hàm flat có sẵn của array
const arr = [[1], [2], [[3], 4], 5, 6, [[[[7]]]]];
console.log(arr);

//Output: [1,2,3,4,5,6]
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   const value = arr[i];
//   if (!Array.isArray(value)) {
//     newArr.push(value);
//   } else {
//     //value là 1 mảng
//     //Duyệt value --> Sau đó kiểm tra các phần tử của value
//     //Nếu không phải là mảng --> push vào newArr
//     //Nếu là mảng lại lại lặp lại bước duyệt (Đi sâu thêm 1 cấp nữa)
//     for (let j = 0; j < value.length; j++) {
//       const item = value[j];
//       if (!Array.isArray(item)) {
//         newArr.push(item);
//       } else {
//         //
//       }
//     }
//   }
// }
// console.log(newArr);

// const newArr = [];
// const flatArray = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];
//     if (!Array.isArray(value)) {
//       newArr.push(value);
//     } else {
//       flatArray(value);
//     }
//   }
// };
// flatArray(arr);
// console.log(newArr);

/*
forEach
map
filter
find
findLast
findIndex
findLastIndex
some
every
reduce
*/
