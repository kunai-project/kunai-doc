"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[7022],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return t?a.createElement(m,r(r({ref:n},p),{},{components:t})):a.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3244:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(7462),i=(t(7294),t(3905));const o={sidebar_position:0},r="Event Layout and Info Section",s={unversionedId:"events/generalities",id:"version-0.4.0/events/generalities",title:"Event Layout and Info Section",description:"Every kunai event gets a set of common fields shared between all the events. These fields give various information which might be used for advanced purposes such as event identification, grouping or correlation.",source:"@site/versioned_docs/version-0.4.0/events/generalities.md",sourceDirName:"events",slug:"/events/generalities",permalink:"/docs/events/generalities",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/versioned_docs/version-0.4.0/events/generalities.md",tags:[],version:"0.4.0",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Explore Kunai Events",permalink:"/docs/events/"},next:{title:"Execve",permalink:"/docs/events/execve"}},c={},l=[],p={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"event-layout-and-info-section"},"Event Layout and Info Section"),(0,i.kt)("p",null,"Every ",(0,i.kt)("strong",{parentName:"p"},"kunai")," event gets a set of common fields shared between all the events. These fields give various information which might be used for advanced purposes such as event identification, grouping or correlation."),(0,i.kt)("p",null,"For the general event layout, every event will have a ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," section and an ",(0,i.kt)("inlineCode",{parentName:"p"},"info")," section. The ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),"\xa0section might be different for every event family while the ",(0,i.kt)("inlineCode",{parentName:"p"},"info")," section will always be common (contains the same fields) across all the event types. This page only explains the ",(0,i.kt)("inlineCode",{parentName:"p"},"info")," section as ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," sections will be addressed separately for each event documented."),(0,i.kt)("admonition",{title:"Process and Threads in Linux",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In the Linux kernel, there is no notion of ",(0,i.kt)("strong",{parentName:"p"},"process")," or ",(0,i.kt)("strong",{parentName:"p"},"thread"),", everything is a ",(0,i.kt)("strong",{parentName:"p"},"task"),". So in the rest of the documentation we will consider that a ",(0,i.kt)("strong",{parentName:"p"},"process")," is made of ",(0,i.kt)("strong",{parentName:"p"},"one")," or ",(0,i.kt)("strong",{parentName:"p"},"several")," ",(0,i.kt)("strong",{parentName:"p"},"tasks")," belonging to the same ",(0,i.kt)("strong",{parentName:"p"},"thread-group"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": "...",\n  "info": {\n    // Host related information\n    "host": {\n      // Unique host uuid\n      "uuid": "c030b40d-0eab-417b-b33a-22d952357984",\n      // Hostname of the host running kunai\n      "name": "hal",\n      // Container information if any, null otherwise\n      "container": {\n        // Name of the container\n        "name": "ubuntu-kunai-test",\n        // Type of container\n        "type": "docker"\n      }\n    },\n    // Event related information\n    "event": {\n      // A string which can be used by external tools to identify kunai\'s logs\n      "source": "kunai",\n      // Event type identifier\n      "id": 1,\n      // Event type name\n      "name": "execve",\n      // Unique identifier for an event\n      "uuid": "87f5cb64-11ca-fd34-26af-b47f84132543",\n      // Not relevant, here for diagnosis purposes\n      "batch": 131\n    },\n    // Information about the task generating this event\n    "task": {\n      // Task name\n      "name": "ls",\n      // Identifier of the task (process or thread)\n      "pid": 1981502,\n      // Thread Group ID of the task (same for all threads of a process)\n      // When pid == tgid we are in the main thread.\n      "tgid": 1981502,\n      // A uuid common to all the events generated by the same\n      // task group/process (i.e. all threads). You can search by\n      // this value in order to see the whole activity of a process\n      "guuid": "cd5415c4-7750-0000-7c85-4ef53e3c1e00",\n      // Effective uid of the task\n      "uid": 1000,\n      // Effective gid of the task\n      "gid": 1000,\n      // Information about Linux namespaces\n      "namespaces": {\n        // mnt namespace id\n        "mnt": 4026531841\n      },\n      // task_struct flags https://elixir.bootlin.com/linux/v6.6.5/source/include/linux/sched.h#L767\n      // combination of process flags https://elixir.bootlin.com/linux/v6.6.5/source/include/linux/sched.h#L1726\n      "flags": "0x400000",\n      // Indicates whether the task is in a zombie state\n      "zombie": true\n    },\n    // Information about the parent task. This section\n    // contains the same kind of information as the task section\n    "parent_task": {\n      "name": "3",\n      "pid": 1981500,\n      "tgid": 1981500,\n      "guuid": "a679f5c3-7750-0000-7c85-4ef53c3c1e00",\n      "uid": 1000,\n      "gid": 1000,\n      "namespaces": {\n        "mnt": 4026531841\n      },\n      "flags": "0x400000",\n      "zombie": false\n    },\n    // UTC timestamp of the event\n    "utc_time": "2024-11-19T09:55:53.138247256Z"\n  }\n}\n')),(0,i.kt)("admonition",{title:"container type is not identified properly",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"If you generated some activity within a container and the container type is not\ncorrect or empty please explain precisely your setup and we will fix this. Container identification is based on several string matching so every specific container implementation needs to be hardcoded. Even if the container type is not correct, all the rest of the event is correct and relative to your container.")))}u.isMDXComponent=!0}}]);