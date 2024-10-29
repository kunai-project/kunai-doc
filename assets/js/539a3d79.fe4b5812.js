"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[7838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:7},o="Prctl",s={unversionedId:"events/prctl",id:"events/prctl",title:"Prctl",description:"A prctl event is generated when a process makes a call to the prctl syscall. As you can",source:"@site/docs/events/prctl.md",sourceDirName:"events",slug:"/events/prctl",permalink:"/docs/next/events/prctl",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/docs/events/prctl.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Clone",permalink:"/docs/next/events/clone"},next:{title:"Kill",permalink:"/docs/next/events/kill"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prctl"},"Prctl"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"prctl")," event is generated when a process makes a call to the ",(0,a.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/prctl.2.html"},(0,a.kt)("inlineCode",{parentName:"a"},"prctl"))," ",(0,a.kt)("strong",{parentName:"p"},"syscall"),". As you can\nread in the man page, this syscall can be used to achieve a wide range of\noperations. Some of them might be considered as malicious, depending on\nthe context."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".data.option"),": the first argument to prctl syscall",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"if option is ",(0,a.kt)("inlineCode",{parentName:"li"},"PR_SET_NAME")," the new task name can be obtained in ",(0,a.kt)("inlineCode",{parentName:"li"},".info.task.name")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".data.arg[2-5]"),": others arguments to prctl, their meaning depends on option"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",\n    "command_line": "sudo rm /etc/kunai_test.conf",\n    "exe": {\n      "path": "/usr/bin/sudo"\n    },\n    "option": "PR_CAP_AMBIENT",\n    "arg2": "0x1",\n    "arg3": "0x0",\n    "arg4": "0x0",\n    "arg5": "0x0",\n    "success": true\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 7,\n      "name": "prctl",\n      "uuid": "f87e9b31-8686-6d7d-f3fb-7dd98d21caee",\n      "batch": 878\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2024-10-29T12:48:02.475355358Z"\n  }\n}\n')))}d.isMDXComponent=!0}}]);