import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slices/todoSlice";

export default function TodoAdd() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setMessage("Title is required");
      return;
    }
    const todo = {
      title,
      completed: false,
    };
    dispatch(addTodo(todo));
    setTitle("");
  };
  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button>Add</button>
      {message && <p>{message}</p>}
    </form>
  );
}
