//Viết tất cả hàm liên quan đến tương tác api
// - client: gọi axios
// - server: gọi fetch

import { axiosInstance } from "../libs/axios";

export const addToCart = async (data: {
  productId: string;
  quantity: number;
}) => {
  try {
    await axiosInstance.post(`/shopping-cart`, data);
    return true;
  } catch {
    return false;
  }
};

export const getCartCount = async () => {
  try {
    const { data } = await axiosInstance.get(`/shopping-cart`);
    const { items } = data;
    const quantity = items.reduce(
      (acc: number, cur: { quantity: number }) => acc + cur.quantity,
      0,
    );
    return quantity;
  } catch {
    return false;
  }
};

export const deleteCart = async (productId: string) => {
  try {
    await axiosInstance.delete(`/shopping-cart/${productId}`);
    return true;
  } catch {
    return false;
  }
};
