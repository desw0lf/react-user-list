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

export const stringToColour = (value: string): any => {
  const colour = "#" + intToARGB(hashCode(value));
  // prettier-ignore
  // tslint:disable-next-line:object-literal-key-quotes
  return { 'background': colour };
  // 'color': colour, 'border-color': colour,
};
