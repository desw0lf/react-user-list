---
id: type-user
title: User
sidebar_label: User
---

```jsx
interface User {
  firstName: string;
  lastName: string;
  image: string | null;
  username: string;
  [otherProps: string]: any;
};
```