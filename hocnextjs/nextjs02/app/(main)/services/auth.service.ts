import { axiosInstance } from "../libs/axios";

export const getUser = async () => {
  try {
    const { data } = await axiosInstance.get(`/profile/me`);
    return data.user;
  } catch {
    return false;
  }
};
