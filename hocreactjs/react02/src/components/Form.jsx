import { useState } from "react";

export default function Form() {
  //Tạo state để chứa dữ liệu các ô input
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorBag = {};
    const { email, password } = form;
    if (!email) {
      errorBag.name = "Vui lòng nhập email";
    }
    if (!password) {
      errorBag.password = "Vui lòng nhập password";
    }
    setErrors(errorBag);
    console.log(form);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <h2>Danh sách người dùng</h2>
      <table width={"100%"} border={1}>
        <tr>
          <th>STT</th>
          <th>Email</th>
          <th>Password</th>
          <th width="5%">Xóa</th>
        </tr>
      </table>
    </div>
  );
}
