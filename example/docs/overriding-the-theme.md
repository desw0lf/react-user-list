---
id: overriding-the-theme
title: Overriding the theme
sidebar_label: Overriding the theme
---

## Overriding the theme
Modify the `theme` props for the component, giving your custom theme name. Then override the CSS using the `.react-user-list__YOUR-THEME-NAME-HERE` parent class where necessary.

## Code Sample
```tsx
<UserList users={[]} theme="my-theme" />
```

```css
.react-user-list__my-theme {
  background: red;
}

.react-user-list__my-theme .react-user-list__avatar {
  color: purple;
}
```
