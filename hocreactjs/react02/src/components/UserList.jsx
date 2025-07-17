/* eslint-disable react/prop-types */
export default function UserList({ users, onEdit, onDelete }) {
  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <table width={"100%"} border={1}>
        <thead>
          <tr>
            <th width="5%">STT</th>
            <th>Email</th>
            <th>Password</th>
            <th width="5%">Sửa</th>
            <th width="5%">Xóa</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => onEdit(index)}>Sửa</button>
              </td>
              <td>
                <button onClick={() => onDelete(index)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
