import VARIABLES from "!!sass-variable-loader!./assets/sass/utilities/_exported-variables.scss";

// ? TYPES:
import { BorderRadius } from "./types/border-radius.type";

interface Defaults {
  size: number;
  borderWidth: number;
  borderColor: string;
  borderRadius: BorderRadius;
  maxItems: number;
  theme: string;
}

const DEFAULTS: Defaults = {
  size: parseInt(VARIABLES.avatarSize, 10),
  borderWidth: parseInt(VARIABLES.borderWidth, 10),
  borderColor: VARIABLES.borderColor,
  borderRadius: VARIABLES.borderRadius === "50%" ? "rounded" : parseInt(VARIABLES.borderRadius),
  maxItems: 3,
  theme: "default"
};

export default DEFAULTS;
