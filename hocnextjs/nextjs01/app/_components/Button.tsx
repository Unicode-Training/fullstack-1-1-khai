"use client"; //directive
import { useState } from "react";

export default function Button() {
  const [text, setText] = useState("Click me");
  return (
    <button
      className="bg-green-700 text-white px-3 py-1"
      onClick={() => {
        setText("New value");
      }}
    >
      {text}
    </button>
  );
}
