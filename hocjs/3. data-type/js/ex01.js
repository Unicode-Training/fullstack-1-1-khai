//Danh sách kiểu dữ liệu trong js
/*
Nhóm 1: Kiểu dữ liệu nguyên thủy
1. number
2. string
3. undefined
4. boolean
5. null
6. bigInt
7. symbol

Nhóm 2: Kiểu dữ liệu tham chiếu
8. object
*/

//Cách kiểm tra 1 biến thuộc kiểu dữ liệu nào: typeof tenbien (Không phải kiểu nào cũng kiểm tra được)

//1. number
// let age = 32;
// console.log(age, typeof age);

//2. string
// let fullname = "Hoàng An";
// console.log(fullname, typeof fullname);

//3. undefined
// let user = undefined;
// console.log(user, typeof user);

//4. boolean
// let check = false;
// console.log(check, typeof check);

//5. null
// let user = null;
// console.log(user, typeof user);

//6. bigInt
// let price = 12000n;
// let price = BigInt(12000);
// console.log(price, typeof price);

//7. symbol
// let key = Symbol("Hoàng An");
// console.log(key, typeof key);

//8. object
// - Literal Object
// let user = {
//   name: "Hoàng An",
//   age: 32,
// };
// console.log(user, typeof user);

// - Array
// let users = ["An", "Khải", "Tùng"];
// console.log(users, typeof users);

// - Function
function something() {
  console.log("something");
}
something();
console.log(typeof something);
//Function vẫn là object cho dù typeof không ra object

// let price = 120000000;
