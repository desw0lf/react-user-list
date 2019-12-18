export interface User {
  firstName: string;
  lastName: string;
  image: string | null;
  username: string;
  [key: string]: any;
}
