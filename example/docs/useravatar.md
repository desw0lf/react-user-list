---
id: useravatar
title: UserAvatar
sidebar_label: UserAvatar
---

## Required Props
| Props | Type | Description |
| --- | --- | --- |
| `user` | `User` [(type)](type-user.md) | The user object for the component |

## Optional Props
| Props | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `number` | `40` | The size in `px` for avatars |
| `borderRadius` | `number` &#124; `"rounded"` | `"rounded"` | Border radius in `px` for avatars or `"rounded"` for rounded corners |
| `borderWidth` | `number` | `2` | Border width in `px` |
| `borderColor` | `string` | `"white"` | Accepts any CSS border-color property
| `backgroundColor` | `string` | `"rgba(0,0,0,0.5)"` | Accepts any CSS backgroundColor property
| `backgroundOpacity` | `number` | `1` | Number from 0 to 1 sets the opacity of the background |
| `color` | `string` | `"white"` | Accepts any CSS color property
| `tag` | `"div"` &#124; `"li"` &#124; `"span"` &#124; `"button"` | `"div"` | Tag used for the UserAvatar wrapper |
| `colourizeProperties` | `("backgroundColor"` &#124; `"color"` &#124; `"borderColor")[]` | `["backgroundColor"]` | List of properties that the colour will be automatically generated for. Default value means only the backgroundColor will be generated. |