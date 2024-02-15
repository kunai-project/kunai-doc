"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[9374],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=u(t),f=a,b=l["".concat(s,".").concat(f)]||l[f]||d[f]||c;return t?r.createElement(b,i(i({ref:n},p),{},{components:t})):r.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[l]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<c;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7210:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const c={sidebar_position:1},i="Execve",o={unversionedId:"events/execve",id:"events/execve",title:"Execve",description:"Execve events are generated whenever an execve syscall happens on the system. It provides information about the current binary currently running.",source:"@site/docs/events/execve.md",sourceDirName:"events",slug:"/events/execve",permalink:"/docs/next/events/execve",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Event Layout and Info Section",permalink:"/docs/next/events/generalities"},next:{title:"Execve script",permalink:"/docs/next/events/execve_script"}},s={},u=[],p={toc:u},l="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(l,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"execve"},"Execve"),(0,a.kt)("p",null,"Execve events are generated whenever an ",(0,a.kt)("inlineCode",{parentName:"p"},"execve")," syscall happens on the system. It provides information about the current binary currently running."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This event gets generated only when ",(0,a.kt)("inlineCode",{parentName:"p"},"execve")," syscall is successful")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/zsh",\n    "parent_exe": "/usr/bin/zsh",\n    "command_line": "git rev-parse --quiet --verify HEAD",\n    "exe": {\n      "file": "/usr/bin/git",\n      "md5": "7df180fdcbd91f2d5e119ad4eca85d38",\n      "sha1": "a90827d841b5a33703227764e2f62a487cc9cbf3",\n      "sha256": "30eccaee4cda7ed541c143bf73c3fd1266a8a17302dc362da487be72f5ac3500",\n      "sha512": "dde3c20e7974234ecee33759574706ef5644d12b363a29d090984d1ce09ca246e27c8e7496d67c035d6817f8a3c2665cffbff26904bd9283cf5abb08ff888dff",\n      "size": 4180608\n    }\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 1,\n      "name": "execve",\n      "uuid": "88780e39-3308-e9a9-3f23-5c69475b3ccf",\n      "batch": 294\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2024-02-13T08:35:12.881471231Z"\n  }\n}\n')))}d.isMDXComponent=!0}}]);