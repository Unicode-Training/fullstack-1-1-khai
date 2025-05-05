//Function Constructor: Hàm tạo dùng định nghĩa cấu trúc của 1 đối tượng (Bản thiết kế)
//PascalCase: CustomerModel, CustomerService
//Trong constructor
/*
Thuộc tính non-static, Phương thức non-static --> Phụ thuộc vào instance (Phải khởi tạo từ khóa new)
Thuộc tính static, phương thức static --> Không bị phụ thuộc bởi instance, truy cập trực tiếp qua constructor

Từ khóa this trong phương thức non-static chính là instance
Từ khóa this trong phương thức static chính là constructor

Lưu ý: Phương thức và thuộc tính được tạo ra bằng prototype cũng là non-static
*/
// const User = function (name, email) {
//   //Thuộc tính
//   this.name = name;
//   this.email = email;
//   this.text = "Hà Nội";
//   //Phương thức
//   this.getName = function () {
//     return this.name;
//   };
//   this.getEmail = function () {
//     return this.email;
//   };
// };

// User.message = "Hello anh em";
// User.getMessage = function () {
//   // return "Chào anh em JavaScript";
//   const instance = new this();

//   return instance.text;
// };
// // console.log(User.message);
// console.log(User.getMessage());

//Khởi tạo instance từ constructor
// const user1 = new User("User 1", "user1@gmail.com");
// console.log(user1);
// const user2 = new User("User 2", "user2@gmail.com");
// console.log(user2);

//Làm thế nào để kiểm tra 1 instance thuộc constructor nào?
// const user1 = new User("User 1", "user1@gmail.com");
// if (user1 instanceof User) {
//   console.log("user1 được tạo từ User");
// }

// const users = ["User 1", "User 2"];
// if (users instanceof Array) {
//   console.log("users được tạo từ Array");
// }

//Lấy tên constructor của 1 instance
// const user1 = new User("User 1", "user1@gmail.com");
// console.log(user1.constructor.name);
