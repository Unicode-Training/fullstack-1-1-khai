import { createSlice } from "@reduxjs/toolkit";
const todoList = [];
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todoList.splice(action.payload, 1);
    },
    completedTodo: (state, action) => {
      //action.payload --> index
      state.todoList[action.payload].completed =
        !state.todoList[action.payload].completed;
    },
  },
});

export const { addTodo, removeTodo, completedTodo } = todoSlice.actions;
