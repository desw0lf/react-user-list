import React, { useState } from "react";
import DEFAULTS from "../defaults";
import { stringToRGB, RGBToStringifiedRGBa } from "../helpers/colour";

// ? TYPES:
import { User } from "../types/user.type";
// import { BorderRadius } from "../types/border-radius.type";
import { ColourizeProperties } from "../types/colourize-properties.type";
import { AvatarDefaults } from "../defaults";

export interface Props extends Partial<AvatarDefaults> {
  user: User;
  // size?: number;
  // borderRadius?: BorderRadius;
  // borderWidth?: number;
  // borderColor?: string;
  // backgroundOpacity?: number;
  // backgroundColor?: string;
  colourizeProperties: ColourizeProperties | ColourizeProperties[];
  tag: "div" | "li" | "span" | "button"; // TODO maybe: general type for html elements // keyof HTMLElementTagNameMap
}

const UserAvatar: React.ElementType = ({
  user,
  size = DEFAULTS.size,
  backgroundOpacity = DEFAULTS.backgroundOpacity,
  borderWidth,
  borderRadius,
  borderColor,
  color,
  colourizeProperties = ["backgroundColor"],
  backgroundColor,
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
    ...(backgroundColor !== DEFAULTS.backgroundColor && { backgroundColor }),
    ...(color !== DEFAULTS.color && { color }),
    fontSize: `${size / 3}px`
  };
  const initials = user.firstName.charAt(0) + user.lastName.charAt(0);
  const colour = stringToRGB(user.username);
  if (typeof colourizeProperties === "string") {
    colourizeProperties = [colourizeProperties];
  }
  const colours = colourizeProperties.reduce((final: any, current: string) => {
    return {
      ...final,
      [current]: RGBToStringifiedRGBa(colour, current === "backgroundColor" ? backgroundOpacity : 1)
    };
  }, {});
  // const bg = { background: image ? "rgba(0,0,0,0.5)" : colour };
  return (
    <WrapperTag className="react-user-list__user">
      <div className="react-user-list__avatar" style={{ ...baseStyles, ...colours }}>
        {!image ? <span>{initials}</span> : <img onError={onImageError} src={image} alt={initials} />}
      </div>
    </WrapperTag>
  );
};

export default UserAvatar;
