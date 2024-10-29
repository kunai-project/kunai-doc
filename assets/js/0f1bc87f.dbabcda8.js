"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[3791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:87},o="Write and close",s={unversionedId:"events/write_and_close",id:"events/write_and_close",title:"Write and close",description:"An event generated when a file that has been written is just being closed. This is a great hook event to trigger a file scan as the file is not supposed to be written again.",source:"@site/docs/events/write_and_close.md",sourceDirName:"events",slug:"/events/write_and_close",permalink:"/docs/next/events/write_and_close",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/docs/events/write_and_close.md",tags:[],version:"current",sidebarPosition:87,frontMatter:{sidebar_position:87},sidebar:"tutorialSidebar",previous:{title:"File unlink",permalink:"/docs/next/events/file_unlink"},next:{title:"File Scan",permalink:"/docs/next/events/file_scan"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"write-and-close"},"Write and close"),(0,a.kt)("p",null,"An event generated when a file that has been ",(0,a.kt)("strong",{parentName:"p"},"written")," is just being ",(0,a.kt)("strong",{parentName:"p"},"closed"),". This is a great hook event to trigger a ",(0,a.kt)("strong",{parentName:"p"},"file scan")," as the file is not supposed to be ",(0,a.kt)("strong",{parentName:"p"},"written")," again."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This event is different from ",(0,a.kt)("a",{parentName:"p",href:"../events/write"},(0,a.kt)("inlineCode",{parentName:"a"},"write"))," event. ",(0,a.kt)("inlineCode",{parentName:"p"},"write")," event gets generated only once per file and ",(0,a.kt)("strong",{parentName:"p"},"as soon as")," the file receive its first ",(0,a.kt)("strong",{parentName:"p"},"write")," operation.")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"If you decide to enable these events (disabled by default), you must be aware that they are going to be a lot. Please make sure you have read the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/configuration"},"configuration section"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh",\n    "command_line": "/bin/bash ./generate-activity.sh",\n    "exe": {\n      "path": "/usr/bin/bash"\n    },\n    "path": "/tmp/tmp.URdsDAjMAu_kunai_test.sh"\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 87,\n      "name": "write_and_close",\n      "uuid": "1346aa39-8ebd-5cd6-966e-f8ff9cd91fdd",\n      "batch": 606\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2024-10-29T12:47:58.845148406Z"\n  }\n}\n')))}d.isMDXComponent=!0}}]);