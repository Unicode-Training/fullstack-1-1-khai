"use client";
import { clearCachePath } from "@/utils/cache";
import { useRouter } from "next/navigation";
import { ChangeEvent, SubmitEvent, useState } from "react";

export default function Form() {
  const [title, setTitle] = useState<string>("");
  const router = useRouter();
  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    if (response.ok) {
      //Thêm thành công
      await clearCachePath(`/posts`);
      router.push(`/posts`);
    } else {
      //Thêm thất bại
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="">Title</label>
        <input
          type="text"
          className="outline-none border border-[#ccc] px-3 py-1"
          placeholder="Title..."
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
      </div>
      <button className="px-3 py-1 bg-green-700 text-white">Save</button>
    </form>
  );
}
