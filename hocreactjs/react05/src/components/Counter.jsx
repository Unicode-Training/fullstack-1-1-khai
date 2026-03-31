import { useEffect, useReducer } from "react";
import { counterReducer, initialState } from "../reducers/counter";

export default function Counter() {
  //State
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  useEffect(() => {
    if (state.count >= 10) {
      dispatch({
        type: "PUSH_MESSAGE",
        payload: "Chúc mừng bạn",
      });
    } else {
      dispatch({
        type: "PUSH_MESSAGE",
        payload: "",
      });
    }
  }, [state.count]);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      {state.message && <p>{state.message}</p>}
    </div>
  );
}
