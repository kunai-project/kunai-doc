"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[8885],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2395:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:81},i="Read",s={unversionedId:"events/read",id:"version-0.1.0/events/read",title:"Read",description:"This event gets generated whenever a file is read.",source:"@site/versioned_docs/version-0.1.0/events/read.md",sourceDirName:"events",slug:"/events/read",permalink:"/docs/events/read",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/versioned_docs/version-0.1.0/events/read.md",tags:[],version:"0.1.0",sidebarPosition:81,frontMatter:{sidebar_position:81},sidebar:"tutorialSidebar",previous:{title:"Mount",permalink:"/docs/events/mount"},next:{title:"Read config",permalink:"/docs/events/read_config"}},l={},d=[],c={toc:d},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"read"},"Read"),(0,a.kt)("p",null,"This event gets generated whenever a file is read."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"If consecutive ",(0,a.kt)("inlineCode",{parentName:"li"},"read")," operations are made on the same file, only one event will be generated for a given task."),(0,a.kt)("li",{parentName:"ul"},"Events gets generated on ",(0,a.kt)("inlineCode",{parentName:"li"},"read")," variant syscalls. It means a file just being opened with ",(0,a.kt)("inlineCode",{parentName:"li"},"open")," kind of syscalls won't generate any event until being actually read."))),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"If you decide to enable these events (disabled by default), you must be aware that they are going to be a lot. Please make sure you have read the ",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration"},"configuration section"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "command_line": "useradd ubuntu --comment Ubuntu --groups adm,audio,cdrom,dialout,dip,floppy,lxd,netdev,plugdev,sudo,video --shell /bin/bash -m",\n    "exe": "/usr/sbin/useradd",\n    "path": "/lib/x86_64-linux-gnu/libsepol.so.1"\n  },\n  "info": {\n    ...\n    "event": {\n        ...\n        "id": 81,\n        "name": "read",\n        ...\n    },\n    ...\n  }\n}\n')))}p.isMDXComponent=!0}}]);