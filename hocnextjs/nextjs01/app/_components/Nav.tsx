"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
//usePathname() --> lấy pathname hiện tại, không chạy trên server
export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="py-3 border-b border-[#ccc] mb-3">
      <ul className="flex gap-3">
        <li>
          <Link href="/" className={pathname === "/" ? "text-red-600" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname === "/about" ? "text-red-600" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className={pathname === "/products" ? "text-red-600" : ""}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/posts/kinh-doanh"
            className={pathname === "/posts/kinh-doanh" ? "text-red-600" : ""}
          >
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
