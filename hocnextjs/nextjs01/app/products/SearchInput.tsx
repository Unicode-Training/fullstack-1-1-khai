"use client";

import { debounce } from "@/utils/utils";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export default function SearchInput() {
  const router = useRouter();
  const handleChangeValue = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    router.push(`?s=${value}`); //Chuyển hướng
  });
  return (
    <input
      type="search"
      placeholder="Search..."
      className="px-3 py-2 border border-[#ccc] outline-0 my-3"
      onChange={handleChangeValue}
    />
  );
}
