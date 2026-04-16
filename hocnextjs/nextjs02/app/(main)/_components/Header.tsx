"use client";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { logout } from "../_actions/auth.action";
import { usePathname } from "next/navigation";
import { MainContext } from "./MainProvider";
import { getUser } from "../services/auth.service";

export default function Header() {
  const [user, setUser] = useState({} as { fullName: string });
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const pathname = usePathname();
  const { cart } = use(MainContext);
  useEffect(() => {
    const refetchUser = async () => {
      const user = await getUser();
      if (user) {
        setUser(user);
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
        setUser({} as { fullName: string });
      }
      setLoading(false);
    };
    refetchUser();
  }, [pathname]);

  const handleLogout = async () => {
    await logout();
  };
  return (
    <header className="flex justify-between items-center max-w-300 mx-auto">
      <h1 className="text-3xl">Unicode</h1>
      <ul className="flex gap-3">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/products"}>Products</Link>
        </li>
        <li>
          <Link href={"/cart"}>Cart ({cart})</Link>
        </li>
        {isLoading ? (
          <li>Loading...</li>
        ) : isAuthenticated ? (
          <>
            <li>Chào: {user.fullName}</li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <Link href={"/auth/login"}>Login</Link>
          </li>
        )}
      </ul>
    </header>
  );
}
