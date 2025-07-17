// import Counter from "./components/Counter";
// import Input from "./components/Input";

import Users from "./components/Users";

// import Form from "./components/Form";

export default function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Input /> */}
      {/* <Form /> */}
      <Users />
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
