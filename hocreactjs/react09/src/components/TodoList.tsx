import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import Reset from "./Reset";
export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
export default function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [value, setValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setValue("");
  };
  const handleReset = () => {
    setTodoList([]);
  };
  useEffect(() => {
    const getTodoList = async () => {
      const response: Response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      const data: Todo[] = await response.json();
      setTodoList(data);
    };
    getTodoList();
  }, []);
  return (
    <div>
      <h1>{message}</h1>
      <ul>
        {todoList.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo..."
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <Reset onClick={handleReset} setMessage={setMessage} />
    </div>
  );
}
