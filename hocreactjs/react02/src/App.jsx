// import Counter from "./components/Counter";
// import Input from "./components/Input";

<<<<<<< Updated upstream
<<<<<<< HEAD
import Users from "./components/Users";

// import Form from "./components/Form";
=======
import Form from "./components/Form";
>>>>>>> 08b3f08 (Update code)
=======
import Users from "./components/Users";

// import Form from "./components/Form";
>>>>>>> Stashed changes

export default function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Input /> */}
<<<<<<< Updated upstream
<<<<<<< HEAD
      {/* <Form /> */}
      <Users />
=======
      <Form />
>>>>>>> 08b3f08 (Update code)
=======
      {/* <Form /> */}
      <Users />
>>>>>>> Stashed changes
    </div>
  );
}

/*
State: Quản lý dữ liệu trong nội bộ component
Trong function component, muốn làm việc với state thông qua React Hook (Hàm đặc biệt)

- Sử dụng thông qua Hook useState
- Đối tượng bất biến (Không thay đổi trực tiếp)
- Muốn thay đổi State thông qua hàm set do hook cung cấp
- Khi state bị thay đổi --> Cả component sẽ bị gọi lại (re-render)

Cú pháp useState
const [tenState, hamSetState] = useState(giatrikhoitao)
*/
