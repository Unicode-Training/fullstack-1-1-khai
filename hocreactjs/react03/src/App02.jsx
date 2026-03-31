import { useState } from "react";

export default function App() {
  const data = [
    {
      id: 1,
      title: "Title 1",
      content: "Content 1",
    },
    {
      id: 2,
      title: "Title 2",
      content: "Content 2",
    },
    {
      id: 3,
      title: "Title 3",
      content: "Content 3",
    },
  ];
  const [id, setId] = useState(0);
  const handleToggle = (itemId) => {
    if (itemId === id) {
      setId(!id ? itemId : 0);
    } else {
      setId(itemId);
    }
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h3>
            {item.title}{" "}
            <button onClick={() => handleToggle(item.id)}>Show</button>
          </h3>
          {item.id === id && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}
