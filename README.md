# react-user-list

> 

[![NPM](https://img.shields.io/npm/v/react-user-list.svg)](https://www.npmjs.com/package/react-user-list) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-user-list
```

## Usage

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

## License

MIT © [](https://github.com/)
