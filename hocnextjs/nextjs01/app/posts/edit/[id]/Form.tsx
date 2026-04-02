"use client";
import { clearCachePath } from "@/utils/cache";
import { useRouter } from "next/navigation";
import { ChangeEvent, SubmitEvent, useState } from "react";
type Props = {
  post: {
    id: number;
    title: string;
  };
};
export default function Form({ post }: Props) {
  const [title, setTitle] = useState<string>(post.title);
  const router = useRouter();
  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3001/posts/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    if (response.ok) {
      //Cập nhật thành công
      await clearCachePath(`/posts`); //Xóa cache của trang list
      await clearCachePath(`/posts/edit/${post.id}`); //Xóa cache của trang edit
      router.push(`/posts`);
    } else {
      //Cập nhật thất bại
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
          value={title}
        />
      </div>
      <button className="px-3 py-1 bg-green-700 text-white">Save</button>
    </form>
  );
}
