const getToken = () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  return {
    accessToken,
    refreshToken,
  };
};
const saveToken = (token) => {
  localStorage.setItem("accessToken", token.access_token);
  localStorage.setItem("refreshToken", token.refresh_token);
};

const removeToken = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

const refreshToken = async () => {
  const { refreshToken } = getToken();
  if (refreshToken) {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/auth/refresh-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      }
    );
    //Kiểm tra response.ok trả về true hay false?
    //Nếu trả về false --> Xử lý đăng xuất
    if (!response.ok) {
      return false;
    }
    const newToken = await response.json();
    return newToken;
  }
};
let refreshTokenPromise = null;
const fetchWrapper = async (url, options = {}) => {
  const { accessToken } = getToken();
  if (accessToken) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }
  const response = await fetch(url, options);

  if (response.status === 401) {
    //Xử lý refresh token
    if (!refreshTokenPromise) {
      refreshTokenPromise = refreshToken();
    }
    const newToken = await refreshTokenPromise;
    if (!newToken) {
      //Đăng xuất
      removeToken();
      window.location.reload(); //Reload trang
    } else {
      //Lưu lại vào localStorage
      saveToken(newToken);
      return fetchWrapper(url, options);
    }
  }

  return response;
};
