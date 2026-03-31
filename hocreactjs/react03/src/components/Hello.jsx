import { useEffect, useState } from "react";

export default function Hello() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    console.log("Component Hello đã được mount");
    return () => {
      console.log("Component Hello đã được unmount");
    };
  }, []);
  useEffect(() => {
    console.log("Message đã được update");
  }, [message]);
  return (
    <div>
      <h2>Hello: {message}</h2>
      <button onClick={() => setMessage("Hello World")}>Change Message</button>
    </div>
  );
}
