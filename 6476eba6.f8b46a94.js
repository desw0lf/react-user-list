(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{109:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),a=r(6),o=(r(0),r(133)),c={id:"usage",title:"Usage",sidebar_label:"Usage"},i={id:"usage",title:"Usage",description:"## Code",source:"@site/docs/usage.md",permalink:"/docs/usage",editUrl:"https://github.com/desw0lf/react-user-list/tree/master/example/docs/usage.md",sidebar_label:"Usage",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"UserList",permalink:"/docs/userlist"}},s=[{value:"Code",id:"code",children:[]}],u={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"code"},"Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'import React from "react";\n\nimport UserList from "react-user-list";\n\nexport default const Example = () => {\n  const users = [\n    {\n      firstName: "John",\n      lastName: "Smith",\n      username: "john.smith@sample.com",\n      image: null\n    },\n    {\n      firstName: "Sarah",\n      lastName: "Doe",\n      username: "sarah.doe@sample2.com",\n      image: "https://i.pravatar.cc/100"\n    }\n  ];\n  return <UserList users={users} />;\n};\n')))}l.isMDXComponent=!0},133:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return r?a.a.createElement(d,i({ref:t},u,{components:r})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);