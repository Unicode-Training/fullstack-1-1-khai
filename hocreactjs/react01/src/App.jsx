import React from "react";
import Button from "./components/Button";

export default function App() {
  //Event Handler
  const handleClick = (e) => {
    console.log("Click me");
    console.log(e);
  };
  //Event handler có tham số
  const users = ["User 1", "User 2", "User 3"];

  const handleRemove = (index) => {
    console.log(index);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleClick2 = () => {
    // console.log(data);
    console.log("Click me 2");
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      {users.map((item, index) => (
        <h3 key={index}>
          {item} <button onClick={() => handleRemove(index)}>&times;</button>
        </h3>
      ))}
      <input
        type="text"
        placeholder="Vui lòng nhập..."
        onChange={handleChange}
      />
      <div>
        <select defaultValue={"2"}>
          <option value="">Chọn Tỉnh/Thành phố</option>
          <option value="1">Hà Nội</option>
          <option value="2">Đà Nẵng</option>
          <option value="3">Hồ Chí Minh</option>
        </select>
      </div>
      <label htmlFor="checkbox">
        <input type="checkbox" id="checkbox" defaultChecked={false} /> Checkbox
      </label>
      <Button onClick={handleClick2} />
    </div>
  );
}
