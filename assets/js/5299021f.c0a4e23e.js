"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[1524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=d(n),h=i,c=m["".concat(l,".").concat(h)]||m[h]||p[h]||o;return n?a.createElement(c,s(s({ref:t},u),{},{components:n})):a.createElement(c,s({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:i,s[1]=r;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={slug:"bpf-door-case-study",title:"BPFDoor case study",authors:["quentin"],tags:["malware","detection-engineering"],date:"2023-11-02T13:37"},s=void 0,r={permalink:"/blog/bpf-door-case-study",source:"@site/blog/2023-11-02-bpf-door/index.md",title:"BPFDoor case study",description:"This blog post is meant to give an insight of how to use Kunai for detection engineering.",date:"2023-11-02T13:37:00.000Z",formattedDate:"November 2, 2023",tags:[{label:"malware",permalink:"/blog/tags/malware"},{label:"detection-engineering",permalink:"/blog/tags/detection-engineering"}],readingTime:14.605,hasTruncateMarker:!0,authors:[{name:"Quentin Jerome",title:"Kunai Maintainer",url:"https://github.com/qjerome",imageURL:"https://github.com/qjerome.png",key:"quentin"}],frontMatter:{slug:"bpf-door-case-study",title:"BPFDoor case study",authors:["quentin"],tags:["malware","detection-engineering"],date:"2023-11-02T13:37"},prevItem:{title:"A cheap SIEM for Linux",permalink:"/blog/cheap-siem-for-linux"},nextItem:{title:"Announcing Kunai",permalink:"/blog/announcing-kunai"}},l={authorsImageUrls:[void 0]},d=[{value:"About the Sample Studied in this Post",id:"about-the-sample-studied-in-this-post",level:2},{value:"Experiment Description",id:"experiment-description",level:2},{value:"The Suspicious Events",id:"the-suspicious-events",level:2},{value:"The Story of a Weird Command Line",id:"the-story-of-a-weird-command-line",level:3},{value:"Not Leaving Traces is Suspicious",id:"not-leaving-traces-is-suspicious",level:3},{value:"Changing its own Task Name",id:"changing-its-own-task-name",level:3},{value:"Attaching BPF Filter on a Raw Socket + Bonus",id:"attaching-bpf-filter-on-a-raw-socket--bonus",level:3},{value:"Going Further, for Even More Detection Possibilities",id:"going-further-for-even-more-detection-possibilities",level:3},{value:"Bonus: Detecting the Mistakes made by BPFDoor Authors",id:"bonus-detecting-the-mistakes-made-by-bpfdoor-authors",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2},{value:"About BPFDoor",id:"about-bpfdoor",level:3}],u={toc:d},m="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(m,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This blog post is meant to give an insight of how to use Kunai for detection engineering."),(0,i.kt)("p",null,"For those who didn't have the opportunity to attend the Kunai workshop at ",(0,i.kt)("a",{parentName:"p",href:"https://hack.lu"},"Hack.lu 2023 edition")," this is a way to catch up on a big part of what we have been doing during this session. For those who actually attended the workshop, you can take a read anyway because the post goes even more into the details, as we were limited in time."),(0,i.kt)("h2",{id:"about-the-sample-studied-in-this-post"},"About the Sample Studied in this Post"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"BPFDoor")," has been chosen for this case study as it has been described, when it got discovered, as something not trivial to detect. The difficulties to detect mostly being depicted as the fact that it uses BPF based packet filtering to implement a nice backdoor. I will not deep dive in the description of what this malware is doing and how it works. If you want to know more about those topics, please find a non-exhaustive list of related posts and documents about BPFDoor malware in ",(0,i.kt)("a",{parentName:"p",href:"#about-bpfdoor"},"references section"),"."),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"Filename")),(0,i.kt)("td",null,"bpfdoor.mwr")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"md5")),(0,i.kt)("td",null,"0017f7b913ce66e4d80f7e78cf830a2b")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"sha1")),(0,i.kt)("td",null,"f1bf775746a5c882b9ec003617b2a70cf5a5b029")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"sha256")),(0,i.kt)("td",null,"fa0defdabd9fd43fe2ef1ec33574ea1af1290bd3d763fdb2bed443f2bd996d73")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("b",null,"sha512")),(0,i.kt)("td",null,"ff5dd28ba3f5ce1f85f85fa9b65f9f30fbd300f2ca238cb2713da7077b7a0a8ff094cff4d7de9381726925abdd9ea065fa75ccd02fa5a816b71a6f91479363c1"))),(0,i.kt)("h2",{id:"experiment-description"},"Experiment Description"),(0,i.kt)("p",null,"You can find here after the methodology followed in order to make our experiment. This methodology is not specific to this sample, so it can be used to study any malware you want with ",(0,i.kt)("strong",{parentName:"p"},"Kunai"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("strong",{parentName:"li"},"Kunai")," in such a way you capture the output (redirect output to file or configure output file)"),(0,i.kt)("li",{parentName:"ol"},"Run malware"),(0,i.kt)("li",{parentName:"ol"},"Interact with the malware if needed/possible")),(0,i.kt)("p",null,"For the sake of simplicity, I\xa0have prepared everything for you. You can find the Kunai's output for this sample in the following file ",(0,i.kt)("a",{target:"_blank",href:n(5165).Z},"bpfdoor.jsonl"),". To improve the readability of that file, it went through a step of filtering so that it contains only the events related to the sample."),(0,i.kt)("admonition",{title:"re-doing the experiments yourself",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is possible, but you have to known that the events in the file got generated with the latest git (under development) version of ",(0,i.kt)("strong",{parentName:"p"},"Kunai"),". Therefore, some events will be missing if you take the latest release (i.e. ",(0,i.kt)("strong",{parentName:"p"},"0.1.0"),").")),(0,i.kt)("admonition",{title:"running BPFDoor",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"run the sample as priviledged user otherwise it won't work"),(0,i.kt)("li",{parentName:"ul"},"the malware checks if an instance already running (you can know that by inspecting the source code or ",(0,i.kt)("strong",{parentName:"li"},"stracing")," the process)"))),(0,i.kt)("admonition",{title:"running malware must be done with care",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"always do it in a dedicated machine (i.e. VM), preferably ",(0,i.kt)("strong",{parentName:"li"},"isolated")," from the Internet"),(0,i.kt)("li",{parentName:"ul"},"Linux container isolation is not enough (the kernel is shared between host and containers)"),(0,i.kt)("li",{parentName:"ul"},"it is always better to know a bit what to expect from the sample (i.e. make sure it does not exploit your hypervisor)"))),(0,i.kt)("h2",{id:"the-suspicious-events"},"The Suspicious Events"),(0,i.kt)("p",null,"The aim of this analysis is not necessarily to understand exactly what the malware is doing, as it can be achieved by other means (sandboxing, strace ...). The goal is to identify actionable events, on which we can build efficient detection rules. "),(0,i.kt)("admonition",{title:"suspicious events",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The notion of a suspicious event is sometimes universal, sometimes subjective and sometimes depends on the context. So you might find more/less events suspicious than me while you look at the logs. Anyway any detection rule built on top of those events should be tested before being put into production.")),(0,i.kt)("h3",{id:"the-story-of-a-weird-command-line"},"The Story of a Weird Command Line"),(0,i.kt)("p",null,"The first event which should really catch our attention is the following. We see that a binary ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp/bpfdoor.mwr"),", which should be qualified as unknown in a real infection, runs a rather suspicious one-liner command line."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/sbin/sshd|/usr/sbin/sshd|/usr/sbin/sshd|/usr/bin/bash|/usr/bin/sudo|/usr/bin/su|/usr/bin/bash|/tmp/bpfdoor.mwr",\n    "parent_exe": "/tmp/bpfdoor.mwr",\n    "command_line": "sh -c /bin/rm -f /dev/shm/kdmtmpflush;/bin/cp ./bpfdoor.mwr /dev/shm/kdmtmpflush && /bin/chmod 755 /dev/shm/kdmtmpflush && /dev/shm/kdmtmpflush --init && /bin/rm -f /dev/shm/kdmtmpflush",\n    "exe": {\n      "file": "/usr/bin/dash",\n      "md5": "1e6b1c887c59a315edb7eb9a315fc84c",\n      "sha1": "803ffdb71aa236aa25009bef97db1b8ad0e3c62b",\n      "sha256": "64e48365207d0c19008ba7d53d75c0de3fcd5a1590e4c40fc69c677663fedc20",\n      "sha512": "0d261d7a8d615d080e20f1e1b294f168107dc2740da1a037d9519215e67e7a72dcc0f56c0006e5fdc04b7dbbd339171e9d2bf15f8e31f295d37aff499e1bc928",\n      "size": 129816\n    }\n  },\n  "info": {\n    ...\n    "event": {\n      "source": "kunai",\n      "id": 1,\n      "name": "execve",\n      "uuid": "8f2fab25-ef70-3898-b52e-da2eaca820cc",\n      "batch": 27\n    },\n    ...\n  }\n}\n')),(0,i.kt)("p",null,"We clearly understand from this command line that the sample is copying itself to ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/shm")," with a new name, changes its permissions, executes the new file and deletes it straight after. What else do we need to trigger the alarm ? This is already a good start, so lets extract some ideas out of this and continue our journey."),(0,i.kt)("admonition",{title:"/dev/shm",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This is usually a ",(0,i.kt)("strong",{parentName:"p"},"tmpfs")," (in memory) filesystem so files running from that place will not persist on disk. Copying itself there, before executing and deleting itself could be seen as an attempt to evade malware cleaning run by an AV or any protection software.")),(0,i.kt)("admonition",{title:"detection takeaways",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"a command line with ",(0,i.kt)("inlineCode",{parentName:"li"},"cp"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"chmod"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"exec"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"rm")," happening in this order might be considered as a suspicious one-liner",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"increase severity if ",(0,i.kt)("inlineCode",{parentName:"li"},"ancestors")," contains a binary of a service exposed on the Internet"),(0,i.kt)("li",{parentName:"ul"},"increase severity if ",(0,i.kt)("inlineCode",{parentName:"li"},"command_line")," contains ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/shm")))))),(0,i.kt)("h3",{id:"not-leaving-traces-is-suspicious"},"Not Leaving Traces is Suspicious"),(0,i.kt)("p",null,"The next event looking suspicious is the following and is strongly linked to the previous one. As it is the execution of the malware after it copied itself into ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/shm"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/sbin/sshd|/usr/sbin/sshd|/usr/sbin/sshd|/usr/bin/bash|/usr/bin/sudo|/usr/bin/su|/usr/bin/bash|/tmp/bpfdoor.mwr|/usr/bin/dash",\n    "parent_exe": "/usr/bin/dash",\n    "command_line": "/dev/shm/kdmtmpflush --init",\n    "exe": {\n      "file": "/dev/shm/kdmtmpflush",\n      "md5": "",\n      "sha1": "",\n      "sha256": "",\n      "sha512": "",\n      "size": 0,\n      "error": "file not found"\n    }\n  },\n  "info": {\n    ...\n    "event": {\n      "source": "kunai",\n      "id": 1,\n      "name": "execve",\n      "uuid": "38789315-0485-9af9-f511-27fe97b21a1c",\n      "batch": 43\n    },\n    ...\n  }\n}\n')),(0,i.kt)("p",null,"What makes that event suspicious is that ",(0,i.kt)("strong",{parentName:"p"},"Kunai"),", did not managed to compute hashing information out of the executable path. The reason for this is simple, and the event is self explanatory, the ",(0,i.kt)("strong",{parentName:"p"},"file is not found"),". As we have seen previously the malware deletes the file straight after the execution. This type of things (quickly modifying a file) after its execution races ",(0,i.kt)("strong",{parentName:"p"},"Kunai"),", and this is sad. I will not go into the technical details but this is not really something we can change. However, the important thing is that when such thing happens ",(0,i.kt)("strong",{parentName:"p"},"Kunai")," tells it to you. So even if some information is missing from that event, we can still use it as a reliable source of suspiciousness."),(0,i.kt)("admonition",{title:"detection takeaways",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"a binary for which we could not compute hashing information is suspicious, it means the file got modified/deleted straight after its execution"),(0,i.kt)("li",{parentName:"ul"},"a binary running from ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/shm")," with priviledged user"),(0,i.kt)("li",{parentName:"ul"},"a known bad hash (not directly applicable to this event but to any event containing hashing information)"))),(0,i.kt)("h3",{id:"changing-its-own-task-name"},"Changing its own Task Name"),(0,i.kt)("p",null,"The next suspicious candidate is the malware changing its task name. It does it using the ",(0,i.kt)("inlineCode",{parentName:"p"},"prctl")," syscall, passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"PR_SET_NAME")," option as a first argument."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "exe": "/dev/shm/kdmtmpflush",\n    "command_line": "/dev/shm/kdmtmpflush --init",\n    "option": "PR_SET_NAME",\n    "arg2": "0x605368",\n    "arg3": "0x0",\n    "arg4": "0x6e75722d646c6168",\n    "arg5": "0x3",\n    "success": true\n  },\n  "info": {\n    ...\n    "event": {\n      "source": "kunai",\n      "id": 7,\n      "name": "prctl",\n      "uuid": "c8be60da-fa83-4a6c-aa8a-cbf1d38f8520",\n      "batch": 45\n    },\n    "task": {\n      "name": "hald-runner", // this is the new task name\n      "pid": 1747,\n      "tgid": 1747,\n      "guuid": "7d64f958-4500-0000-82bb-77d6d3060000",\n      "uid": 0,\n      "gid": 0,\n      "namespaces": {\n        "mnt": 4026531840\n      },\n      "flags": "0x00400000"\n    },\n    ...\n  }\n}\n')),(0,i.kt)("p",null,"Changing task name cannot be considered as suspicious per se, you would probably see a lot of processes cloning/forking, changing their task names. So we have to use a bit more the data of this event to identify whether it is suspicious or not. We can observe two suspicious things though:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"our good old ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/shm")," friend being in executable path"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hald-runner")," being used as a new task name, this is clearly an attempt to mimic a legit process/service task name in order to fool people looking at running processes")),(0,i.kt)("admonition",{title:"detection takeaways",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"a binary located in ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/shm")," changing its task name should raise an alert"),(0,i.kt)("li",{parentName:"ul"},"a task name being changed to mimic a legit binary"),(0,i.kt)("li",{parentName:"ul"},"it might be interesting to tag unknown (non whitelisted) binaries doing this and understand why they do so"))),(0,i.kt)("h3",{id:"attaching-bpf-filter-on-a-raw-socket--bonus"},"Attaching BPF Filter on a Raw Socket + Bonus"),(0,i.kt)("p",null,"Finally, the one we all expected and which gave its name to that malware ! We see that the executable is attaching a BPF\xa0filter to a raw socket ",(0,i.kt)("inlineCode",{parentName:"p"},"SOCK_RAW"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "command_line": "hald-runner",\n    "exe": "/dev/shm/kdmtmpflush",\n    "socket": {\n      "domain": "AF_PACKET",\n      "type": "SOCK_RAW"\n    },\n    "filter": {\n      "md5": "19c9f9f52a7d7bf1f9c26dc57034873b",\n      "sha1": "c97c5ad700f7426432dbe4d6478f362714e835f0",\n      "sha256": "1a23f76646d1741946afd2d6d3ce3d0deae14198b544b09322a540c345953988",\n      "sha512": "af9fce79e05316999ae3ef82ea7a04ce299c611cb46e27154e455b9f9bea42631a5293dd42cb0d332d5e10b8ed924930321cb3433b7989e6fe9042d97338d477",\n      "len": 30,\n      "size": 240\n    },\n    "attached": true\n  },\n  "info": {\n    ...\n    "event": {\n      "source": "kunai",\n      "id": 22,\n      "name": "bpf_socket_filter",\n      "uuid": "839aa10e-243a-3238-b221-9f7d0c1cac95",\n      "batch": 51\n    },\n    "task": {\n      "name": "hald-runner",\n      "pid": 1748,\n      "tgid": 1748,\n      "guuid": "ff313459-4500-0000-82bb-77d6d4060000",\n      "uid": 0,\n      "gid": 0,\n      "namespaces": {\n        "mnt": 4026531840\n      },\n      "flags": "0x00400140"\n    },\n    "parent_task": {\n      "name": "systemd", // this is init on this system\n      "pid": 1,\n      "tgid": 1,\n      "guuid": "4b0dc405-0000-0000-82bb-77d601000000",\n      "uid": 0,\n      "gid": 0,\n      "namespaces": {\n        "mnt": 4026531840\n      },\n      "flags": "0x00400100"\n    },\n    "utc_time": "2023-09-05T09:33:07.600987330Z"\n  }\n}\n')),(0,i.kt)("p",null,"Attaching a BPF\xa0filter to a raw socket is definitely something suspicious ! But another thing interesting can be observed in this event. Our malware has suddently ",(0,i.kt)("inlineCode",{parentName:"p"},"systemd")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"parent_task"),", while previously it was itself ",(0,i.kt)("inlineCode",{parentName:"p"},"hald-runner")," (you have to look at the logs to verify that). So what the hell, happened ?"),(0,i.kt)("admonition",{title:"zombie process",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A zombie process, is a process still running while it's parent is dead. When that happens the Linux Kernel makes the ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," process become the parent of the zombie process. Becoming a zombie is not something usually done on purpose as it is often the symptom of a bug. But if you are a malware you might use that trick to make people think your parent process is ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," binary (systemd in my case) and that you are a legitimate service.")),(0,i.kt)("p",null,"So this zombie process information is definitely something we can use to detect something strange is going on. In the log file, this event is the only one you will see with ",(0,i.kt)("inlineCode",{parentName:"p"},"systemd")," as parent. This is because after that event the malware listen up for packets arriving on the raw socket. But don't worry, I\xa0can guarantee that any subsequent activity of this malware would have exactly the same anomaly and would give you even more opportunities to catch it."),(0,i.kt)("admonition",{title:"detection takeaways",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"a binary attaching a BPF\xa0filter to a ",(0,i.kt)("inlineCode",{parentName:"li"},"SOCK_RAW")),(0,i.kt)("li",{parentName:"ul"},"a binary attaching a BPF\xa0filter to a socket",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"increase severity if running in ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/shm")),(0,i.kt)("li",{parentName:"ul"},"increase severity if task name changed",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"increase severity if mimics a legit service"))))),(0,i.kt)("li",{parentName:"ul"},"any zombie process (parent_task became init pid=1)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"increase severity if running in ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/shm")," or unknown service binary"))))),(0,i.kt)("h3",{id:"going-further-for-even-more-detection-possibilities"},"Going Further, for Even More Detection Possibilities"),(0,i.kt)("p",null,"If you looked at the logs, you have probably noticed that the ",(0,i.kt)("a",{parentName:"p",href:"#attaching-bpf-filter-on-a-raw-socket--bonus"},"previous event")," we described is one of the last interesting things we see. Afer, everything looks to cleanup events. This is not all with this malware at all, as you may have also observed that the task with pid 1748 didn't exit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"root@ebpf-ubuntu-20:/tmp# ps aux | grep 1748\nroot        1748  0.0  0.0   2496    84 ?        Ss   Sep05   0:00 hald-runner\n")),(0,i.kt)("p",null,"This is the task listening on the raw socket and waiting for commands. So the malware is still running and all we have analyzed so far are only the events generated when the malware is spawned on a system, we did not interact with the malware whatsoever. This is because I\xa0did not take the time to reverse-engineer the sample to know the password it expects when it receives packets on its raw socket. "),(0,i.kt)("admonition",{title:"homework",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"reverse the sample, find the key and send expected packets to the sample"),(0,i.kt)("li",{parentName:"ul"},"compile the malware from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gwillgues/BPFDoor/blob/main/bpfdoor.c"},"sources")," (not guaranteed of being the exact same one) with a key you know and send packets to the sample"))),(0,i.kt)("p",null,"What we can see from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gwillgues/BPFDoor/blob/main/bpfdoor.c"},"BPFDoor sources"),", is that we can expect even more detection possibilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the sample runs specific ",(0,i.kt)("inlineCode",{parentName:"li"},"iptables")," commands"),(0,i.kt)("li",{parentName:"ul"},"it again changes task name, to ",(0,i.kt)("inlineCode",{parentName:"li"},"/usr/libexec/postfix/master")),(0,i.kt)("li",{parentName:"ul"},"it can execute abitrary commands and very likely suspicious ones, which should not be ran from anything else than an interactive shell (",(0,i.kt)("inlineCode",{parentName:"li"},"whoami"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"cat")," ...). Programmers usually prefer using APIs rather than parsing shell outputs."),(0,i.kt)("li",{parentName:"ul"},"we would see a binary located in ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/shm")," communicating over the network")),(0,i.kt)("p",null,"Another blind spot we have in this analysis is the original infection vector. I may have missed it but I\xa0didn't find this information online either. Anyway, what is important here is that knowing the infection vector would have been very likely an additional way to catch this sample. This is purely fictional but if we assume it went through a web server compromise, we would have seen at some point a ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/shm/kdmtmpflush")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/events/execve"},"execve event")," with a web server binary being in it's ",(0,i.kt)("inlineCode",{parentName:"p"},"ancestors")," field."),(0,i.kt)("admonition",{title:"detection takeaways",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"something executed from ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/shm")," running commands",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"increase severity if running commands such as ",(0,i.kt)("inlineCode",{parentName:"li"},"iptables"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"whoami"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"cat")))),(0,i.kt)("li",{parentName:"ul"},"a binary using a shell to execute commands (might need some whitelisting)"),(0,i.kt)("li",{parentName:"ul"},"something running in ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/shm")," communicating over the Internet"),(0,i.kt)("li",{parentName:"ul"},"any service that has an exposed port on the Internet executing an unexpected binary"))),(0,i.kt)("h3",{id:"bonus-detecting-the-mistakes-made-by-bpfdoor-authors"},"Bonus: Detecting the Mistakes made by BPFDoor Authors"),(0,i.kt)("p",null,"Something I\xa0observed while running several times this BPFDoor sample is that it sometimes renames its task with something containing ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," (the Linux path separator). Such an example can be observed below. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "exe": "/dev/shm/kdmtmpflush",\n    "command_line": "/dev/shm/kdmtmpflush --init",\n    "option": "PR_SET_NAME",\n    "arg2": "0x605368",\n    "arg3": "0x0",\n    "arg4": "0x8",\n    "arg5": "0x3",\n    "success": true\n  },\n  "info": {\n    ...\n    "event": {\n        ...\n        "id": 7,\n        "name": "prctl",\n        ...\n    },\n    ...\n    "task": {\n      // new task name\n      "name": "/usr/sbin/conso",\n      ...\n    },\n    ...\n}\n')),(0,i.kt)("p",null,"This is even more obvious when looking at the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gwillgues/BPFDoor/blob/main/bpfdoor.c"},"malware source code"),", the name of the process is changed by randomly picking an entry in the following array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'char *self[] = {\n        "/sbin/udevd -d",\n        "/sbin/mingetty /dev/tty7",\n        "/usr/sbin/console-kit-daemon --no-daemon",\n        "hald-addon-acpi: listening on acpi kernel interface /proc/acpi/event",\n        "dbus-daemon --system",\n        "hald-runner",\n        "pickup -l -t fifo -u",\n        "avahi-daemon: chroot helper",\n        "/sbin/auditd -n",\n        "/usr/lib/systemd/systemd-journald"\n};\n')),(0,i.kt)("p",null,"This caught my attention because this is not something you see very often in Linux and luckily for us there is a good explaination for that. The Linux Kernel, when performing execve it calls ",(0,i.kt)("a",{parentName:"p",href:"https://elixir.bootlin.com/linux/latest/C/ident/begin_new_exec"},"begin_new_exec"),", itself calling ",(0,i.kt)("a",{parentName:"p",href:"https://elixir.bootlin.com/linux/latest/source/fs/exec.c#L1366"},"__set_task_comm(me, kbasename(bprm->filename), true)"),". What it does is simple, ",(0,i.kt)("inlineCode",{parentName:"p"},"__set_task_comm")," assigns the new task name with ",(0,i.kt)("inlineCode",{parentName:"p"},"kbasename(some_filename)"),". And guess what, ",(0,i.kt)("a",{parentName:"p",href:"https://elixir.bootlin.com/linux/latest/C/ident/kbasename"},"kbasename")," is actually taking the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basename"},"basename")," out of a path."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"task name is always ",(0,i.kt)("strong",{parentName:"p"},"16 bytes")," so any longer string is truncated. This is why in our event we see task name ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/sbin/conso"),"instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/sbin/console-kit-daemon --no-daemon"))),(0,i.kt)("p",null,"All this to say that it should not be considered as normal to have a task name containing ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"PR_SET_NAME")," option of the prctl syscall is meant to change the task name. By convention (this is not enforced) task names does not contain any ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),". So it is not really a mis-use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"prctl")," syscall the malware authors did but they rather forgot/didn't know that Linux task name are not supposed to contain ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),". This anomaly could be used to detect such a bad programming practice, that I hope is seen only in malware !"),(0,i.kt)("admonition",{title:"detection takeaways",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"a task name containing ",(0,i.kt)("inlineCode",{parentName:"li"},"/")," is abnormal (programming mistake)"),(0,i.kt)("li",{parentName:"ul"},"a task name not contained in the ",(0,i.kt)("inlineCode",{parentName:"li"},"exe")," filename is suspicious for unknown binary. Some whitelisting would be needed as threaded programs often rename their threads with custom names."))),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Assuming we have Kunai running on our machine, would it be complicated to detect this kind of sample knowing what we know now ? I would say no as there are enough suspicious things we can rely on and which should not trigger that many false positives."),(0,i.kt)("p",null,"This is always easy to say that we can detect things a posteriori. In order to have a chance to catch such sample in the wild, relevant generic rules and eventually heuristics need to be built. This is why it is very important to make as much as possible this kind of exercise as it would help us filling the gaps in detection rules. Sorry for all the guys who think they are protected because they bought an expensive commercial solution but you'd have to do this kind of work too, especially if you are a valuable target to attackers. I will not argue for hours about this but the main argument is that commercial solution are not bad per se, but they have to be generic enough to satisfy the more use cases as possible. Satisfying use cases is usually synonym of not having too many false positives, at the cost of discarding some true positives under some very specific/targetted environment. So if you have a commercial solution, do this job and enrich your detection rules, it won't be lost and you will probably make one of your engineers happy to use his brain."),(0,i.kt)("p",null,"In the reports, everyone tends to agree on one thing: this kind of malware is difficult to detect. Is it a question of stealthiness of the malware ? I\xa0don't think so, because we have seen it does a lot of very suspicious things, and we can expect many others (we did not interact with the shell). I rather think the issue is the lack of visibility most of the people have, at least those who cannot afford an EDR. So according to this absolutely impartial argument, it gives you a very good reason to use ",(0,i.kt)("strong",{parentName:"p"},"Kunai"),"."),(0,i.kt)("p",null,"Happy Threat Detection and Hunting"),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("h3",{id:"about-bpfdoor"},"About BPFDoor"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gwillgues/BPFDoor/blob/main/bpfdoor.c"},"Source code (probably not exactly the same one)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.countercraftsec.com/blog/a-step-by-step-bpfdoor-compromise/"},"https://www.countercraftsec.com/blog/a-step-by-step-bpfdoor-compromise/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://exatrack.com/public/Tricephalic_Hellkeeper.pdf"},"https://exatrack.com/public/Tricephalic_Hellkeeper.pdf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.trendmicro.com/en_us/research/23/g/detecting-bpfdoor-backdoor-variants-abusing-bpf-filters.html"},"https://www.trendmicro.com/en_us/research/23/g/detecting-bpfdoor-backdoor-variants-abusing-bpf-filters.html"))))}p.isMDXComponent=!0},5165:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/bpfdoor-e85e848ecc643661710a0f843ab98b5e.jsonl"}}]);