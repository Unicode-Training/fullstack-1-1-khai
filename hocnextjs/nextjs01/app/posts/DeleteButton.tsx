"use client";

import { clearCachePath } from "@/utils/cache";
import { useRouter } from "next/navigation";

type Props = {
  id: number;
};
export default function DeleteButton({ id }: Props) {
  const router = useRouter();
  const handleRemove = async () => {
    console.log(id);
    //Call api delete
    const response = await fetch(`http://localhost:3001/posts/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      await clearCachePath(`/posts`);
      router.refresh();
    }
  };
  return (
    <button className="text-red-600 cursor-pointer" onClick={handleRemove}>
      &times;
    </button>
  );
}
