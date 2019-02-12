import React from "react";
import userResources from "./userResources";

const UserList = () => {
  const users = userResources("users");
  return (
    <ul>
      {users.map(user => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
};

export default UserList;
