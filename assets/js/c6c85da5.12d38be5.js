"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[1033],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"Configuration with Rules",sidebar_position:1},o=void 0,l={unversionedId:"advanced/rule_configuration",id:"version-0.3.0/advanced/rule_configuration",title:"Configuration with Rules",description:"Using Kunai to monitor every single event happening on a system is nice as it gives a very deep insight of what is going on. However, this approach generates loads of events. While it might be the way to go for some Kunai users, some others might be interested into detecting only very specific events (based on configurable rules) and show only those ones. This is exactly the topic we are going to tackle in this section of the documentation.",source:"@site/versioned_docs/version-0.3.0/advanced/rule_configuration.md",sourceDirName:"advanced",slug:"/advanced/rule_configuration",permalink:"/docs/advanced/rule_configuration",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/versioned_docs/version-0.3.0/advanced/rule_configuration.md",tags:[],version:"0.3.0",sidebarPosition:1,frontMatter:{title:"Configuration with Rules",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Threat Detection Usage",permalink:"/docs/advanced/"},next:{title:"Builtin IoC matching",permalink:"/docs/advanced/ioc_configuration"}},s={},p=[{value:"Detection Rules",id:"detection-rules",level:2},{value:"Example",id:"example",level:3},{value:"Filtering Rules",id:"filtering-rules",level:2},{value:"Example",id:"example-1",level:3},{value:"Realistic Example",id:"realistic-example",level:3},{value:"Trigger Actions on Events",id:"trigger-actions-on-events",level:2},{value:"Example: Kill a Process",id:"example-kill-a-process",level:3},{value:"Example: Scan Files",id:"example-scan-files",level:3},{value:"Memo about <strong>Kunai</strong> Rules",id:"memo-about-kunai-rules",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Using ",(0,i.kt)("strong",{parentName:"p"},"Kunai")," to monitor every single event happening on a system is nice as it gives a very deep insight of what is going on. However, this approach generates loads of events. While it might be the way to go for some ",(0,i.kt)("strong",{parentName:"p"},"Kunai")," users, some others might be interested into detecting only very specific events (based on configurable rules) and show only those ones. This is exactly the topic we are going to tackle in this section of the documentation."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"When ",(0,i.kt)("strong",{parentName:"p"},"Kunai")," is configured with some detection/filtering rules, ",(0,i.kt)("strong",{parentName:"p"},"ONLY")," the events matching at least one rule will be shown."),(0,i.kt)("p",{parentName:"admonition"},"If an event is ",(0,i.kt)("strong",{parentName:"p"},"not desired")," prefer ",(0,i.kt)("a",{parentName:"p",href:"../configuration#configuration-file"},(0,i.kt)("strong",{parentName:"a"},"disabling it in configuration"))," rather than ",(0,i.kt)("strong",{parentName:"p"},"filtering it out"),", it will ",(0,i.kt)("strong",{parentName:"p"},"save resources"),".")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We intentionally do not go too deep into the rule format as it will be part of a dedicated documentation in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/0xrawsec/gene-rs"},"gene-rs project"))),(0,i.kt)("h2",{id:"detection-rules"},"Detection Rules"),(0,i.kt)("p",null,"Detection rules are made to detect ",(0,i.kt)("strong",{parentName:"p"},"suspicious/malicious security events")," happening on a running system. "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"detection rules")," will make modifications to the matching events to provide information about the matching rule(s)")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Here after you can find an example of a detection rule to detect an ",(0,i.kt)("inlineCode",{parentName:"p"},"execve")," event with a task name looking like\na typical Linux kernel task name. This is a technique sometimes used by malware to hide themselves."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# name of the rule\nname: mimic.kthread\n# metadata information\nmeta:\n    # tags of the rule\n    tags: [ 'os:linux' ]\n    # MITRE ATT&CK\xa0ids\n    attack: [ T1036 ]\n    # authors of the rule\n    authors: [ qjerome ]\n    # comments about the rule\n    comments:\n        - tries to catch binaries masquerading kernel threads\n# acts as a pre-filter to speed up engine\nmatch-on:\n    events:\n        # we match on kunai execve and execve_script events\n        kunai: [execve, execve_script]\nmatches:\n    # 0x200000 is the flag for KTHREAD\n    $task_is_kthread: .info.task.flags &= '0x200000'\n    # common kthread names \n    $kthread_names: .info.task.name ~= '^(kworker)'\n# if task is NOT a KTHREAD but we have a name that \n# looks like one we want the rule to kick-in\ncondition: not $task_is_kthread and $kthread_names\n# severity is bounded to 10\xa0so it is the maximum score\nseverity: 10\n")),(0,i.kt)("p",null,"If you want to try the above rule and see\nhow ",(0,i.kt)("strong",{parentName:"p"},"Kunai")," behaves when loaded with detection rules, you can do it easily:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"dump the above rule in a file"),(0,i.kt)("li",{parentName:"ol"},"run ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo kunai -r path_to_your_file")),(0,i.kt)("li",{parentName:"ol"},"open another terminal and trigger the rule by executing ",(0,i.kt)("inlineCode",{parentName:"li"},"cp /usr/bin/ls /tmp/kworker && /tmp/kworker"))),(0,i.kt)("p",null,"If you have made the experiment, you may have noted that when the rule matches the event is modified and contains a new section named ",(0,i.kt)("inlineCode",{parentName:"p"},"detection"),". "),(0,i.kt)("details",null,(0,i.kt)("summary",null,"View modified event"),(0,i.kt)("p",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh",\n    "parent_exe": "/usr/bin/zsh",\n    "command_line": "/tmp/kworker",\n    "exe": {\n      "path": "/tmp/kworker",\n      "md5": "5a657abb15a5c469936ec86f420f7b39",\n      "sha1": "5d08746413e0e5f3242fe768266e39796007ca2d",\n      "sha256": "b97ab6fabafba27199d50a190a2ad6513ccf8ee722558e86d2a45fd2ac535c67",\n      "sha512": "eed4577694e87932beff79898f7abe5dfb672b7d4d4c02a57d86f96f62826f92bdd1514c80e0329d4f9861946cfb80563584074d64fbaf4ce2ee386f28d55433",\n      "size": 137848\n    }\n  },\n  "detection": {\n    "rules": [\n      "mimic.kthread"\n    ],\n    "tags": [\n      "os:linux"\n    ],\n    "attack": [\n      "T1036"\n    ],\n    "severity": 10\n  },\n  "info": {\n    ...\n    "event": {\n      "source": "kunai",\n      "id": 1,\n      "name": "execve",\n      "uuid": "d21cc4e6-35f9-4193-e879-84fdd4ce74f3",\n      "batch": 12\n    },\n    "task": {\n      "name": "kworker",\n      "pid": 1368247,\n      "tgid": 1368247,\n      "guuid": "2d83bc47-d838-0300-a6a2-85b0b7e01400",\n      "uid": 1000,\n      "gid": 1000,\n      "namespaces": {\n        "mnt": 4026531841\n      },\n      "flags": "0x400000"\n    },\n    "parent_task": {\n      "name": "zsh",\n      "pid": 302186,\n      "tgid": 302186,\n      "guuid": "1ce53685-7339-0000-a6a2-85b06a9c0400",\n      "uid": 1000,\n      "gid": 1000,\n      "namespaces": {\n        "mnt": 4026531841\n      },\n      "flags": "0x400000"\n    },\n    "utc_time": "2023-12-11T10:04:49.301495661Z"\n  }\n}\n')))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"if several rules match a single event, rule name(s) will appear in ",(0,i.kt)("inlineCode",{parentName:"li"},".detection.rules")),(0,i.kt)("li",{parentName:"ul"},"matching rules' ",(0,i.kt)("inlineCode",{parentName:"li"},"tags")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"attack")," (MITRE ATT&CK) ids will stack up respectively in ",(0,i.kt)("inlineCode",{parentName:"li"},".detection.tags")," and ",(0,i.kt)("inlineCode",{parentName:"li"},".detection.attack")),(0,i.kt)("li",{parentName:"ul"},"severities of ",(0,i.kt)("strong",{parentName:"li"},"rules matching")," are summed and put in ",(0,i.kt)("inlineCode",{parentName:"li"},".detection.severity"),". Severity is bounded to ",(0,i.kt)("strong",{parentName:"li"},"10"),"."))),(0,i.kt)("h2",{id:"filtering-rules"},"Filtering Rules"),(0,i.kt)("p",null,"Filtering rules on the other hand are made to ",(0,i.kt)("strong",{parentName:"p"},"select")," the logs we want ",(0,i.kt)("strong",{parentName:"p"},"Kunai")," to show.\nWith those you can be very granular on the kind of logs you want to filter in/out.\nThe difference between a detection and a filtering rule is very little, it is just a switch\nto toggle in the rule."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Events matching ",(0,i.kt)("strong",{parentName:"p"},"ONLY filtering rules")," will be shown ",(0,i.kt)("strong",{parentName:"p"},"as is"),", which means that there will\nnot be any ",(0,i.kt)("inlineCode",{parentName:"p"},"detection")," section in the event.")),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("p",null,"Let's design a filtering rule to log every ",(0,i.kt)("inlineCode",{parentName:"p"},"mprotect_exec")," event but the ones made by\na browser. Indeed any software using JIT\xa0is very likely to turn some memory pages protection\nto execute code."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"mprotect_exec")," are interesting events to detect dynamic\ncode execution, such as shellcode. However, those events may be very noisy if you\nhave a browser running or any application making extensive use of JIT. So the following example\ncan be used as a base for a custom configuration to observe unknown ",(0,i.kt)("inlineCode",{parentName:"p"},"mprotect_exec")," events.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: log.mprotect_exec\nparams:\n    # flag to set so that the rule is used as a filter\n    filter: true\nmatch-on:\n    events:\n        # applies on kunai mprotect_exec\n        kunai: [ mprotect_exec ]\nmatches:\n    # exe matches regex\n    $browser: .data.exe.path ~= '/usr/lib/(firefox/firefox|chromium/chromium)'\n# if exe is neither firefox nor chromium\ncondition: not $browser\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Adapt the ",(0,i.kt)("inlineCode",{parentName:"li"},"$browser")," match if needed"),(0,i.kt)("li",{parentName:"ul"},"You can try to reverse the condition (remove ",(0,i.kt)("inlineCode",{parentName:"li"},"not"),") and see the difference"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"In case several ",(0,i.kt)("strong",{parentName:"p"},"filtering rules")," are specified, it is a ",(0,i.kt)("strong",{parentName:"p"},"OR")," relationship between them. This means, if a rule is supposed to ",(0,i.kt)("strong",{parentName:"p"},"exclude")," an event but another ",(0,i.kt)("strong",{parentName:"p"},"includes")," it, the event will be shown. So for ",(0,i.kt)("strong",{parentName:"p"},"filtering rules")," it is a good practice to create ",(0,i.kt)("strong",{parentName:"p"},"one rule")," per ",(0,i.kt)("strong",{parentName:"p"},"event type")," we want to ",(0,i.kt)("strong",{parentName:"p"},"include"),".")),(0,i.kt)("h3",{id:"realistic-example"},"Realistic Example"),(0,i.kt)("p",null,"Let's create a ",(0,i.kt)("strong",{parentName:"p"},"filtering configuration")," that logs ",(0,i.kt)("strong",{parentName:"p"},"everything")," except some noisy events."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: include.all.but.noisy\nparams:\n  filter: true\nmatch-on:\n  events:\n      # we can put - in front of the events we don't want this rule\n      # to apply on. The following means, everything except \n      # mprotect_exec and prctl\n      kunai: [ '-mprotect_exec', '-prctl' ]\n# rule with no condition always returns true\n\n---\n\n# Rules have OR relationship between them so here after we keep\n# ONLY some specific mprotect_exec we want to see, all others\n# being excluded by the rule above\nname: log.mprotect_exec\nparams:\n    # flag to set so that the rule is used as a filter\n    filter: true\nmatch-on:\n    events:\n        # applies on kunai mprotect_exec\n        kunai: [ mprotect_exec ]\nmatches:\n    # exe matches regex\n    $browser: .data.exe.path ~= '/usr/lib/(firefox/firefox|chromium/chromium)'\n# if exe is neither firefox nor chromium\ncondition: not $browser\n")),(0,i.kt)("h2",{id:"trigger-actions-on-events"},"Trigger Actions on Events"),(0,i.kt)("p",null,"It is possible to tell ",(0,i.kt)("strong",{parentName:"p"},"Kunai")," to take ",(0,i.kt)("strong",{parentName:"p"},"actions")," on some events. Actions can be defined both in ",(0,i.kt)("strong",{parentName:"p"},"filtering")," and ",(0,i.kt)("strong",{parentName:"p"},"detection")," rules. The only difference is that some actions are not supported for ",(0,i.kt)("strong",{parentName:"p"},"filtering")," rules. For example it is not allowed to use a ",(0,i.kt)("strong",{parentName:"p"},"kill")," action within a ",(0,i.kt)("strong",{parentName:"p"},"filtering")," rule."),(0,i.kt)("p",null,"To list the available ",(0,i.kt)("strong",{parentName:"p"},"actions")," as well as their ",(0,i.kt)("strong",{parentName:"p"},"description"),", run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kunai config --list-actions\n")),(0,i.kt)("h3",{id:"example-kill-a-process"},"Example: Kill a Process"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# this is a condensed version of the rule defined previously\n# killing the process instead of letting it run\nname: mimic.kthread\nmatch-on:\n    events:\n        kunai: [execve, execve_script]\nmatches:\n    $task_is_kthread: .info.task.flags &= '0x200000'\n    $kthread_names: .info.task.name ~= '^(kworker)'\ncondition: not $task_is_kthread and $kthread_names\nseverity: 10\nactions: [ kill ]\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"dump the rule in a file ",(0,i.kt)("inlineCode",{parentName:"li"},"rule.yaml")),(0,i.kt)("li",{parentName:"ol"},"run kunai with ",(0,i.kt)("inlineCode",{parentName:"li"},"kunai run -r rule.yaml")),(0,i.kt)("li",{parentName:"ol"},"open another terminal and trigger the rule by executing ",(0,i.kt)("inlineCode",{parentName:"li"},"cp /usr/bin/ls /tmp/kworker && /tmp/kworker -R /")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"observe")," the following:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a kunai event is generated as it comes from a detection"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("strong",{parentName:"li"},"warning log")," is printed showing a process got killed"),(0,i.kt)("li",{parentName:"ul"},"our ",(0,i.kt)("strong",{parentName:"li"},"fake malicious")," process has been ",(0,i.kt)("strong",{parentName:"li"},"killed"))))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"kill")," action ",(0,i.kt)("strong",{parentName:"p"},"with extreme care"),"! Kunai runs with high privileges and can kill\nany process. "),(0,i.kt)("p",{parentName:"admonition"},"Use it only if you are sure there is no false positives to\nthe detection rule.")),(0,i.kt)("h3",{id:"example-scan-files"},"Example: Scan Files"),(0,i.kt)("p",null,"Similarly one can decide to ",(0,i.kt)("strong",{parentName:"p"},"scan files on-demand"),". There are two possibilities currently supported for file scanning:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Kunai")," has been ",(0,i.kt)("a",{parentName:"li",href:"/docs/configuration"},"configured")," to load ",(0,i.kt)("a",{parentName:"li",href:"https://virustotal.github.io/yara-x/"},"Yara")," rules",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("a",{parentName:"li",href:"../events/file_scan"},(0,i.kt)("inlineCode",{parentName:"a"},"file_scan"))," event will be generated with ",(0,i.kt)("inlineCode",{parentName:"li"},".data.signatures")," containing any ",(0,i.kt)("strong",{parentName:"li"},"Yara signature")," match and ",(0,i.kt)("inlineCode",{parentName:"li"},".data.positives")," indicating the ",(0,i.kt)("strong",{parentName:"li"},"number of matching rules")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Kunai")," has ",(0,i.kt)("strong",{parentName:"li"},"not")," been configured to load ",(0,i.kt)("strong",{parentName:"li"},"Yara")," rules",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"in such case a ",(0,i.kt)("a",{parentName:"li",href:"../events/file_scan"},(0,i.kt)("inlineCode",{parentName:"a"},"file_scan"))," event will be generated but ",(0,i.kt)("inlineCode",{parentName:"li"},".data.signature")," field will always be ",(0,i.kt)("strong",{parentName:"li"},"empty")," and ",(0,i.kt)("inlineCode",{parentName:"li"},".data.positives")," will always be ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),". This options might be interesting if one wants to get ",(0,i.kt)("strong",{parentName:"li"},"metadata")," information of some files without the burden of ",(0,i.kt)("strong",{parentName:"li"},"Yara")," file scanning.")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"When a ",(0,i.kt)("strong",{parentName:"p"},"file scan")," is issued ",(0,i.kt)("strong",{parentName:"p"},"any path")," contained in the event is scanned. So in most of the cases it will result in several ",(0,i.kt)("a",{parentName:"p",href:"../events/file_scan"},(0,i.kt)("inlineCode",{parentName:"a"},"file_scan"))," events being generated.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# this rule scans any bash script written on disk\nname: scan.any.bash.script.write\nparams:\n  filter: true\nmatch-on:\n    events:\n        kunai: [ write_close ]\nmatches:\n    $bash_ext: .data.path ~= '\\.sh$'\ncondition: all of them\nactions: [ scan-files ]\n\n---\n\nname: show.file_scan\nparams: true\nmatch-on:\n  events:\n    kunai: [ file_scan ] \n")),(0,i.kt)("p",null,"To test the above rule:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"write the above rule in a file ",(0,i.kt)("inlineCode",{parentName:"li"},"/tmp/scan.yaml")),(0,i.kt)("li",{parentName:"ol"},"Run kunai with ",(0,i.kt)("inlineCode",{parentName:"li"},"write_close")," events ",(0,i.kt)("strong",{parentName:"li"},"enabled")," and load the rule file")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kunai run --include write_close -r /tmp/scan.yaml\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Drop a ",(0,i.kt)("inlineCode",{parentName:"li"},"bash")," script somewhere and execute it")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'echo "ls -hail" > /tmp/test.sh && chmod +x /tmp/test.sh && /tmp/test.sh\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"observe that ",(0,i.kt)("strong",{parentName:"li"},"two")," ",(0,i.kt)("a",{parentName:"li",href:"../events/file_scan"},(0,i.kt)("inlineCode",{parentName:"a"},"file_scan"))," events got printed")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"To scan ",(0,i.kt)("strong",{parentName:"p"},"dropped files")," you must use ",(0,i.kt)("a",{parentName:"p",href:"../events/write_close"},(0,i.kt)("inlineCode",{parentName:"a"},"write_close"))," events as those\nindicate the file ",(0,i.kt)("strong",{parentName:"p"},"has been closed")," and de-facto cannot be written again\nuntil it gets re-opened.")),(0,i.kt)("h2",{id:"memo-about-kunai-rules"},"Memo about ",(0,i.kt)("strong",{parentName:"h2"},"Kunai")," Rules"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"rules are written in ",(0,i.kt)("a",{parentName:"li",href:"https://yaml.org/"},"YAML")),(0,i.kt)("li",{parentName:"ol"},"several rules can be defined in a single file (see ",(0,i.kt)("a",{parentName:"li",href:"https://yaml.org/spec/1.2.2/#chapter-9-document-stream-productions"},"YAML documents"),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"put ",(0,i.kt)("strong",{parentName:"li"},"a line")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"---")," before rule starts and ",(0,i.kt)("strong",{parentName:"li"},"a line"),"  with ",(0,i.kt)("inlineCode",{parentName:"li"},"...")," after rule ends"))),(0,i.kt)("li",{parentName:"ol"},"one can use ",(0,i.kt)("strong",{parentName:"li"},"Kunai")," with rules either from ",(0,i.kt)("a",{parentName:"li",href:"../configuration#configuration-file"},"config")," or from ",(0,i.kt)("a",{parentName:"li",href:"../configuration#advanced-cli-usage"},"cli")),(0,i.kt)("li",{parentName:"ol"},"a rule can either be a ",(0,i.kt)("strong",{parentName:"li"},"detection")," or a ",(0,i.kt)("strong",{parentName:"li"},"filtering")," rule",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"filtering rules output event ",(0,i.kt)("strong",{parentName:"li"},"as is")),(0,i.kt)("li",{parentName:"ul"},"detection rules output event with ",(0,i.kt)("strong",{parentName:"li"},"detection information")," in ",(0,i.kt)("inlineCode",{parentName:"li"},".detection")," section"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"match-on")," section is ",(0,i.kt)("strong",{parentName:"li"},"very important")," as it allows to quickly filter events"),(0,i.kt)("li",{parentName:"ol"},"every ",(0,i.kt)("inlineCode",{parentName:"li"},"match")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"matches")," must be in the form ",(0,i.kt)("inlineCode",{parentName:"li"},"$VAR_NAME: FIELD_PATH OPERATOR 'VALUE'"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FIELD_PATH"),":\xa0",(0,i.kt)("strong",{parentName:"li"},"field's absolute path")," starting with ",(0,i.kt)("inlineCode",{parentName:"li"},"."),", separated by ",(0,i.kt)("inlineCode",{parentName:"li"},".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OPERATOR"),": ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"==")," : ",(0,i.kt)("strong",{parentName:"li"},"equality operator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},">="),", ",(0,i.kt)("inlineCode",{parentName:"li"},"<="),", ",(0,i.kt)("inlineCode",{parentName:"li"},">"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"<")," : ",(0,i.kt)("strong",{parentName:"li"},"comparison operators")," ","\u2192"," ",(0,i.kt)("inlineCode",{parentName:"li"},"VALUE")," must be a ",(0,i.kt)("strong",{parentName:"li"},"number")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"&=")," : ",(0,i.kt)("strong",{parentName:"li"},"flag checking operator")," ","\u2192"," ",(0,i.kt)("inlineCode",{parentName:"li"},"VALUE")," must be a ",(0,i.kt)("strong",{parentName:"li"},"number")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~=")," : ",(0,i.kt)("strong",{parentName:"li"},"regex operator")," ","\u2192"," ",(0,i.kt)("inlineCode",{parentName:"li"},"VALUE")," must be a ",(0,i.kt)("strong",{parentName:"li"},"string")," regex following ",(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/regex/latest/regex/#syntax"},"syntax")))),(0,i.kt)("li",{parentName:"ul"},"every ",(0,i.kt)("strong",{parentName:"li"},"field value")," found at ",(0,i.kt)("inlineCode",{parentName:"li"},"FIELD_PATH")," is expected to be of the same type than ",(0,i.kt)("inlineCode",{parentName:"li"},"VALUE")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"condition")," defines the ",(0,i.kt)("strong",{parentName:"li"},"logic")," to apply on the ",(0,i.kt)("strong",{parentName:"li"},"matches"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"not"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"and")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"or")," keywords"),(0,i.kt)("li",{parentName:"ul"},"support for ",(0,i.kt)("strong",{parentName:"li"},"aggregated notation"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"all of them"),": all the variable must be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"all of $VAR_PREFIX"),": all variables ",(0,i.kt)("strong",{parentName:"li"},"starting with VAR_PREFIX")," must be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"N of them"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"N")," variables must be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"N of $VAR_PREFIX"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"N")," variables ",(0,i.kt)("strong",{parentName:"li"},"starting with VAR_PREFIX")," must be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"none of them"),": ",(0,i.kt)("strong",{parentName:"li"},"None")," of the variables must be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," (all ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"none of $VAR_PREFIX"),": ",(0,i.kt)("strong",{parentName:"li"},"None")," of the variables ",(0,i.kt)("strong",{parentName:"li"},"starting with VAR_PREFIX")," must be ",(0,i.kt)("inlineCode",{parentName:"li"},"true"))))))))}c.isMDXComponent=!0}}]);