<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
import React, { Fragment } from "react";

export default function Users() {
  const name = "Hoàng An";
  //   const heading = <h2>Xin chào anh em</h2>;
  const isAuth = true;
  //   const dataJsx = [
  //     <h3 key={1}>Data 1</h3>,
  //     <h3 key={2}>Data 2</h3>,
  //     <h3 key={3}>Data 3</h3>,
  //   ];

  const data = [
    {
      id: 1,
      name: "User 1",
    },
    {
      id: 2,
      name: "User 2",
    },
    {
      id: 3,
      name: "User 3",
    },
  ];
  //Yêu cầu: Hiển thị danh sách users đọc từ mảng data (Hiển thị trong cặp thẻ ul li)
  return (
    <>
      <div>
        <h1>Users</h1>
        <h2>Danh sách người dùng</h2>
        <h2>{name}</h2>
        {/* {isAuth ? heading : ""} */}
        {/* {isAuth && heading} */}
        {isAuth && (
          <>
            <h3>Xin chào anh em</h3>
            <h3>Xin chào anh em</h3>
          </>
        )}
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
//Fragment
//React.Fragment
//Short Syntax: <>
//parse: {expression}
//Conditional Rendering
//Array render
<<<<<<< Updated upstream
=======
import React, { Fragment } from "react";

export default function Users() {
  const name = "Hoàng An";
  //   const heading = <h2>Xin chào anh em</h2>;
  const isAuth = true;
  //   const dataJsx = [
  //     <h3 key={1}>Data 1</h3>,
  //     <h3 key={2}>Data 2</h3>,
  //     <h3 key={3}>Data 3</h3>,
  //   ];

  const data = [
    {
      id: 1,
      name: "User 1",
    },
    {
      id: 2,
      name: "User 2",
    },
    {
      id: 3,
      name: "User 3",
    },
  ];
  //Yêu cầu: Hiển thị danh sách users đọc từ mảng data (Hiển thị trong cặp thẻ ul li)
  return (
    <>
      <div>
        <h1>Users</h1>
        <h2>Danh sách người dùng</h2>
        <h2>{name}</h2>
        {/* {isAuth ? heading : ""} */}
        {/* {isAuth && heading} */}
        {isAuth && (
          <>
            <h3>Xin chào anh em</h3>
            <h3>Xin chào anh em</h3>
          </>
        )}
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
//Fragment
//React.Fragment
//Short Syntax: <>
//parse: {expression}
//Conditional Rendering
//Array render
>>>>>>> 08b3f08 (Update code)
=======
>>>>>>> Stashed changes
