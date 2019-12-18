import * as React from "react";

import "./assets/sass/react-user-list.scss";
// ? TYPES:
import { User } from "./types/user.type";

export type Props = {
  users: User[];
  size: number;
  [otherProps: string]: any;
};

export type UserItemProps = {
  user: User;
  size: number;
};

const UserItem: React.ElementType = ({ user, size }: UserItemProps) => {
  return (
    <li>
      <div
        className="react-user-list__avatar"
        style={{ width: `${size}px`, height: `${size}px`, lineHeight: `${size}px` }}>
        {user.firstName.charAt(0) + user.lastName.charAt(0)}
      </div>
    </li>
  );
};

const UserList: React.ReactNode = ({ users, size = 80, ...props }: Props) => {
  return (
    <ul className="react-user-list__wrapper" {...props}>
      {users.map((user: User, i: number) => (
        <UserItem key={i} user={user} size={size} />
      ))}
    </ul>
  );
};

export default UserList;
