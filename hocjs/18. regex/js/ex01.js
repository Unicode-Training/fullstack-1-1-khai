//Biểu thức chính quy (Regular Expression)
// - Sử dụng các ký hiệu để xử lý chuỗi nâng cao
// - 3 tác dụng chính:
// + So khớp: Kiểm tra chuỗi khớp với biểu thức
// + Cắt chuỗi
// + Thay thế

//Cấu trúc: /cackyhieu/cauhinh

//Ví dụ:
// const pattern = /\d+/;
// const str = "abc-1";
// console.log(pattern.test(str));

//Web test biểu thức chính quy: https://regex101.com

//Các ký hiệu cơ bản
/*
- chuoibatky --> Kiểm tra chuỗi nằm trong 1 chuỗi cha
- ^ --> Khớp đầu chuỗi
- $ --> Khớp cuối chuỗi
- [A-Z] --> Khớp chữ hoa
- [a-z] --> Khớp chữ thường
- [0-9] --> Khớp số
- [charlist] --> Đưa vào các ký tự muốn kiểm tra. Ví dụ: [-_]
Lưu ý: Có thể kết hợp các biểu thức trong cặp ngoặc vuông tuy nhiên điều kiện kết hợp sẽ là hoặc
Nếu các biểu thức không nằm trong 1 cặp ngoặc vuông --> Kết hợp theo điều kiện AND, và phải đúng theo thứ tự
Các biểu thức mặc định sẽ có độ dài là 1

Các ký hiệu độ dài (Viết sau biểu thức)
- {value} --> Độ dài cố định
- {min, max} --> Độ dài từ min đến max
- {min,} --> Độ dài >=min

Các ký hiệu viết tắt của độ dài
- {0,} --> *
- {1,} --> +
- {0,1} --> ?

Phủ định: ^ (Viết trong biểu thức)

Hoặc: | (Thường sẽ kết hợp với ngoặc tròn để nhóm)

Khi gặp các ký tự đặc biệt trong Regex: [ ] . + ? * --> Cần thêm ký tự escape vào phía trước để bypass
Ví dụ: Kiểm tra trong chuỗi có ngoặc vuông hay không? 
\[

Ký hiệu đại diện cho tất cả ký tự: .

Các ký hiệu viết tắt khác: 

\w --> Tương tự [A-Za-z0-9_]
\W --> Phủ định của \w
\d --> [0-9]
\D --> Phủ định của \d
\s --> Khoảng trắng
\S --> Phủ định của \s
*/

//Ví dụ: Kiểm tra 1 chuỗi có 3 chữ HOA ở đầu chuỗi, sau đó đến @ sau đó đến >= 4 số ở cuối chuỗi
// const pattern = /^[A-Z]{3}@[0-9]{0,}$/;
// const str = "HOA@12345";
// console.log(pattern.test(str));

//Bài tập: Viết biểu thức chính quy kiểm tra 1 biến hợp lệ
// - Không được bắt đầu bằng số
// - Chấp nhận chữ cái (hoa, thường), số, gạch dưới, ký hiệu $
// - Độ dài tối thiểu là 1
// const pattern = /^[a-zA-Z_$][a-zA-Z_$0-9]{0,}$/;
// const variableName = "1hoangan";
// console.log(pattern.test(variableName));

//Bài tập: Kiểm tra 1 tên miền hợp lệ
// Cấu tạo: ten.mien
// 1. Tên:
/*
- Có ít nhất 1 ký tự
- Chấp nhận: Chữ hoa, thường, dấu chấm, số, gạch ngang và gạch dưới
- Phải bắt đầu bằng chữ cái hoặc số
- Không được kết thúc bằng gạch ngang, gạch dưới và dấu chấm
*/

//2. Miền
/*
- Chỉ chấp nhận chữ thường hoặc chữ hoa
- Độ dài từ 2 ký tự trở lên
*/

// const domain = "za.vn";

//Cắt chuỗi
// let content = "Xin chao anh em 01111 abc 022222";
// const pattern = /\d+/g;
// const result = content.match(pattern);
// console.log(result);

//Capturing Group: Kỹ thuật sử dụng cặp ngoặc tròn để chụp lại 1 phần của biểu thức chính quy
//Lưu ý: Không áp dụng với global

//None-Capturing Group: Kỹ thuật loại bỏ kết quả trong cặp ngoặc tròn --> Thêm ?: ở trong ngoặc tròn
// const str = "0388875179";
// const pattern = /^(?:0|\+84)(\d{9})$/;
// const result = str.match(pattern);
// console.log(result);

//Greedy --> Tình trạng tham lam khi sử dụng ký tự đại diện .
// Khắc phục bằng cách thêm ? vào sau độ dài

let html = `
<img alt="Ahihi" src="https://google.com/a.png" height="200" />
<img src="https://google.com/b.png" height="200" width="300" />
<img src="https://google.com/c.png" />
`;
//Yêu cầu: Lấy tất cả link ảnh trong đoạn html trên và lưu vào 1 mảng
const pattern = /<img.*src=".+?".*\/>/g;
const images = html.match(pattern);
const imageUrls = images.map((image) => {
  const pattern = /<img.*src="(.+?)".*\/>/;
  const result = image.match(pattern);
  return result[1];
});
console.log(imageUrls);
