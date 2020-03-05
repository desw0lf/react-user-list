import React, { Fragment, useState } from "react";
import { stringToColour } from "./helpers/colour";
import "./assets/sass/react-user-list.scss";
import VARIABLES from "!!sass-variable-loader!./assets/sass/utilities/_exported-variables.scss";
// import variables from "!!sass-variable-loader!./variables.scss";

// ? TYPES:
import { User } from "./types/user.type";

type BorderRadius = "rounded" | number;

export type Props = {
  users: User[];
  size: number;
  borderRadius?: BorderRadius;
  children?: any; //React.ReactNode;
  usersLength?: number;
  maxItems: number;
  theme: "default" | string;
  borderWidth?: number;
  borderColor?: string;
  minWidth?: string;
  maxWidth?: string;
  isExpanded?: boolean;
  [otherProps: string]: any;
};

export type UserAvatarProps = {
  user: User;
  size?: number;
  borderRadius?: BorderRadius;
  borderWidth?: number;
  borderColor?: string;
  tag: "div" | "li" | "span" | "button"; // TODO maybe: general type for html elements // keyof HTMLElementTagNameMap
};

const DEFAULTS = {
  size: parseInt(VARIABLES.avatarSize, 10),
  borderWidth: parseInt(VARIABLES.borderWidth, 10),
  borderColor: VARIABLES.borderColor,
  borderRadius: VARIABLES.borderRadius === "50%" ? "rounded" : parseInt(VARIABLES.borderRadius),
  maxItems: 3,
  theme: "default"
};

const UserAvatar: React.ElementType = ({
  user,
  size = DEFAULTS.size,
  borderWidth,
  borderRadius,
  borderColor,
  tag = "div"
}: UserAvatarProps) => {
  const [image, setImage] = useState(user.image);
  const onImageError = () => {
    setImage(null);
  };
  const WrapperTag = tag;
  const baseStyles = {
    ...(size !== DEFAULTS.size && { width: `${size}px`, height: `${size}px` }),
    ...(borderWidth !== DEFAULTS.borderWidth && { borderWidth }),
    ...(borderColor !== DEFAULTS.borderColor && { borderColor }),
    ...(borderRadius !== DEFAULTS.borderRadius && { borderRadius }),
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
  size = DEFAULTS.size,
  borderRadius,
  maxItems = DEFAULTS.maxItems,
  borderWidth,
  borderColor,
  children,
  toggleListOnHover = true,
  minWidth = "240px",
  maxHeight = "200px",
  isExpanded = false,
  ...props
}: Props) => {
  const [expanded, setExpanded] = useState<boolean>(isExpanded);
  const extraUsers = usersLength || users.length - maxItems;
  // const UserListItem = children;
  const hoverProps = toggleListOnHover
    ? {
        onMouseEnter: () => setExpanded(true),
        onMouseLeave: () => setExpanded(false)
      }
    : {};
  return (
    <div
      {...hoverProps}
      className={`react-user-list__wrapper react-user-list__${theme} ${expanded ? "is-visible" : ""}`}
      {...props}>
      <ul>
        {users
          .slice(0, maxItems)
          .reverse()
          .map((user: User, i: number) => (
            <UserAvatar
              key={i}
              user={user}
              size={size}
              borderWidth={borderWidth}
              borderColor={borderColor}
              borderRadius={borderRadius}
              tag="li"
            />
          ))}
      </ul>
      {extraUsers > 0 && (
        <div className="react-user-list__extra" style={{ fontSize: `${size / 3}px` }}>
          <div>+{extraUsers}</div>
        </div>
      )}
      {children && expanded && (
        <div className="react-user-list__expanded">
          <div className="react-user-list__expanded-wrapper" style={{ minWidth: minWidth }}>
            {/* <div className="react-user-list__arrow-down">
              <div />
            </div> */}
            <div
              className="react-user-list__expanded-content react-user-list__scrollbar"
              style={{ maxHeight: maxHeight, marginTop: `${size}px` }}>
              {users.map((user: User, i: number) => {
                return (
                  <Fragment key={user.username}>
                    {children({
                      index: i,
                      user: user
                    })}
                  </Fragment>
                );
              })}
              {/* (  <UserListItem key={user.username} index={i} user={user} />
               ))} */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { stringToColour, UserAvatar };
export default UserList;
