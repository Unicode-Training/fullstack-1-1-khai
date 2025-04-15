/*
Chuỗi: Kiểu dữ liệu nguyên thủy
- Trong các kiểu dữ liệu nguyên thủy, JS bọc 1 object tạm thời để chứa các phương thức, thuộc tính xử lý tương ứng với kiểu dữ liệu đó (Trừ null và undefined)
- Constructor: String
*/

//Muốn kiểm tra các phương thức, thuộc tính của 1 kiểu dữ liệu nào đó: TenConstructor.prototype
console.log(String.prototype);

// let str = "Học JS không JS khó";

//1. length --> Lấy độ dài của chuỗi
// console.log(str.length);

//2. charAt(index) --> Lấy ký tự của chuỗi theo index (index bắt đầu từ 0)
// console.log(str.charAt(1));

//3. charCodeAt(index) --> Lấy mã ASCII của ký tự theo index
// console.log(str.charCodeAt(0));

//4. indexOf(subStr) --> Tìm vị trí xuất hiện đầu tiên của chuỗi subStr trong chuỗi str, nếu không tìm thấy trả về -1
// console.log(str.indexOf("JS"));

//5. lastIndexOf(subStr) --> Tìm vị trí xuất hiện cuối cùng của chuỗi subStr trong chuỗi str, nếu không tìm thấy trả về -1
// console.log(str.lastIndexOf("JS"));

//6. includes(subStr) --> Tìm kiếm chuỗi con trong chuỗi cha, trả về true/false
// console.log(str.includes("JS"));

//7. slice(start, end) --> Cắt chuỗi từ vị trí start đến end-1
// console.log(str.slice(0, 5));
// console.log(str.slice(1)); //Cắt từ 1 đến hết
// console.log(str.slice(-5));

//8. replace(sub1, sub2) --> Tìm chuỗi sub1 và thay thế thành sub2 (Thay thế chuỗi đầu tiên tìm được)
// console.log(str.replace("JS", "PHP"));

//9. replaceAll(sub1, sub2) --> Giống replace, chỉ khác thay thế tất cả
// console.log(str.replaceAll("JS", "PHP"));

//10. repeat(count) --> Nhân bản chuỗi thành số lần xác định
// console.log(str.repeat(3));

//11. toLowerCase() --> chuyển các ký tự trong chuỗi thành chữ thường
// console.log(str.toLowerCase());

//12. toUpperCase() --> chuyển các ký tự trong chuỗi vào chữ hoa
// console.log(str.toUpperCase());

//13. split(separator) --> Tách chuỗi thành mảng dựa vào ký tự phân cách
// console.log(str.split(" "));

//14. trim() --> Xóa khoảng trắng đầu và cuối chuỗi

//15. trimStart() --> Xóa khoảng trắng đầu chuỗi

//16. trimEnd() --> Xóa khoảng trắng cuối chuỗi
// let fullname = ` Tạ Hoàng An `;
// console.log(fullname);
// console.log(fullname.trim());

//17. match(pattern) --> Cắt chuỗi dựa vào biểu thức chính quy
// let content = `Hello anh em, so dien thoai la 0388875179 va 0123456789`;
// let pattern = /(0|\+84)\d{9}/g;
// console.log(content.match(pattern));

//18. startsWith(subStr) --> Tìm chuỗi con xuất hiện ở đầu chuỗi cha

//19. endsWith(subStr) --> Tìm chuỗi con xuất hiện ở cuối chuỗi cha
let str = "A JS học lập trình không khó";
console.log(str.endsWith("JS"));
