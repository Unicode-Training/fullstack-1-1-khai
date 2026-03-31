import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slices/todoSlice";
import { counterSlice } from "./slices/counterSlice";
import { postSlice } from "./slices/postSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todo: todoSlice.reducer,
    posts: postSlice.reducer,
  },
});

//combined Reducers
