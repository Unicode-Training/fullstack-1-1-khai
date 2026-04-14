"use client";

import { getAccessToken } from "../_actions/auth.action";

type Props = {
  product: {
    _id: string;
  };
};
export default function AddToCart({ product }: Props) {
  const handleAddToCart = async () => {
    console.log("add");
    //Lấy accessToken
    const accessToken = await getAccessToken(); //Nhờ server action lấy

    //Gọi api add to cart
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API}/shopping-cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          productId: product._id,
          quantity: 1,
        }),
      },
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <button
      className="px-3 py-1 bg-amber-700 text-white rounded-md"
      onClick={handleAddToCart}
    >
      Add to card
    </button>
  );
}
