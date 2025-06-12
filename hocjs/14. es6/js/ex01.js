//Object, Array

//Destructuring: Phá vỡ cấu trúc của object, array để truy cập vào các thuộc tính, phần tử và trả về các biến riêng biệt

// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 33,
//   address: "Hà Nội",
//   position: "Teacher",
// };
// let name = user.name;
// let email = user.email;
// const { name: myName, email, age = 32, ...rest } = user;
// console.log(myName, email);
// console.log(age);
// console.log(rest);

// const users = ["Hoàng An", "hoangan.web@gmail.com", 32, "Hà Nội", "Teacher"];
// const [myName, email, , address] = users;
// console.log(myName, email, address);
// const [myName, email, ...rest] = users;
// console.log(myName, email);
// console.log(rest);

//Spread: Dải các key, phần tử trong object, array ra ngoài
// const job = {
//   position: "Teacher",
//   salary: 1000,
// };
// const info = {
//   address: "Hà Nội",
//   country: "Vietnam",
// };
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   ...job,
//   ...info,
// };
// console.log(user);
// const jobs = ["Teacher", "Developer", "Designer"];
// const users = ["Hoàng An", "hoangan.web@gmail.com", ...jobs];
// console.log(users);

//Lưu ý với spread:
// - Chỉ dải được 1 cấp
// - Trước khi dải thì phải đảm bảo ở ngoài nó là array hoặc object
const users = Object.freeze(["User 1", "User 2", "User 3"]);
const newUsers = [...users, "User 4"];
console.log(newUsers);
