import { useDispatch, useSelector } from "react-redux";
import { completedTodo, removeTodo } from "../../store/slices/todoSlice";

export default function TodoList() {
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  const handleRemove = (index) => {
    if (!confirm("Bạn có chắc?")) {
      return;
    }
    dispatch(removeTodo(index));
  };
  const handleCompleted = (index) => {
    dispatch(completedTodo(index));
  };
  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index}>
          <input type="checkbox" onChange={() => handleCompleted(index)} />
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.title}
          </span>
          <button onClick={() => handleRemove(index)}>&times;</button>
        </li>
      ))}
    </ul>
  );
}

/*
[
  {
    title: "Tên công việc",
    completed: false
  },
  {
    title: "Tên công việc",
    completed: false
  },
   {
    title: "Tên công việc",
    completed: false
  }
]
*/
