import { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Vui lòng nhập..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <h4>Bạn vừa nhập: {value}</h4>
    </div>
  );
}
