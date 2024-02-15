"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[1818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:83},a="Write",s={unversionedId:"events/write",id:"events/write",title:"Write",description:"This event gets generated whenever a file is write.",source:"@site/docs/events/write.md",sourceDirName:"events",slug:"/events/write",permalink:"/docs/next/events/write",draft:!1,tags:[],version:"current",sidebarPosition:83,frontMatter:{sidebar_position:83},sidebar:"tutorialSidebar",previous:{title:"Read config",permalink:"/docs/next/events/read_config"},next:{title:"Write config",permalink:"/docs/next/events/write_config"}},c={},u=[],l={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"write"},"Write"),(0,i.kt)("p",null,"This event gets generated whenever a file is write."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If consecutive ",(0,i.kt)("inlineCode",{parentName:"p"},"write")," operations are made on the same file, only one event will be generated for a given task.")),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"If you decide to enable these events (disabled by default), you must be aware that they are going to be a lot. Please make sure you have read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/configuration"},"configuration section"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash|/usr/bin/gcc",\n    "command_line": "as --64 -o /tmp/cc5SLgFb.o /tmp/ccDONlAi.s",\n    "exe": {\n      "file": "/usr/bin/as"\n    },\n    "path": "/tmp/cc5SLgFb.o"\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 83,\n      "name": "write",\n      "uuid": "4d118514-c06d-9699-b2cd-f33fdb94c494",\n      "batch": 67\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2024-02-12T21:58:23.237691754Z"\n  }\n}\n')))}d.isMDXComponent=!0}}]);