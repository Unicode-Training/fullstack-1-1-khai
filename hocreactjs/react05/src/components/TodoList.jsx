import { useContext, useReducer, useState } from "react";
import { initialState, todoReducer } from "../reducers/todo";
import "./TodoList.css";
import { AppContext } from "../App";
import Title from "./Title";

export default function TodoList() {
  const context = useContext(AppContext);
  console.log(context);

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [title, setTitle] = useState("");
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (!title) {
      return;
    }
    dispatch({
      type: "TODO_ADD",
      payload: {
        title,
        completed: false,
      },
    });
    setTitle("");
  };
  const handleRemove = (index) => {
    dispatch({
      type: "TODO_REMOVE",
      payload: index,
    });
  };
  const handleCompleted = (index) => {
    dispatch({
      type: "TODO_COMPLETED",
      payload: index,
    });
  };
  return (
    <div>
      <Title />
      <ul>
        {state.todoList.map(({ title, completed }, index) => (
          <li key={index}>
            <input type="checkbox" onChange={() => handleCompleted(index)} />
            <span className={completed ? "completed" : ""}>{title}</span>
            <button onClick={() => handleRemove(index)}>&times;</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Title..."
          onChange={handleChangeTitle}
          value={title}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
