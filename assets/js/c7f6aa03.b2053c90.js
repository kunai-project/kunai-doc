"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[5337],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1e3},s="Error",o={unversionedId:"events/error",id:"version-0.5.0/events/error",title:"Error",description:"This event is generated when Kunai encounters an error. It provides detailed information about the error, including its code, message, and context. The error event helps in diagnosing and resolving issues effectively by surfacing critical details.",source:"@site/versioned_docs/version-0.5.0/events/error.md",sourceDirName:"events",slug:"/events/error",permalink:"/docs/events/error",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/versioned_docs/version-0.5.0/events/error.md",tags:[],version:"0.5.0",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"File Scan",permalink:"/docs/events/file_scan"},next:{title:"Event Loss",permalink:"/docs/events/event_loss"}},l={},c=[{value:"Example JSON",id:"example-json",level:2},{value:"Additional Details",id:"additional-details",level:2},{value:"Why This Event Matters",id:"why-this-event-matters",level:3},{value:"Throttling Mechanisms",id:"throttling-mechanisms",level:3},{value:"Key Fields Explained",id:"key-fields-explained",level:3},{value:"<code>.data.code</code>",id:"datacode",level:4},{value:"<code>.data.message</code>",id:"datamessage",level:4}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error"},"Error"),(0,a.kt)("p",null,"This event is generated when ",(0,a.kt)("strong",{parentName:"p"},"Kunai")," encounters an error. It provides detailed information about the error, including its code, message, and context. The ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," event helps in diagnosing and resolving issues effectively by surfacing critical details."),(0,a.kt)("h2",{id:"example-json"},"Example JSON"),(0,a.kt)("p",null,"Below is a sample JSON payload for an error event:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash|/usr/bin/timeout",\n    "command_line": "bash -ec \\"trash=/tmp/trash; mkdir -p $trash; while [ true ]; do t=$(mktemp -d -p $trash); for i in {0..100000}; do echo \\\\\\"AHHHH\\\\\\" > $t/test$i.txt; done && rm -rf $t; done\\"",\n    "exe": {\n      "path": "/usr/bin/bash"\n    },\n    "code": 1,\n    "message": "throttle filesystem events, per task limit reached"\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 1000,\n      "name": "error",\n      "uuid": "9e8653aa-9743-7696-9b99-5a6a6ffc0403",\n      "batch": 1074\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2025-01-17T14:16:33.661432510Z"\n  }\n}\n')),(0,a.kt)("h2",{id:"additional-details"},"Additional Details"),(0,a.kt)("h3",{id:"why-this-event-matters"},"Why This Event Matters"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," event is essential for:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Debugging"),": Pinpoints the exact issue by providing an error code and message."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Performance Optimization"),": Highlights cases where thresholds are breached, such as excessive file system events."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Root Cause Analysis"),": Provides process ancestry and command-line context to trace back the source of the issue.")),(0,a.kt)("h3",{id:"throttling-mechanisms"},"Throttling Mechanisms"),(0,a.kt)("p",null,"Kunai includes ",(0,a.kt)("strong",{parentName:"p"},"throttling mechanism"),", which are specifically designed to mitigate ",(0,a.kt)("strong",{parentName:"p"},"critical event")," loss. These mechanisms dynamically reduce the logging of excessively frequent events (such as file system events), balancing the system's monitoring capacity and performance."),(0,a.kt)("h3",{id:"key-fields-explained"},"Key Fields Explained"),(0,a.kt)("h4",{id:"datacode"},(0,a.kt)("inlineCode",{parentName:"h4"},".data.code")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Numeric code representing the error type. For example:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1"),": Per-task threshold reached."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2"),": Global threshold reached.")))),(0,a.kt)("h4",{id:"datamessage"},(0,a.kt)("inlineCode",{parentName:"h4"},".data.message")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A descriptive message explaining the error.")))}u.isMDXComponent=!0}}]);