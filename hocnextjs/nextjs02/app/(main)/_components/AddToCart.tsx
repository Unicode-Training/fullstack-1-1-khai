"use client";

import { toast } from "sonner";
import { use, useState } from "react";
import { MainContext } from "./MainProvider";
import { addToCart, getCartCount } from "../services/cart.service";

type Props = {
  product: {
    _id: string;
  };
};
export default function AddToCart({ product }: Props) {
  const { setCart } = use(MainContext);
  const [isLoading, setLoading] = useState(false);
  const handleAddToCart = async () => {
    setLoading(true);
    const response = await addToCart({
      productId: product._id,
      quantity: 1,
    });
    setLoading(false);
    if (response) {
      toast.success(`Add to cart success`);
      //Tính toán lại số lượng
      const quantity = await getCartCount();
      if (quantity) {
        setCart(quantity);
      }
    }
  };
  return (
    <button
      className="px-3 py-1 bg-amber-700 text-white rounded-md"
      onClick={handleAddToCart}
    >
      {isLoading ? "Loading..." : "Add to card"}
    </button>
  );
}
