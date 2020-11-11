---
id: helper-functions
title: Helper Functions
sidebar_label: Helper Functions
---

## String to Hex
Generates a randomised (high contrast on white backgrounds) hex colour based on a string. 
### Example
```js
import { stringToHex } from "react-user-list";

console.log(stringToHex("sample_text"));
// output: #92282a
```

## String to RGB
Generates a randomised (high contrast on white backgrounds) RGB colour based on a string. 
### Example
```js
import { stringToRGB } from "react-user-list";

console.log(stringToRGB("sample_text"));
// output: {r: 146, g: 40, b: 42}
```