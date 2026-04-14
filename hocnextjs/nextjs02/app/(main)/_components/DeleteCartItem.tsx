"use client";

import { useRouter } from "next/navigation";
import { getAccessToken } from "../_actions/auth.action";
import { useState } from "react";

export default function DeleteCartItem({ productId }: { productId: string }) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const handleRemove = async () => {
    const accessToken = await getAccessToken();
    setLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API}/shopping-cart/${productId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    setLoading(false);
    router.refresh();
  };
  return (
    <td
      className="px-6 py-4 text-xl font-medium text-red-600 cursor-pointer"
      onClick={handleRemove}
    >
      {isLoading ? "Deleting..." : <>&times;</>}
    </td>
  );
}
