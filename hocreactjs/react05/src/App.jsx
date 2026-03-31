import React, { useState } from "react";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import ThemeToggle from "./components/ThemeToggle";
export const AppContext = React.createContext();
export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      {/* <Counter /> */}
      <AppContext.Provider value={{ message: "Unicode", theme, setTheme }}>
        <ThemeToggle />
        <TodoList />
      </AppContext.Provider>
    </div>
  );
}

/*
useReducer: Tư duy reducer (Giống method reduce trong Array)
- Tách logic cập nhật state ra bên ngoài
- Xử lý các state phức tạp hoặc muốn gộp lại
- Hữu dụng trong các bài toán state toàn cục (Share dữ liệu giữa các component)

Cú pháp:
const [state, dispatch] = useReducer(reducer, initialState)

Context: Component bọc component khác nhằm mục đích chia sẻ dữ liệu tới các component mà nó bọc (Không cần truyền qua props)

- Provider: Gửi dữ liệu
- Consumer: Nhận dữ liệu (Sử dụng hook useContext)
*/
