"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[9288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),b=i,f=l["".concat(c,".").concat(b)]||l[b]||d[b]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},6815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4},a="Exit",s={unversionedId:"events/exit",id:"events/exit",title:"Exit",description:"Exit events get generated when a single task (process or thread) exits.",source:"@site/docs/events/exit.md",sourceDirName:"events",slug:"/events/exit",permalink:"/docs/events/exit",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/docs/events/exit.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Execve script",permalink:"/docs/events/execve_script"},next:{title:"Exit group",permalink:"/docs/events/exit_group"}},c={},u=[],p={toc:u},l="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exit"},"Exit"),(0,i.kt)("p",null,"Exit events get generated when a single task (process or thread) exits."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",\n    "command_line": "curl https://why.kunai.rocks",\n    "exe": {\n      "file": "/usr/bin/curl"\n    },\n    "error_code": 0\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 4,\n      "name": "exit",\n      "uuid": "18428017-1410-9cf5-4c19-96ec7bb5b8bd",\n      "batch": 67\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2024-02-12T21:58:23.241019255Z"\n  }\n}\n')))}d.isMDXComponent=!0}}]);