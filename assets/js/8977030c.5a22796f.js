"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[3974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[f]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:500},i="File Scan",c={unversionedId:"events/file_scan",id:"events/file_scan",title:"File Scan",description:"Such events are generated when a scan-files action is requested. This event is a bit particular compared to other because it is triggered from another event. You can find the **cross-reference** to the **triggering event** in .data.sourceevent field.",source:"@site/docs/events/file_scan.md",sourceDirName:"events",slug:"/events/file_scan",permalink:"/docs/next/events/file_scan",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/docs/events/file_scan.md",tags:[],version:"current",sidebarPosition:500,frontMatter:{sidebar_position:500},sidebar:"tutorialSidebar",previous:{title:"File Create",permalink:"/docs/next/events/file_create"},next:{title:"Error",permalink:"/docs/next/events/error"}},s={},l=[],p={toc:l},f="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"file-scan"},"File Scan"),(0,a.kt)("p",null,"Such events are generated when a ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/advanced/rule_configuration#example-scan-files"},(0,a.kt)("inlineCode",{parentName:"a"},"scan-files"))," action is requested. This event is a bit particular compared to other because it is triggered from another event. You can find the ",(0,a.kt)("strong",{parentName:"p"},"cross-reference")," to the ",(0,a.kt)("strong",{parentName:"p"},"triggering event")," in ",(0,a.kt)("inlineCode",{parentName:"p"},".data.source_event")," field."),(0,a.kt)("p",null,"This event follows the same ",(0,a.kt)("strong",{parentName:"p"},"event processing path")," as any other ",(0,a.kt)("strong",{parentName:"p"},"Kunai event"),", meaning that they can match any ",(0,a.kt)("a",{parentName:"p",href:"../advanced/rule_configuration"},(0,a.kt)("strong",{parentName:"a"},"filtering/detection rule")),". This offers a great way to register some ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/advanced/rule_configuration#taking-actions-on-events"},(0,a.kt)("strong",{parentName:"a"},"actions"))," to be taken when a file triggers a ",(0,a.kt)("strong",{parentName:"p"},"Yara")," signature."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "path": "/tmp/hello_kunai.txt",\n    "meta": {\n      "md5": "9047c9883f04d6ec7ce153b395582c7f",\n      "sha1": "d41b8cc90a37973847e29b7fb5fa502c926f5aaf",\n      "sha256": "89e6cbb99f61440be7ad785203a0e91ecf523568254be6330b533700d917eb45",\n      "sha512": "41f6905b8a6e7530968d0b119b0f1011b87f92f06281ce89a6fe581a86d8ba66b4d51958d86727733ef2330ee3e4ddd95cc3fd832a7602aa29e48d1646013ef9",\n      "size": 12,\n      "error": null\n    },\n    "signatures": [\n      "HelloKunai"\n    ],\n    "positives": 1,\n    "source_event": "e3ba27c2-c85c-4a79-2219-4ecb146efc6e",\n    "scan_error": null\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 500,\n      "name": "file_scan",\n      "uuid": "df226552-3f04-4139-9e7e-7607bb5b29af",\n      "batch": 877\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2024-10-29T12:48:02.476850786Z"\n  }\n}\n')))}u.isMDXComponent=!0}}]);