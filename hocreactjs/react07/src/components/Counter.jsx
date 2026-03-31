import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/slices/counterSlice";
export default function Counter() {
  //Đọc state từ store
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    //dispatch là 1 hàm nhận vào 1 action (object mô tả hành động)
    dispatch(increment(2));
  };
  const handleDecrement = () => {
    dispatch(decrement(2));
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
