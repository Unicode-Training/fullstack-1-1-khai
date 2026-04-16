import { getAccessToken } from "../_actions/auth.action";
import { headers } from "next/headers";
export const fetchWrapper = async (
  url: string,
  options = {} as RequestInit,
) => {
  const headerStore = await headers();
  const allHeaders = new Headers(options.headers || {});

  //Xử lý thêm token
  const accessToken = await getAccessToken();
  if (accessToken || headerStore.get("x-token")) {
    allHeaders.set(
      `Authorization`,
      `Bearer ${headerStore.get("x-token") || accessToken}`,
    );
  }

  return fetch(url, {
    ...options,
    headers: allHeaders,
  });
};
