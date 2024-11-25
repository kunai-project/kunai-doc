"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[776],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),l=u(t),m=o,y=l["".concat(c,".").concat(m)]||l[m]||d[m]||s;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[l]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6621:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const s={sidebar_position:61},i="Dns Query",a={unversionedId:"events/dns_query",id:"events/dns_query",title:"Dns Query",description:"This event is generated when the a DNS response is received on the host and gives insight both on the query, the response and the DNS\xa0resolver.",source:"@site/docs/events/dns_query.md",sourceDirName:"events",slug:"/events/dns_query",permalink:"/docs/next/events/dns_query",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/docs/events/dns_query.md",tags:[],version:"current",sidebarPosition:61,frontMatter:{sidebar_position:61},sidebar:"tutorialSidebar",previous:{title:"Connect",permalink:"/docs/next/events/connect"},next:{title:"Send Data",permalink:"/docs/next/events/send_data"}},c={},u=[],p={toc:u},l="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(l,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dns-query"},"Dns Query"),(0,o.kt)("p",null,"This event is generated when the a DNS response is received on the host and gives insight both on the query, the response and the DNS\xa0resolver."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This event will be generated only for DNS over ",(0,o.kt)("strong",{parentName:"p"},"UDP/53")," or ",(0,o.kt)("strong",{parentName:"p"},"TCP/53"))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The code responsible of generating this event is one of the most complex so it is possible that some edge cases might not generate the expected event. If that is your case, open an issue, we will work on it.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",\n    "command_line": "curl https://why.kunai.rocks",\n    "exe": {\n      "path": "/usr/bin/curl"\n    },\n    "socket": {\n      "domain": "AF_INET",\n      "type": "SOCK_DGRAM",\n      "proto": "UDP"\n    },\n    "src": {\n      "ip": "192.168.1.152",\n      "port": 13267\n    },\n    "query": "kunai-project.github.io",\n    "response": "185.199.110.153;185.199.111.153;185.199.109.153;185.199.108.153",\n    "dns_server": {\n      "ip": "192.168.1.1",\n      "port": 53,\n      "public": false,\n      "is_v6": false\n    },\n    "community_id": "1:XT9OMvFiajrWmMOXr4N3TI+3Etc="\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 61,\n      "name": "dns_query",\n      "uuid": "ecc87c39-8da3-0b9d-4060-480fdef2efd7",\n      "batch": 878\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2024-10-29T12:48:02.470834988Z"\n  }\n}\n')))}d.isMDXComponent=!0}}]);