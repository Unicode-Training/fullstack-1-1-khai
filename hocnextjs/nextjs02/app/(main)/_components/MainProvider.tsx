"use client";

import React, { createContext, useEffect, useState } from "react";
import { getCartCount } from "../services/cart.service";
import { usePathname } from "next/navigation";
type MainContext = {
  cart: number;
  setCart: (count: number) => void;
};
export const MainContext = createContext<MainContext>({} as MainContext);

export default function MainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState(0);
  const pathname = usePathname();
  useEffect(() => {
    const refetchCartCount = async () => {
      const quantity = await getCartCount();
      setCart(quantity || 0);
    };
    refetchCartCount();
  }, [pathname]);
  return (
    <MainContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
