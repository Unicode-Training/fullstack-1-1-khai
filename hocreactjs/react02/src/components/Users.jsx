import { useState } from "react";
import Form from "./Form";
import UserList from "./UserList";

export default function Users() {
  const [indexEdit, setIndexEdit] = useState(null);
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (form) => {
    if (indexEdit === null) {
      //Thêm mới
      setUsers([...users, form]);
    } else {
      //Cập nhật
      setUsers(
        users.map((user, index) => {
          if (index === indexEdit) {
            return form;
          }
          return user;
        })
      );
      setIndexEdit(null);
    }
  };
  const handleDelete = (index) => {
    if (!confirm("Bạn có chắc?")) {
      return;
    }
    setUsers(users.filter((_, i) => i !== index));
  };
  const handleEdit = (index) => {
    // console.log(index);
    // const user = users[index];
    // setForm({ ...form, ...user });
    // setIndexEdit(index);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} formData={form} users={users} />
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
}

/*
App
    - Users
        - Form
        - UserList
*/
