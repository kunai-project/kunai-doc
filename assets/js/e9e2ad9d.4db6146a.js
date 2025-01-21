"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[8170],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),m=o,b=l["".concat(s,".").concat(m)]||l[m]||d[m]||a;return t?r.createElement(b,i(i({ref:n},u),{},{components:t})):r.createElement(b,i({ref:n},u))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3458:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:60},i="Connect",c={unversionedId:"events/connect",id:"version-0.4.0/events/connect",title:"Connect",description:"This event gets generated every time a connect attempt is made to a remote IP.",source:"@site/versioned_docs/version-0.4.0/events/connect.md",sourceDirName:"events",slug:"/events/connect",permalink:"/docs/0.4.0/events/connect",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/versioned_docs/version-0.4.0/events/connect.md",tags:[],version:"0.4.0",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Mmap Exec",permalink:"/docs/0.4.0/events/mmap_exec"},next:{title:"Dns Query",permalink:"/docs/0.4.0/events/dns_query"}},s={},p=[],u={toc:p},l="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(l,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect"},"Connect"),(0,o.kt)("p",null,"This event gets generated every time a ",(0,o.kt)("strong",{parentName:"p"},"connect")," attempt is made to a remote IP."),(0,o.kt)("admonition",{title:"hostname correlation",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If available ",(0,o.kt)("inlineCode",{parentName:"p"},"dst.hostname")," fields gets correlated with a previous ",(0,o.kt)("a",{parentName:"p",href:"dns_query"},"dns_query events")," event")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",\n    "command_line": "curl -d RCKhLa0Ka70LTYgF4eJiQkAspo9Yevj3dMjuSc0NwpOauPicV3P4bajH1paLQMvYGIILwrHk3cpxgS4FDVAUn5XiT0ucGNoVYd2FAjg6hP1zXSH9KCKJhB3ixUq8APtqSJ1DPVYGPOSyCIaHb9Nh4QOJe0UiYjogNoiFBRYVIL8hFgI607LW0MVxcTQqPdX9Utuw9MXxyEaN6TVcFWmKAxrV5BsgP9YYeXyWwda62Kg5aqsq2cdPy9jm9s6S6Brr https://why.kunai.rocks",\n    "exe": {\n      "path": "/usr/bin/curl"\n    },\n    "socket": {\n      "domain": "AF_INET",\n      "type": "SOCK_DGRAM",\n      "proto": "UDP"\n    },\n    "src": {\n      "ip": "192.168.1.152",\n      "port": 36749\n    },\n    "dst": {\n      "hostname": "kunai-project.github.io",\n      "ip": "185.199.111.153",\n      "port": 443,\n      "public": true,\n      "is_v6": false\n    },\n    "community_id": "1:Zy0KM8lSsDjFs4mzmfFHjtBZfPI=",\n    "connected": true\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 60,\n      "name": "connect",\n      "uuid": "6c1ab8dc-3e55-cdc9-12ea-b14d15366dba",\n      "batch": 877\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2024-10-29T12:48:02.472813816Z"\n  }\n}\n')))}d.isMDXComponent=!0}}]);