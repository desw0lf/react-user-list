import * as React from "react";
import { stringToColour } from "./helpers/colour";
import "./assets/sass/react-user-list.scss";
// ? TYPES:
import { User } from "./types/user.type";

export type Props = {
  users: User[];
  size: number;
  maxItems: number;
  [otherProps: string]: any;
};

export type UserItemProps = {
  user: User;
  size: number;
};

const UserItem: React.ElementType = ({ user, size }: UserItemProps) => {
  const baseStyles = { width: `${size}px`, height: `${size}px`, lineHeight: `${size}px`, fontSize: `${size / 2.5}px` };
  const colour = stringToColour(user.username);
  return (
    <li className="react-user-list__user">
      <div className="react-user-list__avatar" style={{ ...baseStyles, ...colour }}>
        {user.firstName.charAt(0) + user.lastName.charAt(0)}
      </div>
    </li>
  );
};

const UserList: React.ReactNode = ({ users, size = 40, maxItems = 3, ...props }: Props) => {
  const extraUsers = users.length - maxItems;
  return (
    <ul className="react-user-list__wrapper" {...props}>
      {users.slice(0, maxItems).map((user: User, i: number) => (
        <UserItem key={i} user={user} size={size} />
      ))}
      {extraUsers > 0 && <li className="react-user-list__extra">+{extraUsers} more</li>}
    </ul>
  );
};

export default UserList;
