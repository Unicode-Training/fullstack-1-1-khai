import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// const root = createRoot(document.querySelector("#root"));
// const User = () => {
//   return <h2>User</h2>;
// };
// class Product extends React.Component {
//   render() {
//     return <h2>Product</h2>;
//   }
// }
// const element = (
//   <div>
//     <h1>Hello anh em</h1>
//     <h2>Học React không khó</h2>
//     <User />
//     <User></User>
//     <Product />
//   </div>
// );

// root.render(element);
//Hàm render nhận react element
//Dùng cú pháp jsx --> Compiler (Babel, SWC) --> React Element --> React DOM --> DOM Element
