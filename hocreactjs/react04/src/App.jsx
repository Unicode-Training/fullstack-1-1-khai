// import Counter from "./components/Counter";
import { useRef } from "react";
import { ChevronsLeft, Menu } from "lucide-react";
import "./App.css";
import { useState } from "react";
export default function App() {
  const sidebarRef = useRef();
  const lastWidthRef = useRef();
  const [isHideSidebar, setHideSidebar] = useState(false);
  const handleMouseDownBar = (e) => {
    e.stopPropagation();
    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", handleMouseUp);
    document.body.style.userSelect = "none";
    //Bỏ transition
    sidebarRef.current.style.transition = "none";
  };
  const handleResize = (e) => {
    let clientX = e.clientX;
    if (clientX < 150) {
      clientX = 150;
    }
    if (clientX > 400) {
      clientX = 400;
    }
    sidebarRef.current.style.width = `${clientX}px`;
    lastWidthRef.current = clientX;
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleResize);
    document.removeEventListener("mouseup", handleMouseUp);
    document.body.style.userSelect = "auto";
    //Khôi phục transition
    sidebarRef.current.style.transition = null;
  };

  const handleHideSidebar = () => {
    sidebarRef.current.style.width = 0;
    sidebarRef.current.style.paddingInline = 0;
    setHideSidebar(true);
  };

  const handleResetSidebar = () => {
    if (lastWidthRef.current) {
      sidebarRef.current.style.width = `${lastWidthRef.current}px`;
    } else {
      sidebarRef.current.style.width = null;
    }

    sidebarRef.current.style.paddingInline = null;
    setHideSidebar(false);
  };

  return (
    <div className="main">
      <div className="sidebar" ref={sidebarRef}>
        <div className="resize-bar" onMouseDown={handleMouseDownBar}></div>
        <ChevronsLeft className="icon" onClick={handleHideSidebar} />
        <h3>Sidebar</h3>
      </div>
      <div className="content">
        <div className="page-title">
          <Menu
            onClick={handleResetSidebar}
            className={`icon ${isHideSidebar ? "show" : ""}`}
          />
          <h3>Content</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          voluptatum excepturi sequi beatae facere corporis, ea culpa deleniti
          harum rerum dolorem ipsam impedit vero similique perspiciatis odit!
          Impedit, suscipit beatae.
        </p>
      </div>
    </div>
  );
}
/*
Refs: 
- Là object {current: value}
- Tham chiếu đến giá trị cuối cùng mà nó cập nhật --> Khi component re-render không bị reset lại dữ liệu
- Tham chiếu đến phần tử DOM --> Thao tác với DOM

Multiple Refs

//Buổi sau:
 - useReducer
 - Context
*/
