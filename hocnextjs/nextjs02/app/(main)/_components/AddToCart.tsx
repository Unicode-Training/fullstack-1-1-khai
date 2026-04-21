"use client";

import { toast } from "sonner";
import { use, useState } from "react";
import { MainContext } from "./MainProvider";
import { addToCart, getCartCount } from "../services/cart.service";
import { useRouter } from "next/navigation";

type Props = {
  product: {
    _id: string;
  };
  isShowInput?: boolean;
};
export default function AddToCart({ product, isShowInput = false }: Props) {
  const { setCart } = use(MainContext);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const [quantity, setQuantity] = useState<number>(1);
  const handleAddToCart = async () => {
    setLoading(true);
    const response = await addToCart({
      productId: product._id,
      quantity,
    });

    setLoading(false);
    if (response) {
      toast.success(`Add to cart success`);
      setQuantity(1);
      //Tính toán lại số lượng
      const quantity = await getCartCount();
      if (quantity) {
        setCart(quantity);
      }
    } else {
      toast.error(`Add to cart failed`);
      router.push("/auth/login");
    }
  };
  return (
    <>
      {isShowInput && (
        <input
          type="number"
          value={quantity}
          className="px-3 py-1 outline-0 w-25 border border-[#ddd]"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuantity(+e.target.value)
          }
        />
      )}
      <button
        className="px-3 py-1 bg-amber-700 text-white rounded-md"
        onClick={handleAddToCart}
      >
        {isLoading ? "Loading..." : "Add to card"}
      </button>
    </>
  );
}
