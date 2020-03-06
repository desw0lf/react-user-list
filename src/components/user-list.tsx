import React, { Fragment, useState } from "react";
import DEFAULTS from "../defaults";
import UserAvatar from "./user-avatar";

// ? TYPES:
import { User } from "../types/user.type";
import { BorderRadius } from "../types/border-radius.type";

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

export default UserList;
