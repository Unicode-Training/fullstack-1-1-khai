import { useState } from "react";
import Hello from "./components/Hello";

export default function App() {
  const [count, setCount] = useState(0);
  const [isShow, setShow] = useState(true);
  // const [count2, setCount2] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  console.log("re-render");
  //Không nên xử lý trực tiếp ở đây
  // useEffect(() => {
  //   if (count <= 5) {
  //     setCount2(count);
  //   }
  // }, [count]);
  // useEffect(() => {
  //   console.log("Effect Callback", count);
  //   //Cleanup
  //   return () => {
  //     console.log("Cleanup", count);
  //   };
  // }, [count]);
  return (
    <div>
      {console.log("UI Update")}
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <button onClick={() => setShow(!isShow)}>Toggle</button>
      {isShow && <Hello />}
    </div>
  );
}
//useEffect(): Xử lý các sideEffect (Công việc bên lề, nằm ngoài luồng chính của component)
//Luồng chính của component: State thay đổi --> Cập nhật giao diện
//Cú pháp:
/*
useEffect(callback, dependencies)

callback: Hàm thực thi
dependencies: Điều kiện để callback thực thi
- null hoặc undefined: Khi component re-render --> callback sẽ chạy
- [] --> Component render lần đầu tiên --> callback sẽ chạy
- [bien1, bien2,...] --> 1 trong các biến thay đổi --> callback sẽ chạy

Thứ tự chạy của useEffect

1. State thay đổi
2. Component re-render
3. UI Update
4. Cleanup chạy (Nếu có)
5. Callback chạy

Các trường hợp cleanup

1. timer: setTimeout, setInterval
2. event listener
3. storage: localStorage, sessionStorage,...
4. biến, state,...

Vòng đợi của component

Mounting: Quá trình component đưa vào DOM
Updating: Quá trình component cập nhật dữ liệu
Unmounting: Quá trình component bị loại khỏi DOM
*/
