import axios from "axios";
import {
  getAccessToken,
  logout,
  makeRefreshToken,
} from "../_actions/auth.action";
export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_API,
});
//Interceptor request --> Tự động đính kèm các access token vào request
axiosInstance.interceptors.request.use(async (config) => {
  const accessToken = await getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
let refreshTokenPromise: null | Promise<
  boolean | undefined | { newAccessToken: string }
> = null;
//Interceptor response --> Xử lý refresh token khi request bị status code = 401
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    //Check error
    if (error.status === 401) {
      //Refresh token
      if (!refreshTokenPromise) {
        refreshTokenPromise = makeRefreshToken();
      }
      const refreshStatus = await refreshTokenPromise;

      if (refreshStatus) {
        refreshTokenPromise = null;
        //retry
        return axiosInstance(error.config);
      } else {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
