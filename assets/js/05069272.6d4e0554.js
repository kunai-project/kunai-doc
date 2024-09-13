"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[9836],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),l=u(t),f=o,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||s;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=f;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[l]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3206:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const s={sidebar_position:61},i="Dns query",a={unversionedId:"events/dns_query",id:"version-0.2.0/events/dns_query",title:"Dns query",description:"This event is generated when the a DNS response is received on the host and gives insight both on the query, the response and the DNS\xa0resolver.",source:"@site/versioned_docs/version-0.2.0/events/dns_query.md",sourceDirName:"events",slug:"/events/dns_query",permalink:"/docs/events/dns_query",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/versioned_docs/version-0.2.0/events/dns_query.md",tags:[],version:"0.2.0",sidebarPosition:61,frontMatter:{sidebar_position:61},sidebar:"tutorialSidebar",previous:{title:"Connect",permalink:"/docs/events/connect"},next:{title:"Send data",permalink:"/docs/events/send_data"}},c={},u=[],p={toc:u},l="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(l,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dns-query"},"Dns query"),(0,o.kt)("p",null,"This event is generated when the a DNS response is received on the host and gives insight both on the query, the response and the DNS\xa0resolver."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This event will be generated only for DNS over ",(0,o.kt)("strong",{parentName:"p"},"UDP/53")," or ",(0,o.kt)("strong",{parentName:"p"},"TCP/53"))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The code responsible of generating this event is one of the most complex so it is possible that some edge cases might not generate the expected event. If that is your case, open an issue, we will work on it.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",\n    "command_line": "curl https://why.kunai.rocks",\n    "exe": {\n      "file": "/usr/bin/curl"\n    },\n    "query": "0xrawsec.github.io",\n    "proto": "udp",\n    "response": "185.199.111.153;185.199.110.153;185.199.109.153;185.199.108.153",\n    "dns_server": {\n      "ip": "192.168.1.1",\n      "port": 53,\n      "public": false,\n      "is_v6": false\n    }\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 61,\n      "name": "dns_query",\n      "uuid": "6c106f3d-cf35-8e27-2f21-24ff6e505fae",\n      "batch": 67\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2024-02-12T21:58:23.240891687Z"\n  }\n}\n')))}d.isMDXComponent=!0}}]);