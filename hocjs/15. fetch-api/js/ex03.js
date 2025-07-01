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
const root = document.querySelector("#root");

const getProfile = async () => {
  const response = await fetchWrapper(
    `https://api.escuelajs.co/api/v1/auth/profile`
  );
  const data = await response.json();
  if (data) {
    const nameProfileEl = document.querySelector(".name-profile");
    nameProfileEl.innerText = data.name;
  }
};

const render = () => {
  const loginForm = `<form action="">
      <div>
        <label for="">Email</label>
        <input type="email" name="email" placeholder="Email..." required />
      </div>
      <div>
        <label for="">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password..."
          required
        />
      </div>
      <button>Login</button>
    </form>`;
  const welcome = `
  <h1>Chào mừng bạn đã quay trở lại</h1>
  <span>Chào: <span class="name-profile"></span></span>
  <button class="logout-btn">Đăng xuất</button>
  `;
  const { accessToken } = getToken();
  if (accessToken) {
    root.innerHTML = welcome;
    getProfile();
    const logoutBtn = document.querySelector(".logout-btn");
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      render();
    });
  } else {
    root.innerHTML = loginForm;
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const email = formData.get("email");
        const password = formData.get("password");
        handleLogin(email, password);
      });
    }
  }
};
render();

const handleLogin = async (email, password) => {
  const response = await fetchWrapper(
    `https://api.escuelajs.co/api/v1/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );
  if (!response.ok) {
    alert("Thông tin đăng nhập không đúng");
    return;
  }
  const data = await response.json();
  saveToken(data);
  render();
};

//Fetch Wrapper
// const fetchWrapper = (url, options) => {
//   //Logic xử lý token
//   return fetch(url, options);
// };

// fetchWrapper('abc').then(data=> {

// })

//Vấn đề refresh nhiều lần (Nhiều request trên 1 trang)
/*
- Request 1 --> token ok --> data
- Request 2 --> token ok --> data
- Request 4 --> Token failed --> Refresh Token --> Gọi lại Request 4 --> Data
- Request 5 --> Token failed --> Refresh Token --> Gọi lại Request 5 --> Data

--> Dùng Promise xử lý
*/

getProfile();
getProfile();
