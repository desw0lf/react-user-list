import VARIABLES from "!!sass-variable-loader!./assets/sass/utilities/_exported-variables.scss";

// ? TYPES:
import { BorderRadius } from "./types/border-radius.type";

export interface AvatarDefaults {
  size: number;
  borderWidth: number;
  borderColor: string;
  borderRadius: BorderRadius;
  backgroundOpacity: number;
  backgroundColor: string;
  color: string;
}

export interface Defaults extends AvatarDefaults {
  maxItems: number;
  theme: "default" | string;
}

const DEFAULTS: Defaults = {
  size: parseFloat(VARIABLES.avatarSize),
  borderWidth: parseFloat(VARIABLES.borderWidth),
  borderColor: VARIABLES.borderColor,
  borderRadius: VARIABLES.borderRadius === "50%" ? "rounded" : parseInt(VARIABLES.borderRadius),
  maxItems: 3,
  theme: "default",
  backgroundOpacity: parseFloat(VARIABLES.backgroundOpacity),
  backgroundColor: VARIABLES.backgroundColor,
  color: VARIABLES.color
};

export default DEFAULTS;
