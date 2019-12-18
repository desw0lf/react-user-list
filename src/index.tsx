import * as React from "react";

import "./styles.css";
// ? TYPES:
import { User } from "./types/user.type";

export type Props = {
  users: User[];
};

const UserList: React.ReactNode = ({ users }: Props) => {
  return (
    <div className="react-user-list__wrapper">
      <ul>
        {users.map((user: User, i: number) => (
          <li key={i}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
