import React, { useState } from "react";
import { stringToColour } from "./helpers/colour";
import "./assets/sass/react-user-list.scss";
import VARIABLES from "!!sass-variable-loader!./assets/sass/utilities/_exported-variables.scss";
// import variables from "!!sass-variable-loader!./variables.scss";

// ? TYPES:
import { User } from "./types/user.type";

export type Props = {
  users: User[];
  size: number;
  usersLength?: number;
  maxItems: number;
  theme: "default" | string;
  borderWidth?: number;
  borderColor?: string;
  [otherProps: string]: any;
};

export type UserItemProps = {
  user: User;
  size?: number;
  borderWidth?: number;
  borderColor?: string;
  tag: "div" | "li"; // TODO: general type for html elements
};

const DEFAULTS = {
  size: parseInt(VARIABLES.avatarSize, 10),
  borderWidth: parseInt(VARIABLES.borderWidth, 10),
  borderColor: VARIABLES.borderColor,
  maxItems: 3,
  theme: "default"
};

const UserItem: React.ElementType = ({
  user,
  size = DEFAULTS.size,
  borderWidth,
  borderColor,
  tag = "div"
}: UserItemProps) => {
  const [image, setImage] = useState(user.image);
  const onImageError = () => {
    setImage(null);
  };
  const WrapperTag = tag;
  const baseStyles = {
    ...(size !== DEFAULTS.size && { width: `${size}px`, height: `${size}px` }),
    ...(borderWidth !== DEFAULTS.borderWidth && { borderWidth }),
    ...(borderColor !== DEFAULTS.borderColor && { borderColor }),
    fontSize: `${size / 3}px`
  };
  const initials = user.firstName.charAt(0) + user.lastName.charAt(0);
  const colour = { background: image ? "rgba(0,0,0,0.5)" : stringToColour(user.username) };
  return (
    <WrapperTag className="react-user-list__user">
      <div className="react-user-list__avatar" style={{ ...baseStyles, ...colour }}>
        {!image ? initials : <img onError={onImageError} src={image} alt={initials} />}
      </div>
    </WrapperTag>
  );
};

const UserList: React.ReactNode = ({
  users,
  usersLength,
  theme = DEFAULTS.theme,
  size,
  maxItems = DEFAULTS.maxItems,
  borderWidth,
  borderColor,
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
            <UserItem key={i} user={user} size={size} borderWidth={borderWidth} borderColor={borderColor} tag="li" />
          ))}
      </ul>
      {extraUsers > 0 && (
        <div className="react-user-list__extra" style={{ fontSize: `${size / 3}px` }}>
          <div>+{extraUsers}</div>
        </div>
      )}
    </div>
  );
};

export { stringToColour, UserItem };
export default UserList;
