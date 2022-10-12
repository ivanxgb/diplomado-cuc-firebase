import React from "react";

export function Table({ users }) {
  return (
    <table className="container table table-striped mt-5">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Lastname</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Country</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}