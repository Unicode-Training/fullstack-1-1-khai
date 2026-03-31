import React, { useContext } from "react";
import { AppContext } from "../App";

export default function Title() {
  const context = useContext(AppContext);
  console.log(context);

  return <h1>Todo List App</h1>;
}
