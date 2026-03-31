<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  //   console.log(count);
  const handleIncrement = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount - 1;
      return newCount >= 0 ? newCount : 0;
    });
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
<<<<<<< Updated upstream
=======
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  //   console.log(count);
  const handleIncrement = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount - 1;
      return newCount >= 0 ? newCount : 0;
    });
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
>>>>>>> 08b3f08 (Update code)
=======
>>>>>>> Stashed changes
