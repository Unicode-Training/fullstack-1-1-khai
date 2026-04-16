"use client";

import { useRouter } from "next/navigation";
import { use, useState } from "react";
import { MainContext } from "./MainProvider";
import { deleteCart, getCartCount } from "../services/cart.service";

export default function DeleteCartItem({ productId }: { productId: string }) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const { setCart } = use(MainContext);
  const handleRemove = async () => {
    setLoading(true);
    const response = await deleteCart(productId);
    if (response) {
      const quantity = await getCartCount();
      if (quantity) {
        setCart(quantity);
      }
    }
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
