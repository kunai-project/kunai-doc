"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[9618],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>b});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(b,a(a({ref:n},l),{},{components:t})):r.createElement(b,a({ref:n},l))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3282:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:82},a="Read config",s={unversionedId:"events/read_config",id:"version-0.2.0/events/read_config",title:"Read config",description:"This file is generated whenever a file located in /etc is being read.",source:"@site/versioned_docs/version-0.2.0/events/read_config.md",sourceDirName:"events",slug:"/events/read_config",permalink:"/docs/events/read_config",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/versioned_docs/version-0.2.0/events/read_config.md",tags:[],version:"0.2.0",sidebarPosition:82,frontMatter:{sidebar_position:82},sidebar:"tutorialSidebar",previous:{title:"Read",permalink:"/docs/events/read"},next:{title:"Write",permalink:"/docs/events/write"}},c={},u=[],l={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"read-config"},"Read config"),(0,i.kt)("p",null,"This file is generated whenever a file located in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc")," is being ",(0,i.kt)("strong",{parentName:"p"},"read"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",\n    "command_line": "sudo rmmod nbd",\n    "exe": {\n      "file": "/usr/bin/sudo"\n    },\n    "path": "/etc/passwd"\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 82,\n      "name": "read_config",\n      "uuid": "0307b677-3bbb-41e2-5760-f88cc2c8332f",\n      "batch": 24\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2024-02-12T21:58:16.952790421Z"\n  }\n}\n')))}p.isMDXComponent=!0}}]);