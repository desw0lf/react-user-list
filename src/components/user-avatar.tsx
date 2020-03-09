import React, { useState } from "react";
import DEFAULTS from "../defaults";
import { stringToColour } from "../helpers/colour";

// ? TYPES:
import { User } from "../types/user.type";
import { BorderRadius } from "../types/border-radius.type";

export type Props = {
  user: User;
  size?: number;
  borderRadius?: BorderRadius;
  borderWidth?: number;
  borderColor?: string;
  tag: "div" | "li" | "span" | "button"; // TODO maybe: general type for html elements // keyof HTMLElementTagNameMap
};

const UserAvatar: React.ElementType = ({
  user,
  size = DEFAULTS.size,
  borderWidth,
  borderRadius,
  borderColor,
  tag = "div"
}: Props) => {
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
        {!image ? <span>{initials}</span> : <img onError={onImageError} src={image} alt={initials} />}
      </div>
    </WrapperTag>
  );
};

export default UserAvatar;
