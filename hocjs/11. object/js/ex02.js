//So sánh object (So sánh địa chỉ)
//1. Shallow compare
//2. Deep compare

//Các bước thực hiện
//1. So sánh số lượng key của 2 object xem có bằng nhau không? --> Nếu không bằng nhau kết luận 2 object khác nhau
//2. So sánh giá trị của từng key trong object thứ nhất với giá trị của từng key trong object thứ 2

// const a = {
//   name: "Hoàng An",
//   age: 32,
//   meta: {
//     value: "Unicode",
//     children: {
//       email: "hoangan.web@gmail.com",
//     },
//   },
// };
// const b = {
//   name: "Hoàng An",
//   age: 32,
//   meta: {
//     value: "Unicode",
//     children: {
//       email: "hoangan.web@gmail.com",
//     },
//   },
// };
// const isObject = (obj) => {
//   //Kiểm tra 1 biến có phải object không?
//   // - typeof = object
//   // - Không phải là mảng
//   // - Không phải là null
//   return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
// };
// const compareObject = (obj1, obj2) => {
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//     return false;
//   }
//   for (let key in obj1) {
//     const value1 = obj1[key];
//     const value2 = obj2[key];
//     if (isObject(value1) && isObject(value2)) {
//       return compareObject(value1, value2);
//     }
//     if (value1 !== value2) {
//       return false;
//     }
//   }
//   return true;
// };

// const check = compareObject(a, b);
// console.log(check);

//Copy object: Copy object cũ sang 1 địa chỉ mới
//1. shallow copy
//2. deep copy

const a = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  meta: {
    value: "Javascript",
  },
};
// const b = a;
// const b = { ...a }; //spread operator (shallow copy)
// const b = Object.assign({}, a); //shallow copy
const json = JSON.stringify(a);
const b = JSON.parse(json);
b.name = "Hoàng An Unicode";
b.meta.value = "Reactjs";

console.log(a);
console.log(b);
