"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[1269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(d,".").concat(m)]||p[m]||l[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:62},i="Send Data",s={unversionedId:"events/send_data",id:"version-0.4.0/events/send_data",title:"Send Data",description:"This events gets generated when data is sent to a remote IP address.",source:"@site/versioned_docs/version-0.4.0/events/send_data.md",sourceDirName:"events",slug:"/events/send_data",permalink:"/docs/events/send_data",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/versioned_docs/version-0.4.0/events/send_data.md",tags:[],version:"0.4.0",sidebarPosition:62,frontMatter:{sidebar_position:62},sidebar:"tutorialSidebar",previous:{title:"Dns Query",permalink:"/docs/events/dns_query"},next:{title:"Read",permalink:"/docs/events/read"}},d={},c=[],u={toc:c},p="wrapper";function l(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"send-data"},"Send Data"),(0,a.kt)("p",null,"This events gets generated when data is sent to a remote IP address."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".data.dst.hostname")," is a correlated field from a previous ",(0,a.kt)("a",{parentName:"li",href:"dns_query"},"dns_query")," event"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".data.data_entropy")," gives you ",(0,a.kt)("strong",{parentName:"li"},"an estimate")," of the entropy of the data sent. This can be used to identify ",(0,a.kt)("strong",{parentName:"li"},"high entropy")," (i.e. compressed, encrypted) communications."))),(0,a.kt)("admonition",{title:"detection idea",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This event can be used to spot executables sending data over the network while\nthey are not supposed to.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",\n    "command_line": "curl https://why.kunai.rocks",\n    "exe": {\n      "path": "/usr/bin/curl"\n    },\n    "socket": {\n      "domain": "AF_INET",\n      "type": "SOCK_STREAM",\n      "proto": "TCP"\n    },\n    "src": {\n      "ip": "192.168.1.152",\n      "port": 19656\n    },\n    "dst": {\n      "hostname": "kunai-project.github.io",\n      "ip": "185.199.110.153",\n      "port": 443,\n      "public": true,\n      "is_v6": false\n    },\n    "community_id": "1:uusXTSRjL/83fb1xfxEtd+dKM3M=",\n    "data_entropy": 4.543225,\n    "data_size": 517\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 62,\n      "name": "send_data",\n      "uuid": "4190e662-694e-c972-0747-37d01475598c",\n      "batch": 877\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2024-10-29T12:48:02.470966564Z"\n  }\n}\n')))}l.isMDXComponent=!0}}]);