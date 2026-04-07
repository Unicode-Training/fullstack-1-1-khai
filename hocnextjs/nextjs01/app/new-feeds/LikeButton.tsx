"use client";

import { useEffect } from "react";
import { getUser, handleLike } from "./action";

export default function LikeButton() {
  useEffect(() => {
    const getCurrentUser = async () => {
      const user = await getUser();
      console.log(user);
    };
    getCurrentUser();
  }, []);
  return <button onClick={handleLike}>Like</button>;
}
