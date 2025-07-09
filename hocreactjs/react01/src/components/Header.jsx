import React from "react";

export default function Header({ name, email, address, position }) {
  return (
    <div>
      <h2>Header</h2>
      <h2>Name: {name}</h2>
      <h2>Name: {email}</h2>
      <h2>User:</h2>
      <ul>
        <li>Address: {address}</li>
        <li>Position: {position}</li>
      </ul>
    </div>
  );
}
