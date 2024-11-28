"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[4930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=p(n),d=o,f=l["".concat(s,".").concat(d)]||l[d]||m[d]||i;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[l]="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:40},c="Mprotect Exec",a={unversionedId:"events/mprotect_exec",id:"version-0.3.0/events/mprotect_exec",title:"Mprotect Exec",description:"This kind of event is generated when memory protection is turned to executable.",source:"@site/versioned_docs/version-0.3.0/events/mprotect_exec.md",sourceDirName:"events",slug:"/events/mprotect_exec",permalink:"/docs/0.3.0/events/mprotect_exec",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/versioned_docs/version-0.3.0/events/mprotect_exec.md",tags:[],version:"0.3.0",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Bpf Socket Filter Attached",permalink:"/docs/0.3.0/events/bpf_socket_filter"},next:{title:"Mmap Exec",permalink:"/docs/0.3.0/events/mmap_exec"}},s={},p=[],u={toc:p},l="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mprotect-exec"},"Mprotect Exec"),(0,o.kt)("p",null,"This kind of event is generated when memory protection is turned to ",(0,o.kt)("strong",{parentName:"p"},"executable"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For some processes, those using JIT compilers, it is legit to generate a lot of mprotect_exec events.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",\n    "command_line": "/tmp/tmp.UjIedg3IHI_kunai_test.c.out",\n    "exe": {\n      "path": "/tmp/tmp.UjIedg3IHI_kunai_test.c.out"\n    },\n    "addr": "0x776a2f572000",\n    "prot": "0x5"\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 40,\n      "name": "mprotect_exec",\n      "uuid": "1bc9874b-500c-7c7e-ad64-f14a608cbc58",\n      "batch": 877\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2024-10-29T12:48:02.469448415Z"\n  }\n}\n')))}m.isMDXComponent=!0}}]);