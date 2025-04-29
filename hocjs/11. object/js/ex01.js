//1. Object Literal (Đối tượng nguyên bản)
//2. Function Constructor (Hàm tạo)
//3. Class

//Khởi tạo đối tượng
// const myObj = {};
const myObj = {
  //key1: value1,
  //key2: value2,
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  status: false,
  age: 32,
  shipping_address: "Hà Nội",
  shippingAddress: "Hồ Chí Minh",
};

//Thêm key mới vào object
// myObj.address = "Hà Nội";
// myObj["address"] = "Hà Nội";

//Cập nhật lại giá trị của 1 key trong object
// myObj.email = "contact@unicode.vn";

//Xóa key trong object
// delete myObj.age;

//Truy cập vào 1 key
// const value = myObj.email;
// console.log(value);

// console.log(myObj);

//Duyệt tất cả key trong object
// for (let key in myObj) {
//   const value = myObj[key];
//   console.log(key, value);
// }

// Object.keys(myObj).forEach((key) => {
//   const value = myObj[key];
//   console.log(key, value);
// });

// const errors = {
//   email: "Vui lòng nhập địa chỉ email",
// };
//Viết chương trình kiểm tra object errors có dữ liệu không?
// let isEmpty = true;
// for (let key in errors) {
//   isEmpty = false;
//   break;
// }
// if (isEmpty) {
//   console.log(`errors không có dữ liệu`);
// } else {
//   console.log(`errors có dữ liệu`);
// }

// if (Object.keys(errors).length) {
//   console.log("Object có dữ liệu");
// } else {
//   console.log("Object không có dữ liệu");
// }

// const data = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   status: null,
//   age: null,
// };
// //Viết chương trình xóa các key có giá trị null trong object trên
// for (let key in data) {
//   const value = data[key];
//   if (value === null) {
//     delete data[key];
//   }
// }
// console.log(data);

//Object.values(): Trả về 1 mảng chứa các values
// console.log(Object.values(myObj));

//Object.entries(): Trả về 1 mảng 2 chiều chứa cả key và value
// console.log(Object.entries(myObj));

//Object.fromEntries(): Chuyển từ mảng 2 chiều (entries) thành object theo cặp key value
// const data = [
//   ["name", "Hoàng An"],
//   ["email", "hoangan.web@gmail.com"],
// ];
// const obj = Object.fromEntries(data);
// console.log(obj);

//Object.assign(): Gộp các object thành một object
// const obj1 = {
//   name: "Hoàng an",
//   email: "hoangan.web@gmail.com",
// };
// const obj2 = {
//   age: 32,
//   address: "Hà Nội",
// };
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);
// console.log(obj1);
// console.log(obj2);

const query = {
  keyword: "Hoàng An",
  status: "active",
  category: 1,
  page: 1,
};
//Chuyển object trên thành dạng query string: keyword=Hoàng+An&status=active&category=1
// let queryString = "";
// for (let key in query) {
//   const value = query[key];
//   //   queryString = `${queryString}${key}=${value}&`;
//   queryString += `${key}=${value}&`;
// }
// queryString = queryString.replaceAll(" ", "+").slice(0, queryString.length - 1);
// console.log(queryString);

const queryString = Object.entries(query)
  .map((item) => {
    return item.join("=");
  })
  .join("&")
  .replaceAll(" ", "+");
console.log(queryString);
