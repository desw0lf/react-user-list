---
id: usage
title: Usage
sidebar_label: Usage
---

## Code
```tsx
import React from "react";

import UserList from "react-user-list";

export default const Example = () => {
  const users = [
    {
      firstName: "John",
      lastName: "Smith",
      username: "john.smith@sample.com",
      image: null
    },
    {
      firstName: "Sarah",
      lastName: "Doe",
      username: "sarah.doe@sample2.com",
      image: "https://i.pravatar.cc/100"
    }
  ];
  return <UserList users={users} />;
};
```