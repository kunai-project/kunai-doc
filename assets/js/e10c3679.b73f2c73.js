"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[9306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),u=a,b=f["".concat(c,".").concat(u)]||f[u]||d[u]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[f]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:22},i="Bpf Socket Filter Attached",s={unversionedId:"events/bpf_socket_filter",id:"version-0.4.0/events/bpf_socket_filter",title:"Bpf Socket Filter Attached",description:"A socket filter attachement has been made (for instance via getsockopt syscall).",source:"@site/versioned_docs/version-0.4.0/events/bpf_socket_filter.md",sourceDirName:"events",slug:"/events/bpf_socket_filter",permalink:"/docs/0.4.0/events/bpf_socket_filter",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/versioned_docs/version-0.4.0/events/bpf_socket_filter.md",tags:[],version:"0.4.0",sidebarPosition:22,frontMatter:{sidebar_position:22},sidebar:"tutorialSidebar",previous:{title:"Bpf Prog Load",permalink:"/docs/0.4.0/events/bpf_prog_load"},next:{title:"Mprotect Exec",permalink:"/docs/0.4.0/events/mprotect_exec"}},c={},l=[],p={toc:l},f="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bpf-socket-filter-attached"},"Bpf Socket Filter Attached"),(0,a.kt)("p",null,"A socket filter attachement has been made (for instance via ",(0,a.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/getsockopt.2.html"},"getsockopt")," syscall)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash|/usr/bin/sudo|/usr/bin/sudo|/usr/bin/timeout",\n    "command_line": "tcpdump tcp port 42",\n    "exe": {\n      "path": "/usr/bin/tcpdump"\n    },\n    "socket": {\n      "domain": "AF_PACKET",\n      "type": "SOCK_RAW",\n      "proto": "IP"\n    },\n    "filter": {\n      "md5": "f14a5bc6d08bc46424827f54d2e3f8ed",\n      "sha1": "0f29b02f9eff3b0f2b9bba51e299b6a0b7493ff0",\n      "sha256": "23d7f42b1cdc1f0d492ebd756ed0fe8003995dda554d99418d47a81813650207",\n      "sha512": "f6ec9d10ae03d32f6b31ae37322b629ec7caad83dd3c5dd870df8e6fd13a5a512b3bc2de8384504781eedebdbfaacb52b6213a2673a8433ddad0b142322d704e",\n      "len": 1,\n      "size": 8\n    },\n    "attached": true\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 22,\n      "name": "bpf_socket_filter",\n      "uuid": "5e4c9ff9-40dc-6e0e-1611-c144f99fdfe4",\n      "batch": 701\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2024-10-29T12:47:59.819970359Z"\n  }\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".data.filter.len")," is the length of the filter ",(0,a.kt)("strong",{parentName:"li"},"in number of BPF\xa0instructions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".data.filter.size")," is the size of the filter ",(0,a.kt)("strong",{parentName:"li"},"in bytes")))))}d.isMDXComponent=!0}}]);