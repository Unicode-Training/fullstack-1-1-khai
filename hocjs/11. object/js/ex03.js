//Prototype: Object có sẵn trong Javascript để giải quyết bài toán kế thừa
//Khi tạo object bằng cặp ngoặc nhọn {} --> Hàm bọc có tên là Object
//Instance --> Constructor (Array, String, Number) --> Object Constructor (Cụ tổ)
// Object.prototype.message = "Học JS không khó";
// const a = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };

// const b = {
//   age: 32,
//   address: "Hà Nội",
// };

// console.log(a);
// console.log(b);

// console.log(a.message);
// console.log(b.message);
// console.log(String.prototype);

// const fullname = "Hoàng An";
// console.log(fullname.message);
// console.log(fullname);

// const age = 32;
// console.log(age.message);

// const check = false;
// console.log(check.message);

// const users = [];
// console.log(users.message);

// const bigNumber = 123n;
// console.log(bigNumber.message);

// const demoSymbol = Symbol("ABC");
// console.log(demoSymbol.message);

// String.prototype.message2 = "Demo Prototype";
// const fullname = "Hoàng An";
// console.log(fullname.message2);

// const users = [];
// console.log(users.message2);

//Từ khóa this (context)
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getInfo: function () {
//     return {
//       age: 32,
//       getAge: function () {
//         console.log(this.age);
//       },
//       getEmail: () => {
//         console.log(this.email);
//       },
//     };
//   },
// };
// user.getInfo().getAge();
// user.getInfo().getEmail();

// const showMessage = function () {
//   console.log(this);
// };
// showMessage();

// const users = ["User 1", "User 2", "User 3"];
// Array.prototype.latest = function () {
//   console.log(this);
//   //this chính là instance mà gọi phương thức prototype
// };
// users.latest();

//bind, call, apply --> 3 phương thức của function (Bởi vì function cũng là object)
const a = {
  name: "Hoàng An",
  getInfo: function () {
    console.log(this);
  },
  setEmail: function (value) {
    this.email = value;
  },
  something: function (param1, param2, param3, param4) {
    console.log(this);
    console.log(param1, param2, param3, param4);
  },
};
const b = {
  email: "hoangan.web@gmail.com",
};

//bind: Thay đổi context (this) của 1 hàm
// a.getInfo.bind("A")();

//call:
// - Thay đổi context (this) của 1 hàm
// - Gọi hàm và truyền tham số (Nếu có)
// a.setEmail.call(b, "contact@unicode.vn");
// console.log(b);

//apply:
// - Thay đổi context (this) của 1 hàm
// - Gọi hàm và truyền tham số dưới dạng mảng
const args = ["Value 1", "Value 2", "Value 3", "Value 4"];
// a.something.apply(b, args);
a.something.call(b, ...args);
