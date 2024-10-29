"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[3575],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=i,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:84},a="Write config",c={unversionedId:"events/write_config",id:"version-0.1.0/events/write_config",title:"Write config",description:"This file is generated whenever a file located in /etc is being written.",source:"@site/versioned_docs/version-0.1.0/events/write_config.md",sourceDirName:"events",slug:"/events/write_config",permalink:"/docs/0.1.0/events/write_config",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/versioned_docs/version-0.1.0/events/write_config.md",tags:[],version:"0.1.0",sidebarPosition:84,frontMatter:{sidebar_position:84},sidebar:"tutorialSidebar",previous:{title:"Write",permalink:"/docs/0.1.0/events/write"},next:{title:"File rename",permalink:"/docs/0.1.0/events/file_rename"}},s={},l=[],p={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"write-config"},"Write config"),(0,i.kt)("p",null,"This file is generated whenever a file located in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc")," is being ",(0,i.kt)("strong",{parentName:"p"},"written"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "command_line": "useradd ubuntu --comment Ubuntu --groups adm,audio,cdrom,dialout,dip,floppy,lxd,netdev,plugdev,sudo,video --shell /bin/bash -m",\n    "exe": "/usr/sbin/useradd",\n    "path": "/etc/gshadow+"\n  },\n  "info": {\n    ...\n    "event": {\n        ...\n        "id": 84,\n        "name": "write_config",\n        ...\n    },\n    ...\n  }\n}\n')))}d.isMDXComponent=!0}}]);