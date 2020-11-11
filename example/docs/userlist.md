---
id: userlist
title: UserList
sidebar_label: UserList
---

## Required Props
| Props | Type | Description |
| --- | --- | --- |
| `users` | `User[]` [(type)](type-user.md) | The list of users for the component |

## Optional Props
| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `usersLength` | `number` | | The total amount of users, if not provided is counted automatically using the length of `users` |
| `theme` | `string` | `"default"` | Sets the class for the wrapper HTML element that can be used for custom themes |
| `size` | `number` | `40` | The size in `px` for avatars |
| `borderRadius` | `number` &#124; `"rounded"` | `"rounded"` | Border radius in `px` for avatars or `"rounded"` for rounded corners |
| `maxItems` | `number` | `3` | The maximum number of avatars to display before slicing |
| `borderWidth` | `number` | `2` | Border width in `px` |
| `borderColor` | `string` | `"white"` | Accepts any CSS border-color property
| `toggleListOnHover` | `boolean` | `true` | Turning it off won't show/hide the dropdown menu on hover |
| `minWidth` | `string` | `"240px"` | Minimum width of the dropdown menu |
| `maxHeight` | `string` | `"200px"` | Max height of the dropdown menu before applying a scroller
| `isExpanded` | `boolean` | `false` | Whether the dropdown menu should be expanded as default |
| `children` | `React.ReactNode` | | Custom child wrapper for the dropdown items, props available are `index: number, user: User` |