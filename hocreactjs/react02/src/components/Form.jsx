<<<<<<< HEAD
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
// let initialUsers = [];
export default function Form({ onSubmit, users }) {
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
    if (!Object.keys(errorBag).length) {
      onSubmit(form);
    }
    // if (!Object.keys(errorBag).length) {
    //   if (indexEdit === null) {
    //     //Thêm mới
    //     setUsers([...users, form]);
    //   } else {
    //     setUsers(
    //       users.map((user, index) => {
    //         if (index === indexEdit) {
    //           return form;
    //         }
    //         return user;
    //       })
    //     );
    //     setIndexEdit(null);
    //   }

    //   setForm({
    //     email: "",
    //     password: "",
    //   });
    // }
  };

  //So sánh initialUsers với props users
  // console.log(initialUsers, users);

  // if (initialUsers.length !== users.length) {
  //   setTimeout(() => {
  //     setForm({
  //       email: "",
  //       password: "",
  //     });
  //     initialUsers = users;
  //   });
  // }
  console.log("Form Component");

  useEffect(() => {
    console.log("useEffect");

    setForm({
      email: "",
      password: "",
    });
  }, [users]);

  //useEffect: Hook để chạy các Side Effect

  return (
    <div>
      {console.log("jsx re-render")}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
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
            value={form.password}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

/*
- B1: Click vào button 'Sửa' --> Lấy index --> Truy cập vào state users lấy ra user theo index
- B2: Xác định state để hiển thị dữ liệu lên form --> Set state đó với dữ liệu đã lấy ở bước 1
- B3: Xử lý submit form
*/
=======
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
>>>>>>> 08b3f08 (Update code)
