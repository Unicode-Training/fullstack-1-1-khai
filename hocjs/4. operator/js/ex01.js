//Toán tử: Được dùng để kết nối các toán hàng và tạo thành biểu thức
//Ví dụ: s = 1 + 2 * 3 / 4 --> Biểu thức

//1. Toán tử số học
// +, -, *, /, %
// ** --> Lũy thừa
// ++ --> Tăng 1 đơn vị
// -- --> Giảm 1 đơn vị
// let count = 1;
// let total = 0;
// total = count--;
// console.log("count", count);
// console.log("total", total);

// let count = 1;
// let total = count++ + ++count + count++ + ++count;
// console.log(total);

//2. Toán tử so sánh
// - Luôn trả về giá trị boolean
// - Không nên so sánh với true, false, null, undefined
// Các toán tử: >, <, >=, <=, ==, !=, ===, !==
/*
=== --> So sánh bằng nghiêm ngặt (Cả giá trị và kiểu dữ liệu) --> Nên dùng
!== --> So sánh khác nghiêm ngặt (Cả giá trị và kiểu dữ liệu) --> Nên dùng
*/

// let a = "9";
// let b = "a";
// let check = a < b;
// console.log(check);

//3. Toán tử luận lý
// - && --> Và
// - || --> Hoặc
// - ! --> Phủ định

//3.1. Cách hoạt động của toán tử &&
// - Toán tử && sẽ kết hợp các biểu thức logic con lại với nhau
// - Toán tử && chỉ trả về true nếu các biểu thức con đúng
// - Tìm falsy, khi nào thấy falsy thì sẽ dừng lại và trả về kết quả falsy, nếu không tìm thấy thì trả về giá biểu thức cuối cùng

//3.2. Cách hoạt động của toán tử ||
// - Toán tử || sẽ kết hợp các biểu thức logic con lại với nhau
// - Toán tử || sẽ trả về true khi có ít nhất 1 biểu thức con đúng
// - Tìm truthy, khi nào thấy truthy thì sẽ dừng lại vầ trả về kết quả truthy, nếu không tìm thấy thì sẽ trả về biểu thức cuối cùng

//3.3. Cách hoạt động của toán tử !
// - Trả về kết quả ngược lại của biểu thức

//4. Truthy, Falsy
/*
- 1 giá trị trong điều kiện phải chuyển về boolean để thực hiện so sánh mà mang kết quả giống như true --> truthy
- 1 giá trị trong điều kiện phải chuyển về boolean để thực hiện so sánh mà mang kết quả giống như false --> falsy
*/

// let a = 0;
// let b = 10;
// let check = a || b === 20 || "Unicode";
// console.log(check);

//5. Toán tử nullish (??)
// Cú pháp: a ?? b
// Cách hoạt động: a bằng null hoặc undefined sẽ lấy b ngược lại lấy a
// let a = null;
// let b = 10;
// let total = a ?? b;
// console.log(total);

//6. Toán tử 3 ngôi (?:)
// Cú pháp: dieukien ? giatridung : giatrisai
// Cách hoạt động: Nếu dieukien đúng lấy giá trị trước :, ngược lại lấy sau :
let a = 0;
let b = 20;
let c = 30;
let result = a ? b : c;
console.log(result);
