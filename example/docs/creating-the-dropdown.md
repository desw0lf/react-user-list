---
id: creating-the-dropdown
title: Creating the Dropdown
sidebar_label: Creating the Dropdown
---

## Creating the Dropdown
Create your own dropdown logic using the `children` in the UserList Component, each user is passed down a mapped array in order for the child elements to consume.

## Code
```jsx
import React, { useState } from "react";

import UserList, { UserAvatar } from "react-user-list";

export default const Example = () => {
  const [selectedUser, setSelectedUser] = useState(null);
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
  return <UserList users={users}>
    {({ index, user }) => (
      <div style={{background: selectedUser === user && "red"}} onClick={() => setSelectedUser(user)}>
        <UserAvatar user={user} />
        <span>{user.firstName + " " + user.lastName}</span>
      </div>
    )}
  </UserList>;
};

```