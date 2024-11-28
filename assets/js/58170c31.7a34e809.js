"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[6272],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=s(t),u=o,b=l["".concat(d,".").concat(u)]||l[u]||f[u]||a;return t?r.createElement(b,c(c({ref:n},p),{},{components:t})):r.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=u;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[l]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9477:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:21},c="Bpf Prog Load",i={unversionedId:"events/bpf_prog_load",id:"version-0.3.0/events/bpf_prog_load",title:"Bpf Prog Load",description:"This event is generated every time a BPF\xa0program is loaded into the kernel.",source:"@site/versioned_docs/version-0.3.0/events/bpf_prog_load.md",sourceDirName:"events",slug:"/events/bpf_prog_load",permalink:"/docs/0.3.0/events/bpf_prog_load",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/versioned_docs/version-0.3.0/events/bpf_prog_load.md",tags:[],version:"0.3.0",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"Init Module",permalink:"/docs/0.3.0/events/init_module"},next:{title:"Bpf Socket Filter Attached",permalink:"/docs/0.3.0/events/bpf_socket_filter"}},d={},s=[],p={toc:s},l="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(l,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bpf-prog-load"},"Bpf Prog Load"),(0,o.kt)("p",null,"This ",(0,o.kt)("strong",{parentName:"p"},"event")," is generated every time a BPF\xa0program is loaded into the kernel."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Some fields might set to ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", this is when the information is not available for the current ",(0,o.kt)("strong",{parentName:"p"},"kernel"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/containerd|/usr/bin/containerd-shim-runc-v2|/usr/bin/containerd-shim-runc-v2",\n    "command_line": "runc --root /var/run/docker/runtime-runc/moby --log /run/containerd/io.containerd.runtime.v2.task/moby/b4e6e9a21224d48cd456e7937ae346fd307c32c33cc1ead9e50c20f84dc77684/log.json --log-format json --systemd-cgroup create --bundle /run/containerd/io.containerd.runtime.v2.task/moby/b4e6e9a21224d48cd456e7937ae346fd307c32c33cc1ead9e50c20f84dc77684 --pid-file /run/containerd/io.containerd.runtime.v2.task/moby/b4e6e9a21224d48cd456e7937ae346fd307c32c33cc1ead9e50c20f84dc77684/init.pid --console-socket /tmp/pty2110970",\n    "exe": {\n      "path": "/usr/bin/runc"\n    },\n    "id": 5470,\n    "prog_type": {\n      "id": 15,\n      "name": "cgroup_device"\n    },\n    "tag": "b8cb7c6e6d53ac49",\n    "attached_func": "",\n    "name": "",\n    "ksym": "bpf_prog_b8cb7c6e6d53ac49",\n    "bpf_prog": {\n      "md5": "92b637d4d2b8a1b61e69ccc7e31e6f66",\n      "sha1": "b8cb7c6e6d53ac494c2d4520cf2b4d6499ebbd36",\n      "sha256": "c4c25d38300c43ef40735106f2af299bae5f43aca9063e7ad5210ef81e127c41",\n      "sha512": "701347998c7457152217f7fe622c66af70b76c2f5df36b92ac9815d6389475d12f6c6d88bbd1420a6b144442aad3bd946d968fc52988c1c57e4ec5629d4ac6d7",\n      "size": 512\n    },\n    "verified_insns": 223,\n    "loaded": true\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 21,\n      "name": "bpf_prog_load",\n      "uuid": "9325e829-8aad-d3fc-3cfb-6121e06171fd",\n      "batch": 605\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2024-10-29T12:47:58.822412612Z"\n  }\n}\n')))}f.isMDXComponent=!0}}]);