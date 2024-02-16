"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[1452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(d,".").concat(m)]||p[m]||l[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:62},o="Send data",s={unversionedId:"events/send_data",id:"events/send_data",title:"Send data",description:"This events gets generated when data is sent to a remote IP address.",source:"@site/docs/events/send_data.md",sourceDirName:"events",slug:"/events/send_data",permalink:"/docs/next/events/send_data",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/docs/events/send_data.md",tags:[],version:"current",sidebarPosition:62,frontMatter:{sidebar_position:62},sidebar:"tutorialSidebar",previous:{title:"Dns query",permalink:"/docs/next/events/dns_query"},next:{title:"Read",permalink:"/docs/next/events/read"}},d={},c=[],u={toc:c},p="wrapper";function l(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"send-data"},"Send data"),(0,a.kt)("p",null,"This events gets generated when data is sent to a remote IP address."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".data.dst.hostname")," is a correlated field from a previous ",(0,a.kt)("a",{parentName:"li",href:"dns_query"},"dns_query")," event"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".data.data_entropy")," gives you ",(0,a.kt)("strong",{parentName:"li"},"an estimate")," of the entropy of the data sent. This can be used to identify ",(0,a.kt)("strong",{parentName:"li"},"high entropy")," (i.e. compressed, encrypted) communications."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",\n    "command_line": "curl https://why.kunai.rocks",\n    "exe": {\n      "file": "/usr/bin/curl"\n    },\n    "dst": {\n      "hostname": "0xrawsec.github.io",\n      "ip": "185.199.111.153",\n      "port": 443,\n      "public": true,\n      "is_v6": false\n    },\n    "data_entropy": 4.496214,\n    "data_size": 517\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 62,\n      "name": "send_data",\n      "uuid": "5bdb7056-cad6-82d3-7c72-fd9c86631b53",\n      "batch": 68\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2024-02-12T21:58:23.241076068Z"\n  }\n}\n')))}l.isMDXComponent=!0}}]);