"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[9004],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),f=o,g=c["".concat(s,".").concat(f)]||c[f]||d[f]||a;return t?i.createElement(g,r(r({ref:n},p),{},{components:t})):i.createElement(g,r({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<a;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=t(7462),o=(t(7294),t(3905));const a={sidebar_position:3},r="Configuration",l={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"By default kunai does not log all events it can monitor, so if you want to unlock the full potential of the tool, you need to configure it through a configuration file.",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/next/configuration",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/docs/configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/next/installation"},next:{title:"Explore Kunai Events",permalink:"/docs/next/events/"}},s={},u=[{value:"Configuration File",id:"configuration-file",level:2},{value:"Log Rotation",id:"log-rotation",level:3},{value:"Advanced CLI Usage",id:"advanced-cli-usage",level:2},{value:"Testing Rules / IoC Configuration",id:"testing-rules--ioc-configuration",level:3}],p={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: kunai config [OPTIONS]\n\nOptions:\n      --dump          Dump a default configuration on the terminal\n      --list-actions  List the available remediation actions supported\n      --list-events   List available events\n  -h, --help          Print help\n")),(0,o.kt)("p",null,"By default ",(0,o.kt)("strong",{parentName:"p"},"kunai")," does not log all events it can monitor, so if you want to unlock the full potential of the tool, you need to configure it through a configuration file."),(0,o.kt)("p",null,"In order to generate a ",(0,o.kt)("strong",{parentName:"p"},"default configuration")," file for ",(0,o.kt)("strong",{parentName:"p"},"kunai")," use the following command line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./kunai config --dump\n")),(0,o.kt)("admonition",{title:"Default configuration",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"config --dump")," option gives you a view on the default configuration of the tool when ran without setting ",(0,o.kt)("inlineCode",{parentName:"p"},"-c --config")," option")),(0,o.kt)("h2",{id:"configuration-file"},"Configuration File"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# UUID\xa0identifying the host. This is auto-generated and should\n# not be changed.\nhost_uuid: c030b40d-0eab-417b-b33a-22d952357984\n\n# where the events should be written\noutput: /dev/stdout\n\n# Optional\n# specify advanced parameters regarding output\n# output_setting: null\n\n# this is the maximum number of events that can be stored in the \n# buffer used by the eBPF\xa0probes. This limit might need to be increased\n# if events get lost (very likely due to a high throughput).\n# NB: increasing this limit also increase the memory used by kunai\nmax_buffered_events: 1024\n\n# Optional\n# By default kunai is single-threaded if multi-threading\n# is desired specify the number of worker threads to use.\n# Set to 0 to use the maximum number of CPUs\n# workers: null\n\n# Optional\n# Specify the minimum length of data to trigger a send_data\n# event.\n# send_data_min_len: null\n\n# Put here the path to files or directories containing \n# kunai detection/filtering rules to load in the engine. \n# Supported file extensions: kun, kunai, gen, gene\nrules: []\n\n# Path to files or directories containing IoCs to be loaded\n# Supported file extensions: ioc\niocs: []\n\n# Path to files or directories containing Yara rules\n# Supported file extensions: yar, yara\nyara: []\n\n# file_scan event behaves exactly as any other kunai event\n# meaning that to be display it may need to be filter in\n# by a filtering rule. This setting makes sure every positive\n# Yara file scan will be displayed.\nalways_show_positive_scans: true\n\n# Whether to run kunai in hardened mode\n# This mode protects kunai process from being tampered with\n# This setting requires bpf to be in the list of lsm kernel\n#\xa0boot parameter. Verify it by checking /sys/kernel/security/lsm\nharden: false\n\n# Events to enable / disable\nevents:\n  execve:\n    enable: true\n  execve_script:\n    enable: true\n  exit:\n    enable: true\n  exit_group:\n    enable: true\n  clone:\n    enable: true\n  prctl:\n    enable: true\n  kill:\n    enable: true\n  init_module:\n    enable: true\n  bpf_prog_load:\n    enable: true\n  bpf_socket_filter:\n    enable: true\n  mprotect_exec:\n    enable: true\n  mmap_exec:\n    enable: true\n  connect:\n    enable: true\n  dns_query:\n    enable: true\n  send_data:\n    enable: true\n  read:\n    enable: false\n  read_config:\n    enable: true\n  write:\n    enable: false\n  write_config:\n    enable: true\n  file_rename:\n    enable: true\n  file_unlink:\n    enable: true\n  write_close:\n    enable: false\n  file_scan:\n    enable: true\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Enabling/disabling")," logs will impact the ",(0,o.kt)("strong",{parentName:"p"},"amount of logs")," generated and the ",(0,o.kt)("strong",{parentName:"p"},"performance")," of Kunai. ",(0,o.kt)("strong",{parentName:"p"},"Disabling")," events will decrease ",(0,o.kt)("strong",{parentName:"p"},"CPU")," and ",(0,o.kt)("strong",{parentName:"p"},"RAM")," consumed while ",(0,o.kt)("strong",{parentName:"p"},"enabling")," will increase those."),(0,o.kt)("p",{parentName:"admonition"},"If you are looking for advanced log filtering please look at ",(0,o.kt)("a",{parentName:"p",href:"./advanced/rule_configuration"},"log filtering documentation"),".")),(0,o.kt)("h3",{id:"log-rotation"},"Log Rotation"),(0,o.kt)("p",null,"Log rotation is possible using the ",(0,o.kt)("inlineCode",{parentName:"p"},"output_settings")," parameter\nin the configuration file. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"host_uuid: d59a13ed-30c8-5ff6-a93f-509de2b09ae7\noutput: /var/log/kunai/events.log\noutput_settings:\n  # we rotate when the current log file reaches 10MB\n  rotate_size: 10MB\n  # when the total size of logs reaches 1GB we start to\n  # delete old files\n  max_size: 1GB\n# other config parameters ...\n")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Log rotation ",(0,o.kt)("strong",{parentName:"p"},"will work if and only if")," ",(0,o.kt)("inlineCode",{parentName:"p"},"output"),"\nparameter ",(0,o.kt)("strong",{parentName:"p"},"is a file"),".")),(0,o.kt)("h2",{id:"advanced-cli-usage"},"Advanced CLI Usage"),(0,o.kt)("p",null,"Some of the configuration options can be set directly from CLI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: kunai [OPTIONS] [COMMAND]\n\nCommands:\n  install  Install Kunai\xa0on the system\n  run      Run kunai with custom options\n  replay   Replay logs into detection / filtering engine (useful to test rules and IoC based detection)\n  config   Dump a default configuration\n  logs     Easy way to show Kunai logs. This will work only with a configuration file and with an output file being configured\n  help     Print this message or the help of the given subcommand(s)\n\nOptions:\n  -d, --debug       Enable debugging\n  -s, --silent      Silents out debug, info, error logging\n  -v, --verbose...  Set verbosity level, repeat option for more verbosity\n  -h, --help        Print help\n  -V, --version     Print version\n")),(0,o.kt)("admonition",{title:"tips",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"CLI options ",(0,o.kt)("strong",{parentName:"p"},"always override")," configuration file options")),(0,o.kt)("h3",{id:"testing-rules--ioc-configuration"},"Testing Rules / IoC Configuration"),(0,o.kt)("p",null,"When to use replay command:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You want to test your ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/advanced/rule_configuration"},(0,o.kt)("strong",{parentName:"a"},"detection/filtering rules"))),(0,o.kt)("li",{parentName:"ul"},"You want to test your ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/advanced/ioc_configuration"},(0,o.kt)("strong",{parentName:"a"},"IoC configuration")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: kunai replay [OPTIONS] [LOG_FILES]...\n\nArguments:\n  [LOG_FILES]...  \n\nOptions:\n  -c, --config <FILE>     Specify a configuration file to use. Command line options supersede the ones specified in the configuration file\n  -r, --rule-file <FILE>  Detection/filtering rule file. Supersedes configuration file\n  -i, --ioc-file <FILE>   File containing IoCs (json line)\n  -h, --help              Print help\n")),(0,o.kt)("p",null,"A typical usage of the replay command would be: ",(0,o.kt)("inlineCode",{parentName:"p"},"./kunai replay -i iocs.json -r rules.ioc /path/to/kunai/logs.jsonl")))}d.isMDXComponent=!0}}]);