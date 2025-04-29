/*
- Nguyên thủy
- Tham chiếu: array, object, function

Khi khởi tạo 1 biến mang kiểu dữ liệu tham chiếu --> Tạo địa chỉ trong bộ nhớ --> Khi so sánh thì sẽ so sánh địa chỉ
*/
// const arr1 = [];
// const arr2 = [];
// if (arr1 === arr2) {
//   console.log("2 mảng giống nhau");
// } else {
//   console.log("2 mảng khác nhau");
// }

//Sao chép mảng
// const arr1 = ["An", "hoangan.web@gmail.com"];
// const arr2 = arr1; //Biến arr2 và arr1 có địa chỉ giống nhau --> So sánh được bằng toán tử bằng
// console.log(arr1 === arr2); //true

//Cách sao chép sang địa chỉ mới
// Sao chép nông (shallow copy)
//1. Dùng các phương thử xử lý mảng mà trả về mảng mới (slice, map, filter,...)
// const arr2 = arr1.slice(0);
// const arr2 = arr1.map((item) => item);
// const arr2 = arr1.filter(() => true);

//2. Dùng toán tử spread
// const arr2 = [...arr1];

//3. Sao chép sâu (deep copy)
//3.1. Viết hàm đệ quy để sao chép nông từng cấp
//3.2. Chuyển thành định dạng json sau đó chuyển ngược lại
// const json = JSON.stringify(arr1); //JSON là kiểu chuỗi dùng để đặc tả dữ liệu phức tạp
// const arr2 = JSON.parse(json);
// arr2[0] = "Hoàng An";
// console.log(arr2);
// console.log(arr1);

//So sánh 2 mảng
//1. So sánh nông (shallow compare)
//Ý tưởng: Duyệt qua từng phần tử của mảng thứ nhất, so sánh với từng phần tử của mảng thứ 2. Nếu bằng nhau hết kết luận 2 mảng giống nhau
const arr1 = [1, "An", true, ["Khải"], [[10]]];
const arr2 = [1, "An", true, ["Khải"], [[10]]];

const compareArray = (arr1, arr2) => {
  //Kiểm tra độ dài 2 mảng
  if (arr1.length !== arr2.length) {
    return false;
  }
  //So sánh từng phần tử của mảng 1 với từng phần tử của mảng 2
  return arr1.every((item, index) => {
    if (Array.isArray(item)) {
      return compareArray(item, arr2[index]);
    }
    return item === arr2[index];
  });
};
if (compareArray(arr1, arr2)) {
  console.log("2 mảng giống nhau");
} else {
  console.log("2 mảng khác nhau");
}
