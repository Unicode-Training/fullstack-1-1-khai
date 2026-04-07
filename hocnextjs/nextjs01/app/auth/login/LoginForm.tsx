"use client";

import { useActionState } from "react";
import { handleLogin } from "./action";

export default function LoginForm() {
  const [state, action, pending] = useActionState(handleLogin, {
    message: "",
  } as { message: string; success?: boolean });

  //Check state.success === true --> Chuyển về trang chủ
  return (
    <>
      <form action={action}>
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="px-3 py-1 outline-none border border-[#ddd] w-full rounded-md"
            placeholder="Email..."
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="px-3 py-1 outline-none border border-[#ddd] w-full rounded-md"
            placeholder="Password..."
            name="password"
          />
        </div>
        <button className="px-3 py-1 bg-green-600 text-white cursor-pointer rounded-md">
          {pending ? "Loading..." : "Login"}
        </button>
      </form>
      {state.message && <span>{state.message}</span>}
    </>
  );
}
