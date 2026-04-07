// import { redirect } from "next/navigation";

import LoginForm from "./LoginForm";

// import { cookies } from "next/headers";
export default function LoginPage() {
  //   const handleLogin = async (formData: FormData) => {
  //     "use server"; //Kích hoạt server action
  //     console.log("submit");
  //     const email = formData.get("email");
  //     const password = formData.get("password");
  //     console.log(email, password);
  //     const cookiesStore = await cookies();
  //     cookiesStore.set("email", "abc", {
  //       httpOnly: true, //Chỉ cho phép server đọc
  //     });
  //     redirect("/"); //Chuyển hướng trên server
  //   };
  return (
    <div className="max-w-1/2 mx-auto">
      <h1 className="text-3xl mb-3">Login</h1>
      <LoginForm />
    </div>
  );
}
