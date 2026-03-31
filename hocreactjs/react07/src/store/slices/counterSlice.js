import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter", //Tên feature
  initialState: {
    count: 0, //Chứa các state
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
      // state.todoList.push(action.payload)
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    },
  },
});

//Action creators
export const { increment, decrement } = counterSlice.actions;
