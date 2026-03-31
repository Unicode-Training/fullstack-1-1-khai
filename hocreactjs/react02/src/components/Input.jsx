<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
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
>>>>>>> 08b3f08 (Update code)
=======
>>>>>>> Stashed changes
