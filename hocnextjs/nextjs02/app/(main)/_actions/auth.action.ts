"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginAction = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const response = await fetch(`${process.env.SERVER_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  const cookieStore = await cookies();
  cookieStore.set(`accessToken`, data.accessToken, {
    httpOnly: true,
    maxAge: 3600,
  });
  cookieStore.set(`refreshToken`, data.refreshToken, {
    httpOnly: true,
    maxAge: 3600,
  });
  return redirect(`/`);
};

export const getCurrentUser = async () => {
  //Lấy token
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  if (!accessToken) {
    return;
  }
  const response = await fetch(`${process.env.SERVER_API}/profile/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await response.json();
  return data.user;
};

export const logout = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  if (!accessToken) {
    return;
  }
  //Gọi backend để thêm blacklist
  fetch(`${process.env.SERVER_API}/auth/logout`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  cookieStore.delete(`accessToken`);
  cookieStore.delete(`refreshToken`);
  return redirect("/auth/login");
};
