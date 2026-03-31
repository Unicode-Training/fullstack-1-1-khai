import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import "./ThemeToggle.css";
export default function ThemeToggle() {
  const { theme, setTheme } = useContext(AppContext);
  const changeTheme = (value) => {
    setTheme(value);
  };
  useEffect(() => {
    if (theme === "dark") {
      document.body.style.background = `#333`;
      document.body.style.color = `#fff`;
    } else {
      document.body.style.background = null;
      document.body.style.color = null;
    }
  }, [theme]);
  return (
    <div>
      <button
        onClick={() => changeTheme("light")}
        className={theme === "light" ? "active" : ""}
      >
        Light
      </button>
      <button
        onClick={() => changeTheme("dark")}
        className={theme === "dark" ? "active" : ""}
      >
        Dark
      </button>
    </div>
  );
}
