"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[6494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1e3},a="Compatibility",l={unversionedId:"compatibility",id:"compatibility",title:"Compatibility",description:"Kunai has been built to be compatible with all the Linux LTS kernels(from 5.4 to 6.1 at the time of writing). Compatibility is tested in our CI/CD\xa0pipeline at every modification to guarantee stability.",source:"@site/docs/compatibility.md",sourceDirName:".",slug:"/compatibility",permalink:"/docs/next/compatibility",draft:!1,tags:[],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"File rename",permalink:"/docs/next/events/file_rename"}},s={},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null,"Kunai has been built to be compatible with all the ",(0,i.kt)("strong",{parentName:"p"},"Linux LTS")," kernels(from ",(0,i.kt)("strong",{parentName:"p"},"5.4")," to ",(0,i.kt)("strong",{parentName:"p"},"6.1")," at the time of writing). Compatibility is tested in our ",(0,i.kt)("strong",{parentName:"p"},"CI/CD"),"\xa0pipeline at every modification to guarantee stability. "),(0,i.kt)("p",null,"Even with this rigorous testing it is possible that the program crashes before it can even start monitoring. If that happens to you ",(0,i.kt)("strong",{parentName:"p"},"do not panic"),", it does not mean the tool is bad, it just means your kernel is not supported yet, for a reason or another. Having a single binary fitting to several kernels is great for deployment however this has a cost:\xa0the programs needs to be aware of some of the changes made between the kernel versions."),(0,i.kt)("admonition",{title:"multi kernel support",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are interested into getting more knowledge about how kunai makes to supports several kernels at once, you should take a read to the ",(0,i.kt)("a",{parentName:"p",href:"https://nakryiko.com/posts/bpf-core-reference-guide/"},"BPF\xa0CO-RE\xa0reference"))),(0,i.kt)("p",null,"In order to get your kernel version, run the following command ",(0,i.kt)("inlineCode",{parentName:"p"},"uname -r"),", then you can check the following table."),(0,i.kt)("html",null,(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"OS"),(0,i.kt)("th",null,"Kernels")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Ubuntu-20.04"),(0,i.kt)("td",null,"5.4")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Ubuntu-22.04"),(0,i.kt)("td",null,"5.15")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Archlinux"),(0,i.kt)("td",null,"5.18 to 6.1")))),(0,i.kt)("admonition",{title:"My kernel is not in the table !",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If your kernel version:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"is between the minimum and maximum kernel version, there are chances it will work without issue"),(0,i.kt)("li",{parentName:"ul"},"is higher than the maximum version supported, cross your fingers, it might work"),(0,i.kt)("li",{parentName:"ul"},"is lower than the minimum version, it is likely it will fail at running but try anyway you have nothing to lose")),(0,i.kt)("p",{parentName:"admonition"},"Please let us know if you tested kunai with success on an OS/kernel not listed above.")),(0,i.kt)("admonition",{title:"I tested kunai with success on an OS/kernel not listed above",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Let us know so that we can update the table")))}m.isMDXComponent=!0}}]);