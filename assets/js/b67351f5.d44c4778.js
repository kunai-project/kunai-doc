"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[8460],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={title:"Builtin IoC matching",sidebar_position:2},i=void 0,s={unversionedId:"advanced/ioc_configuration",id:"version-0.2.0/advanced/ioc_configuration",title:"Builtin IoC matching",description:"IoC (Indicator of Compromise) scanning results from the same motivation behind detection rules. It addresses the need to log only events matching specific **IoCs**. Even though one can match IoC with detection rules it is not very convenient to manage for lots of IoCs and even less to automate. The other difference is on the resource management aspect. Detection rules has some non negligible processing/memory cost to work properly (find the rules to apply and then match against fields). On the other hand, IoC matching is reduced to a lookup in a set, so it is much more cpu and memory efficient.",source:"@site/versioned_docs/version-0.2.0/advanced/ioc_configuration.md",sourceDirName:"advanced",slug:"/advanced/ioc_configuration",permalink:"/docs/0.2.0/advanced/ioc_configuration",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/versioned_docs/version-0.2.0/advanced/ioc_configuration.md",tags:[],version:"0.2.0",sidebarPosition:2,frontMatter:{title:"Builtin IoC matching",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configuration with Rules",permalink:"/docs/0.2.0/advanced/rule_configuration"},next:{title:"Compatibility",permalink:"/docs/0.2.0/compatibility"}},c={},l=[{value:"When should I use IoC scanning ?",id:"when-should-i-use-ioc-scanning-",level:3},{value:"How does it work ?",id:"how-does-it-work-",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example",id:"example",level:3}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IoC (Indicator of Compromise)")," scanning results from the same motivation behind ",(0,o.kt)("a",{parentName:"p",href:"./rule_configuration"},"detection rules"),". It addresses the need to log only events matching specific ",(0,o.kt)("strong",{parentName:"p"},"IoCs"),". Even though one can match IoC with ",(0,o.kt)("a",{parentName:"p",href:"./rule_configuration"},"detection rules")," it is not very convenient to manage for lots of ",(0,o.kt)("strong",{parentName:"p"},"IoCs")," and even less to automate. The other difference is on the resource management aspect. Detection rules has some non negligible processing/memory cost to work properly (find the rules to apply and then match against fields). On the other hand, IoC matching is reduced to a lookup in a set, so it is much more cpu and memory efficient."),(0,o.kt)("h3",{id:"when-should-i-use-ioc-scanning-"},"When should I use IoC scanning ?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When you have lots of ",(0,o.kt)("strong",{parentName:"li"},"IoCs")),(0,o.kt)("li",{parentName:"ul"},"When you ",(0,o.kt)("strong",{parentName:"li"},"do not need")," to match ",(0,o.kt)("strong",{parentName:"li"},"IoCs")," against ",(0,o.kt)("strong",{parentName:"li"},"regex")," (use ",(0,o.kt)("a",{parentName:"li",href:"./rule_configuration"},"detection rules"),")")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"When ",(0,o.kt)("strong",{parentName:"p"},"Kunai")," is configured to match against ",(0,o.kt)("strong",{parentName:"p"},"IoCs"),", ",(0,o.kt)("strong",{parentName:"p"},"ONLY")," the events matching one or more ",(0,o.kt)("strong",{parentName:"p"},"IoCs")," will be shown.")),(0,o.kt)("admonition",{title:"More context",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If one wants to log some other events to bring ",(0,o.kt)("strong",{parentName:"p"},"contextual information")," to the IoC matches, it is possible to do so by configuring ",(0,o.kt)("a",{parentName:"p",href:"./rule_configuration#filtering-rules"},"log filtering"))),(0,o.kt)("h2",{id:"how-does-it-work-"},"How does it work ?"),(0,o.kt)("p",null,"Every ",(0,o.kt)("strong",{parentName:"p"},"Kunai")," event will see some of its fields systematically checked against ",(0,o.kt)("strong",{parentName:"p"},"IoCs"),". Basically, ",(0,o.kt)("strong",{parentName:"p"},"any field")," containing one of the following data types is checked against the ",(0,o.kt)("strong",{parentName:"p"},"IoC")," database loaded in memory:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Kunai data types"),(0,o.kt)("th",{parentName:"tr",align:"center"},"cover IoC type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"path"),(0,o.kt)("td",{parentName:"tr",align:"center"},"absolute path")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"md5, sha1, sha256, sha512"),(0,o.kt)("td",{parentName:"tr",align:"center"},"hash")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"domain / fqdn"),(0,o.kt)("td",{parentName:"tr",align:"center"},"domain / fqdn")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"IP address"),(0,o.kt)("td",{parentName:"tr",align:"center"},"IPv4 / IPv6")))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In order to configure IoCs to be matched with ",(0,o.kt)("strong",{parentName:"p"},"Kunai")," one simply has to create a file with ",(0,o.kt)("strong",{parentName:"p"},"one JSON document per line")," following that format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"uuid": "ioc_uuid", "source":"Some IoC source", "value":"ioc_value"}\n')),(0,o.kt)("p",null,"Having such a minimal format makes the ",(0,o.kt)("strong",{parentName:"p"},"IoC")," creation trivial from almost any source while keeping context."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Assuming the following ",(0,o.kt)("strong",{parentName:"p"},"IoC")," configuration file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"uuid": "81050c82-68a5-4130-a56d-a465c8337066", "source":"Example", "value":"why.kunai.rocks"}\n{"uuid": "dd19ecd1-8237-427a-9b1d-35ff7d17381f", "source":"Example", "value":"kunai.rocks"}\n')),(0,o.kt)("p",null,"One can configure ",(0,o.kt)("strong",{parentName:"p"},"Kunai")," to take this file either via ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration#configuration-file"},"configuration file")," or via ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration#advanced-cli-usage"},"command line flag")),(0,o.kt)("p",null,"Letting ",(0,o.kt)("strong",{parentName:"p"},"Kunai")," (configured with this file) run  ",(0,o.kt)("strong",{parentName:"p"},"does not output any event")," until we actually try to connect to ",(0,o.kt)("inlineCode",{parentName:"p"},"why.kunai.rocks")," domain. When that happens, we should see an event arriving on our output with an additional ",(0,o.kt)("inlineCode",{parentName:"p"},".detection")," section, itself containing information about the ",(0,o.kt)("strong",{parentName:"p"},"IoCs")," matching the event. You might also notice that a ",(0,o.kt)("strong",{parentName:"p"},"severity")," also gets attributed to the event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3",\n    "command_line": "/usr/lib/firefox/firefox",\n    "exe": {\n      "file": "/usr/lib/firefox/firefox"\n    },\n    "query": "why.kunai.rocks",\n    "proto": "udp",\n    "response": "0xrawsec.github.io",\n    "dns_server": {\n      "ip": "10.96.0.1",\n      "port": 53,\n      "public": false,\n      "is_v6": false\n    }\n  },\n  "detection": {\n    "iocs": [\n      "why.kunai.rocks"\n    ],\n    "severity": 10\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 61,\n      "name": "dns_query",\n      "uuid": "9afe70fe-b763-8363-8ecc-02e73f990154",\n      "batch": 91\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2024-02-13T12:00:57.596505416Z"\n  }\n}\n')),(0,o.kt)("admonition",{title:"severity",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Maximal")," severity score is attributed to any event matching IoCs and this is not configurable.")))}m.isMDXComponent=!0}}]);