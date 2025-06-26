/*
Authentication (Xác thực danh tính)
- Đăng nhập --> Server kiểm tra thông tin (Email, Password)
- Trả về token
- Frontend lưu token (Bộ nhớ trình duyệt: localStorage, sessionStorage, cookie)

Authorization (Ủy quyền)
- Khi cần lấy dữ liệu trên Server, tuy nhiên dữ liệu bị private
- Frontend gửi kèm token lấy được ở bước Authentication --> Server kiểm tra token có hợp lệ không?
+ Hợp lệ --> Trả về dữ liệu cần
+ Không hợp lệ --> Trả về thông báo lỗi

Token tạo bằng cách nào?
- JWT (JSON Web Token)
- Thuật toán khác

Làm sao để bảo vệ token?
- Hạ thời gian sống token xuống thấp --> Ảnh hưởng đến trải nghiệm
- Giải pháp: Sinh ra token mới gọi là refreshToken --> Dùng để cấp lại accessToken mới
*/

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");
  handleLogin(email, password);
});

const handleLogin = async (email, password) => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    alert("Thông tin đăng nhập không đúng");
    return;
  }
  const data = await response.json();
  saveToken(data);
};

const saveToken = (token) => {
  localStorage.setItem("accessToken", token.access_token);
  localStorage.setItem("refreshToken", token.refresh_token);
};
