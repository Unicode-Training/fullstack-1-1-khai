"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { fetchWrapper } from "../utils/fetch";

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
  const response = await fetchWrapper(`${process.env.SERVER_API}/profile/me`);
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

export const getAccessToken = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  return accessToken;
};

export const makeRefreshToken = async () => {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;
  if (!refreshToken) {
    return false;
  }
  const response = await fetch(`${process.env.SERVER_API}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) {
    return false;
  }
  const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
    await response.json();
  cookieStore.set(`accessToken`, newAccessToken, {
    httpOnly: true,
    maxAge: 3600,
  });
  cookieStore.set(`refreshToken`, newRefreshToken, {
    httpOnly: true,
    maxAge: 3600,
  });
  return {
    newAccessToken,
  };
};
