"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[4859],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:86},a="File unlink",l={unversionedId:"events/file_unlink",id:"version-0.3.0/events/file_unlink",title:"File unlink",description:"Event generated when a file gets unlinked",source:"@site/versioned_docs/version-0.3.0/events/file_unlink.md",sourceDirName:"events",slug:"/events/file_unlink",permalink:"/docs/events/file_unlink",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/versioned_docs/version-0.3.0/events/file_unlink.md",tags:[],version:"0.3.0",sidebarPosition:86,frontMatter:{sidebar_position:86},sidebar:"tutorialSidebar",previous:{title:"File rename",permalink:"/docs/events/file_rename"},next:{title:"Write and close",permalink:"/docs/events/write_close"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file-unlink"},"File unlink"),(0,i.kt)("p",null,"Event generated when a file gets unlinked"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/udevadm",\n    "command_line": "/usr/lib/systemd/systemd-udevd",\n    "exe": {\n      "path": "/usr/bin/udevadm"\n    },\n    "path": "/run/udev/watch/b43:128",\n    "success": true\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 86,\n      "name": "file_unlink",\n      "uuid": "66d58529-0b24-ef1d-2b27-3e5a5a85d31b",\n      "batch": 643\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2024-10-29T12:47:59.189301629Z"\n  }\n}\n')))}d.isMDXComponent=!0}}]);