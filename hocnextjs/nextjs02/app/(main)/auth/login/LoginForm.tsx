"use client";

import { loginAction } from "../../_actions/auth.action";

export default function LoginForm() {
  return (
    <>
      <form action={loginAction}>
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
          Login
        </button>
      </form>
    </>
  );
}
