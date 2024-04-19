"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[6809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={},i="Using your MISP IoC in Kunai",s={permalink:"/blog/2024/04/19/kunai-misp",editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/blog/2024-04-19-kunai-misp/index.md",source:"@site/blog/2024-04-19-kunai-misp/index.md",title:"Using your MISP IoC in Kunai",description:"MISP is an open-source cyber-threat information sharing platform which has been adopted by many actors of the industry over the last years. Organizations usually use it to exchange information about their own IT\xa0security incidents or about their Cyber Threat Intelligence (CTI) activities. Therefore a MISP instance, well connected with other instances, can quickly become a real gold mine containing a massive amount of Indicators of Compromise (IoC). By essence IoC are very specific and can be used to quickly identify compromised systems. In this blog post we are going to detail how to easily use IoC stored in a MISP instance to configure Kunai for real time compromise detection.",date:"2024-04-19T00:00:00.000Z",formattedDate:"April 19, 2024",tags:[],readingTime:8.3,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"BPFDoor case study",permalink:"/blog/bpf-door-case-study"}},p={authorsImageUrls:[]},l=[{value:"Warm up",id:"warm-up",level:2},{value:"A Little Experiment",id:"a-little-experiment",level:2},{value:"Getting MISP IoCs into Kunai",id:"getting-misp-iocs-into-kunai",level:2},{value:"Final Words",id:"final-words",level:2},{value:"References",id:"references",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.misp-project.org"},"MISP")," is an ",(0,o.kt)("strong",{parentName:"p"},"open-source")," cyber-threat information sharing platform which has been adopted by many actors of the industry over the last years. Organizations usually use it to exchange information about their own IT\xa0security incidents or about their Cyber Threat Intelligence (CTI) activities. Therefore a ",(0,o.kt)("strong",{parentName:"p"},"MISP")," instance, well connected with other instances, can quickly become a real gold mine containing a massive amount of ",(0,o.kt)("strong",{parentName:"p"},"Indicators of Compromise (IoC)"),". By essence ",(0,o.kt)("strong",{parentName:"p"},"IoC")," are very specific and can be used to quickly identify compromised systems. In this blog post we are going to detail how to easily use ",(0,o.kt)("strong",{parentName:"p"},"IoC")," stored in a ",(0,o.kt)("strong",{parentName:"p"},"MISP")," instance to configure ",(0,o.kt)("strong",{parentName:"p"},"Kunai")," for real time compromise detection."),(0,o.kt)("h2",{id:"warm-up"},"Warm up"),(0,o.kt)("p",null,"The first step to do  is to get familiar with the kind of events ",(0,o.kt)("strong",{parentName:"p"},"Kunai")," is able to monitor on your system. So please, take a quick read over the ",(0,o.kt)("a",{parentName:"p",href:"/docs/category/kunai---events"},"events documentation"),", in order to better understand the following steps. Additionally, the reader may want to get familiar with the documentation explaining how to use the tool for ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/"},"threat detection purposes"),"."),(0,o.kt)("p",null,"For those not having the time to go through the whole documentation, nothing beats a good example. So below one can find the example of an ",(0,o.kt)("inlineCode",{parentName:"p"},"execve_script")," event generated ",(0,o.kt)("strong",{parentName:"p"},"for every")," script being executed on a system running ",(0,o.kt)("strong",{parentName:"p"},"Kunai"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh|/usr/bin/bash",\n    "parent_exe": "/usr/bin/bash",\n    "command_line": "/bin/bash /tmp/tmp.msdKnvj7ax_kunai_test.sh",\n    "exe": {\n      "file": "/tmp/tmp.msdKnvj7ax_kunai_test.sh",\n      "md5": "64b8185d28042ea96feb251e12fe632b",\n      "sha1": "31683c67b020d90f02a42e43e7758184ef98c12f",\n      "sha256": "cda81b42b75647daf6b70a626380c199fe665d721e63bfe34c96b65da0289627",\n      "sha512": "63165b902db5242a01296b39c1d6f2995fde961e29d9470d1862ccde8e2c8a3083659bf5d9c0794bbca620f37c419baec3c1d1941333d37fb9ced795553d2e83",\n      "size": 21\n    },\n    "interpreter": {\n      "file": "/usr/bin/bash",\n      "md5": "e742da46d05de5afca58a2abcba5343e",\n      "sha1": "8d48bdcb10eb85a0bd80c34e13fc01c2f6776043",\n      "sha256": "664428e8dd065099a20cb364bdc293dd8f787ef10b9454b64e127a197950a5d6",\n      "sha512": "b4e6f555571636f02704271d3a40b8470d04447ca3aaad073818f4041d944533bfbca0d5586dc945a2de8033f8fd4123f4203219e9c7b97ebbc52acd340e598f",\n      "size": 1112880\n    }\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 2,\n      "name": "execve_script",\n      "uuid": "520487fc-020c-5569-ed88-38393e49a2d2",\n      "batch": 32\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2024-02-13T08:34:29.312127521Z"\n  }\n}\n')),(0,o.kt)("p",null,"As you can see, every ",(0,o.kt)("strong",{parentName:"p"},"Kunai")," event is composed of fields of various types. Some of these types can directly be matched against ",(0,o.kt)("strong",{parentName:"p"},"IoCs"),", following this correspondence table:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Kunai data types"),(0,o.kt)("th",{parentName:"tr",align:"center"},"cover IoC type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"path"),(0,o.kt)("td",{parentName:"tr",align:"center"},"absolute path")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"md5, sha1, sha256, sha512"),(0,o.kt)("td",{parentName:"tr",align:"center"},"hash")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"domain / fqdn"),(0,o.kt)("td",{parentName:"tr",align:"center"},"domain / fqdn")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"IP address"),(0,o.kt)("td",{parentName:"tr",align:"center"},"IPv4 / IPv6")))),(0,o.kt)("p",null,"So any field of ",(0,o.kt)("strong",{parentName:"p"},"any Kunai event")," having a type in the above table will be checked against the ",(0,o.kt)("strong",{parentName:"p"},"IoCs")," loaded in the tool. Now the only thing we have to do is to feed ",(0,o.kt)("strong",{parentName:"p"},"Kunai")," with data in the expected ",(0,o.kt)("strong",{parentName:"p"},"IoC")," format. The format is pretty basic, yet flexible - the tool simply expects a file containing ",(0,o.kt)("strong",{parentName:"p"},"JSON")," documents. One can find an example file below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"uuid": "81050c82-68a5-4130-a56d-a465c8337066", "source":"My MISP Instance", "value":"why.kunai.rocks"}\n{"uuid": "dd19ecd1-8237-427a-9b1d-35ff7d17381f", "source":"My MISP Instance", "value":"kunai.rocks"}\n')),(0,o.kt)("p",null,"The format is simple enough to accommodate any ",(0,o.kt)("strong",{parentName:"p"},"IoC")," feed and is easily scriptable. So one could even imagine the creation of such a file from an IP list found on the Internet."),(0,o.kt)("p",null,"Now, the reader should have a good picture of the topic and we can walk through a small experiment to get a bit more familiar with ",(0,o.kt)("strong",{parentName:"p"},"Kunai")," and its ",(0,o.kt)("strong",{parentName:"p"},"IoC")," matching capabilities."),(0,o.kt)("h2",{id:"a-little-experiment"},"A Little Experiment"),(0,o.kt)("p",null,"Let's run ",(0,o.kt)("strong",{parentName:"p"},"Kunai")," without any arguments, merely taking care of redirecting its output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo kunai | tee /tmp/kunai.log\n# if one has jq installed one can pipe kunai output to jq\n# in order to get a prettier output\nsudo kunai | jq '.' | tee /tmp/kunai.log\n")),(0,o.kt)("p",null,"You should start seeing some events printed on the terminal. You can try generating some more activity by leaving ",(0,o.kt)("strong",{parentName:"p"},"Kunai")," to run in a corner and use your system as you are used to. You can then stop it using ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl + c"),". "),(0,o.kt)("p",null,"If you inspect the logs in ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp/kunai.log"),", you will most likely find a wealth of useful information, especially if you have security monitoring needs. However, you may also come to the conclusion that there is simply too much useless information for your specific needs. So one can use ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/rule_configuration"},"filtering / detection rules")," to be very selective of the events (out of scope for this post) or use ",(0,o.kt)("strong",{parentName:"p"},"IoC")," matching, to only display events matching an ",(0,o.kt)("strong",{parentName:"p"},"IoC"),". So lets do the exact same experiment as previously, but taking a file containing ",(0,o.kt)("strong",{parentName:"p"},"IoCs")," as parameter."),(0,o.kt)("p",null,"The first thing you need to do is to copy the following content into a file, let's say ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp/kunai-iocs.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"uuid": "81050c82-68a5-4130-a56d-a465c8337066", "source":"My MISP Instance", "value":"why.kunai.rocks"}\n{"uuid": "dd19ecd1-8237-427a-9b1d-35ff7d17381f", "source":"My MISP Instance", "value":"kunai.rocks"}\n')),(0,o.kt)("p",null,"Once this is done, start ",(0,o.kt)("strong",{parentName:"p"},"Kunai"),", passing this ",(0,o.kt)("strong",{parentName:"p"},"IoC file")," in the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo kunai -i /tmp/kunai-iocs.json\n")),(0,o.kt)("p",null,"And now the magic happens! You won't see logs any longer, but don't worry it is absolutely normal. Under the hood, ",(0,o.kt)("strong",{parentName:"p"},"Kunai")," is analyzing all the events (as the ones you saw in previous experiments) but it will only display the ones matching ",(0,o.kt)("strong",{parentName:"p"},"IoCs"),". So try to generate some network traffic (use ",(0,o.kt)("inlineCode",{parentName:"p"},"dig"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," ...) towards domain ",(0,o.kt)("inlineCode",{parentName:"p"},"why.kunai.rocks")," and you should see some events popping up on your terminal. If you visit the website with your browser, make sure it ",(0,o.kt)("strong",{parentName:"p"},"doesn't use DOH")," or any ",(0,o.kt)("strong",{parentName:"p"},"DNS")," protocol different from the one running on port ",(0,o.kt)("strong",{parentName:"p"},"53.")),(0,o.kt)("p",null,"If you did the experiment and managed to generate an event matching one of the ",(0,o.kt)("strong",{parentName:"p"},"IoCs")," configured, you may have seen that the generated events contains ",(0,o.kt)("strong",{parentName:"p"},"additional information")," about the ",(0,o.kt)("strong",{parentName:"p"},"matching IoC")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},".detection")," section of the event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "ancestors": "/usr/lib/systemd/systemd|/usr/bin/login|/usr/bin/zsh|/usr/bin/bash|/usr/bin/xinit|/usr/bin/i3|/usr/bin/bash|/usr/bin/urxvt|/usr/bin/zsh",\n    "command_line": "dig why.kunai.rocks",\n    "exe": {\n      "file": "/usr/bin/dig"\n    },\n    "query": "why.kunai.rocks",\n    "proto": "udp",\n    "response": "kunai-project.github.io",\n    "dns_server": {\n      "ip": "10.96.0.1",\n      "port": 53,\n      "public": false,\n      "is_v6": false\n    }\n  },\n  "detection": {\n    "iocs": [\n      "why.kunai.rocks"\n    ],\n    "severity": 10\n  },\n  "info": {\n    "host": "...",\n    "event": {\n      "source": "kunai",\n      "id": 61,\n      "name": "dns_query",\n      "uuid": "7cf3a92b-b8fd-9035-4ced-8ca216adbf32",\n      "batch": 38\n    },\n    "task": "...",\n    "parent_task": "...",\n    "utc_time": "2024-04-18T09:34:31.887637287Z"\n  }\n}\n')),(0,o.kt)("p",null,"In the above example, we see only one ",(0,o.kt)("strong",{parentName:"p"},"IoC")," under the ",(0,o.kt)("inlineCode",{parentName:"p"},"detection")," section, however if several ",(0,o.kt)("strong",{parentName:"p"},"IoCs")," would match an event, all of them would be in the list. Things should be a bit more concrete for you now, so lets dive into how to automatically ingest ",(0,o.kt)("strong",{parentName:"p"},"MISP IoCs")," into ",(0,o.kt)("strong",{parentName:"p"},"Kunai"),"."),(0,o.kt)("h2",{id:"getting-misp-iocs-into-kunai"},"Getting MISP IoCs into Kunai"),(0,o.kt)("p",null,"The only thing which is missing, in order to configure ",(0,o.kt)("strong",{parentName:"p"},"Kunai")," from a ",(0,o.kt)("strong",{parentName:"p"},"MISP instance"),", is a way to  extract ",(0,o.kt)("strong",{parentName:"p"},"IoCs")," and translate them into the expected format. If you have already played with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MISP/PyMISP"},"PyMISP"),", this is not something that should be too scary and if you have not, here is the good news: we have a script which does it for you.  You can find the script in question over at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kunai-project/tools"},"Kunai tools repository")," under the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kunai-project/tools/tree/main/misp"},"misp")," directory. "),(0,o.kt)("p",null,"Before going further, make sure you have all the modules required (check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kunai-project/tools/blob/main/requirements.txt"},"requirements.txt")," at repository root) by Python so that this script works. "),(0,o.kt)("p",null,"The next step is to create a configuration file for the script, simply rename the example configuration into ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," and edit it so that it contains the settings to connect to the desired ",(0,o.kt)("strong",{parentName:"p"},"MISP")," instance."),(0,o.kt)("p",null,"If you have fulfilled the previous steps, you can simply run the ",(0,o.kt)("inlineCode",{parentName:"p"},"misp-to-kunai.py")," script and you should see your ",(0,o.kt)("strong",{parentName:"p"},"MISP's attributes"),"  translated into ",(0,o.kt)("strong",{parentName:"p"},"Kunai IoC format")," flowing in your terminal. This script has some options to be more selective on the ",(0,o.kt)("strong",{parentName:"p"},"IoC"),"s to pull, however we will not go through all of them and will let the reader explore them. The only option we will use is the ",(0,o.kt)("inlineCode",{parentName:"p"},"-o")," to write ",(0,o.kt)("strong",{parentName:"p"},"IoC"),"s into a file. We encourage you to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-o")," option to write into a file rather than doing a pure shell redirect as ",(0,o.kt)("strong",{parentName:"p"},"this option prevents IoC duplication"),"."),(0,o.kt)("p",null,"If you take a look at the output generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"misp-to-kunai.py")," you may have noticed that ",(0,o.kt)("strong",{parentName:"p"},"IoCs")," are not exactly in the same format as the one described previously. Indeed, those contain an additional field - it being the ",(0,o.kt)("inlineCode",{parentName:"p"},"event_uuid")," field -, which encodes the ",(0,o.kt)("strong",{parentName:"p"},"MISP Event UUID")," that the ",(0,o.kt)("strong",{parentName:"p"},"IoC")," belongs to. Any additional field to the ones described above, is ignored by ",(0,o.kt)("strong",{parentName:"p"},"Kunai"),", making the ",(0,o.kt)("strong",{parentName:"p"},"IoC")," format fairly flexible. Thanks to this you can add as many fields as you want, for instance to bring contextual information along with the ",(0,o.kt)("strong",{parentName:"p"},"IoC"),". We thought this one would be useful to enrich the ",(0,o.kt)("strong",{parentName:"p"},"IoC")," file with additional context, in case you would wish to correlate back to a ",(0,o.kt)("strong",{parentName:"p"},"MISP Event"),"."),(0,o.kt)("p",null,"It is now time to put everything together:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# pull IoCs from MISP\xa0and store them in Kunai IoC format\n./misp-to-kunai.py -o /tmp/kunai-misp-iocs.json\n\n# run Kunai and check all events happening on your\n# system against MISP IoCs\nsudo kunai -i /tmp/kunai-misp-iocs.json\n")),(0,o.kt)("p",null,"As seen in the previous experiment, you should not see any event coming out of ",(0,o.kt)("strong",{parentName:"p"},"Kunai")," until one actually matches an ",(0,o.kt)("strong",{parentName:"p"},"IoC")," you've just loaded. The easiest way to try and see if everything works as expected is to execute a ",(0,o.kt)("inlineCode",{parentName:"p"},"dig")," command against a domain from the ",(0,o.kt)("strong",{parentName:"p"},"IoC")," list."),(0,o.kt)("p",null,"Yes, you went though this entire blog post just to end up typing two simple lines into a shell, but now you understand why you typed those and how all this works."),(0,o.kt)("h2",{id:"final-words"},"Final Words"),(0,o.kt)("p",null,"This post aimed at being dense and straightforward, mostly to prevent you from giving up. While monitoring an infrastructure, ",(0,o.kt)("strong",{parentName:"p"},"IoC"),' checking is mandatory, not to miss "known things". On the other hand, ',(0,o.kt)("strong",{parentName:"p"},"IoC")," do not offer too much flexibility in the sense they cannot be used to detect Tactics, Techniques and Procedures (TTP) used by attackers. So if you would like to go further on this topic, we encourage you to learn ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/rule_configuration"},"how to configure Kunai with rules"),"."),(0,o.kt)("p",null,"On the Python script side, there are also some interesting options deserving exploration, especially if you are interested in turning it into a service."),(0,o.kt)("p",null,"All the tools presented here are ",(0,o.kt)("strong",{parentName:"p"},"open-source"),", so feel free to read the code, modify it and contribute to it even in the form of feedback or GitHub issues. This is how we can keep improving our projects and better fit the users' needs."),(0,o.kt)("p",null,"We hope you learned useful things or at least that you enjoyed reading this article."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/kunai-project/"},"Kunai project on GitHub"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"/docs/quickstart"},"Kunai documentation"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kunai-project/tools"},"Kunai tools"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.misp-project.org/"},"MISP"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MISP/PyMISP"},"PyMISP")))}d.isMDXComponent=!0}}]);