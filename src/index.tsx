import React, { useState } from "react";
import { stringToColour } from "./helpers/colour";
import "./assets/sass/react-user-list.scss";
// ? TYPES:
import { User } from "./types/user.type";

export type Props = {
  users: User[];
  size: number;
  usersLength?: number;
  maxItems: number;
  theme: "default" | string;
  [otherProps: string]: any;
};

export type UserItemProps = {
  user: User;
  size: number;
};

const DEFAULTS = {
  size: 40,
  maxItems: 3,
  theme: "default"
};

const UserItem: React.ElementType = ({ user, size }: UserItemProps) => {
  const [image, setImage] = useState(user.image);
  const onImageError = () => {
    setImage(null);
  };
  const baseStyles = { width: `${size}px`, height: `${size}px`, fontSize: `${size / 3}px` };
  const initials = user.firstName.charAt(0) + user.lastName.charAt(0);
  const colour = { background: image ? "transparent" : stringToColour(user.username) };
  return (
    <li className="react-user-list__user">
      <div className="react-user-list__avatar" style={{ ...baseStyles, ...colour }}>
        {!image ? initials : <img onError={onImageError} src={image} alt={initials} />}
      </div>
    </li>
  );
};

const UserList: React.ReactNode = ({
  users,
  usersLength,
  theme = DEFAULTS.theme,
  size = DEFAULTS.size,
  maxItems = DEFAULTS.maxItems,
  ...props
}: Props) => {
  const extraUsers = usersLength || users.length - maxItems;
  return (
    <div className={`react-user-list__wrapper react-user-list__${theme}`} {...props}>
      <ul>
        {users
          .slice(0, maxItems)
          .reverse()
          .map((user: User, i: number) => (
            <UserItem key={i} user={user} size={size} />
          ))}
      </ul>
      {extraUsers > 0 && (
        <div className="react-user-list__extra" style={{ fontSize: `${size / 3}px` }}>
          <span>+{extraUsers}</span>
        </div>
      )}
    </div>
  );
};

export { stringToColour, UserItem };
export default UserList;
