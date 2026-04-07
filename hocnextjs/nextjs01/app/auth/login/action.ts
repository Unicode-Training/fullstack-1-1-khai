"use server";
export const handleLogin = async (
  initialState: {
    message: string;
    success?: boolean;
  },
  formData: FormData,
) => {
  const email = formData.get("email");
  const password = formData.get("password");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (!email || !password) {
    return {
      message: "Email và password không được để trống",
      success: false,
    };
  }
  return {
    message: "Đăng nhập thành công",
    success: true,
  };
};
