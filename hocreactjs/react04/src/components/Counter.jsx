import { useEffect } from "react";
import { useState, useRef } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const myObj = useRef(0); //{current: 0}
  const inputRef = useRef();
  const items = ["Item 1", "Item 2", "Item 3"];
  const itemsRef = useRef([]);
  const handleIncrement = () => {
    setCount(count + 1);
    myObj.current++;
    // console.log(myObj);
  };
  useEffect(() => {
    inputRef.current.focus();
    console.log(itemsRef);
  }, []);
  return (
    <div>
      <h1>Count: {count}</h1>
      <input type="text" ref={inputRef} />
      <h2>myObj: {myObj.current}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <ul>
        {items.map((item, index) => (
          <li
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
