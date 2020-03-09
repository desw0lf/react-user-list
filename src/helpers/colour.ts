// Hash any string into an integer value
// Then we'll use the int and convert to hex.
const hashCode = (str: any): any => {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
};

// Convert an int to hexadecimal with a max length
// of six characters.
const intToARGB = (i: number): string => {
  let hex =
    ((i >> 24) & 0xff).toString(16) +
    ((i >> 16) & 0xff).toString(16) +
    ((i >> 8) & 0xff).toString(16) +
    (i & 0xff).toString(16);
  // Sometimes the string returned will be too short so we
  // add zeros to pad it out, which later get removed if
  // the length is greater than six.
  hex += "000000";
  return hex.substring(0, 6);
};

interface RGB {
  r: number;
  g: number;
  b: number;
}

const hexToRGB = (hexValue: string): RGB => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexValue);
  if (!result) {
    return {
      r: 0,
      g: 0,
      b: 0
    };
  }
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  };
};

export const stringToHex = (value: string): string => {
  return "#" + intToARGB(hashCode(value));
};

export const stringToRGB = (hexValue: string): RGB => {
  return hexToRGB("#" + intToARGB(hashCode(hexValue)));
};

export const RGBToStringifiedRGBa = (rgb: RGB, opacity = 1): string => {
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
};
