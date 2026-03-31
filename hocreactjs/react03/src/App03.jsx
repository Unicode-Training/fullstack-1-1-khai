import { useEffect, useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getTodoList = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos1`
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setTodoList(data);
    } catch {
      setError("Đã có lỗi xảy ra");
    }
    setLoading(false);
  };
  useEffect(() => {
    getTodoList();
  }, []);
  return (
    <div>
      <h1>TodoList</h1>
      {error ? (
        <h3>{error}</h3>
      ) : isLoading ? (
        <h3>Loading...</h3>
      ) : (
        todoList.map((item) => <h3 key={item.id}>{item.title}</h3>)
      )}
    </div>
  );
}
/*
Các bước call API

1. Viết hàm đọc dữ liệu từ API
2. Khởi tạo State để chứa dữ liệu khi API trả về
3. Cập nhật State trong hàm call api
4. Gọi hàm call API tại vị trí mong muốn (Nếu muốn khi component được mounted --> Đưa vào useEffect, không được gọi trong thân hàm của component)
5. Đọc dữ liệu từ state để hiển thị giao diện

Lưu ý: Cần phải có:
- loading
- error
*/
