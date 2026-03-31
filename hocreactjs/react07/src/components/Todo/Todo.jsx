import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

export default function Todo() {
  return (
    <div>
      <TodoList />
      <TodoAdd />
    </div>
  );
}

//Mục tiêu:
// - Làm việc với cách tách component
// - Cách tạo slice, viết reducer, thao tác với redux toolkit

//Tìm hiểu: Redux Middleware, hàm createAsyncThunk
