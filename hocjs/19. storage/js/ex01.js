/*
localStorage, sessionStorage
- Chỉ hoạt động ở phía client
- Dung lượng lưu trữ khoảng 4-5mb
- Chỉ lưu trữ text
- Phân biệt theo origin = protocol + domain + port
- Không phân biệt theo path
- Không thể share data tới subdomain

localStorage: Thời gian trữ không giới hạn
- localStorage.getItem(key)
- localStorage.setItem(key, value)
- localStorage.removeItem(key)
- localStorage.clear()

sessionStorage: Chỉ hoạt động trong phiên của trình duyệt (Tắt trình duyệt tự xóa)
- sessionStorage.getItem(key)
- sessionStorage.setItem(key, value)
- sessionStorage.removeItem(key)
- sessionStorage.clear()

Cookie: Mẩu tin truyền từ client lên server (Lưu trữ ở client)
- Dung lượng lưu trữ thấp: vài kb
- Đọc được ở server và client
- Phân biệt theo path, domain
- Chia sẻ tới các subdomain
- Bảo mật: An toàn
+ HttpOnly --> Nếu được gắn http only vào cookie --> Chỉ server mới đọc được
+ Secure --> Chỉ hoạt động với https
- Server có thể set cookie bằng cách trả về 1 header có tên Set-Cookie
- Có thời gian sống rõ ràng: 
+ Session Cookie: Sống trong phiên trình duyệt
+ Persistent Cookie: Sống trong thời chỉ định

Cách set, get, delete cookie --> Thông qua object: document.cookie
*/

// document.cookie = "name=hoangan.web;path=/;max-age=3600";
// document.cookie = "email=contact@unicode.vn;path=/;max-age=3600";
// document.cookie = "age=33;path=/;max-age=3600";
// document.cookie = "name=hoangan.web;path=/;expires=" + new Date().toUTCString();

// const getCookie = (key) => {
//   const cookies = document.cookie.split(";");
//   const cookieMap = Object.fromEntries(
//     cookies.map((cookie) => {
//       return cookie.trim().split("=");
//     })
//   );
//   return cookieMap[key];
// };
// console.log(getCookie("email"));
