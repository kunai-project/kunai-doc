"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[3369],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return t?o.createElement(m,r(r({ref:n},c),{},{components:t})):o.createElement(m,r({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=t[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=t(7462),a=(t(7294),t(3905));const i={sidebar_position:2},r="Configuration",l={unversionedId:"configuration",id:"version-0.2.0/configuration",title:"Configuration",description:"By default kunai does not log all events it can monitor, so if you want to unlock the full potential of the tool, you need to configure it through a configuration file.",source:"@site/versioned_docs/version-0.2.0/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/versioned_docs/version-0.2.0/configuration.md",tags:[],version:"0.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/quickstart"},next:{title:"Kunai - Events",permalink:"/docs/category/kunai---events"}},s={},u=[{value:"Configuration File",id:"configuration-file",level:2},{value:"Log rotation",id:"log-rotation",level:3},{value:"Advanced CLI usage",id:"advanced-cli-usage",level:2},{value:"Testing rules / IoC configuration",id:"testing-rules--ioc-configuration",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"By default ",(0,a.kt)("strong",{parentName:"p"},"kunai")," does not log all events it can monitor, so if you want to unlock the full potential of the tool, you need to configure it through a configuration file."),(0,a.kt)("p",null,"In order to generate a ",(0,a.kt)("strong",{parentName:"p"},"default configuration")," file for ",(0,a.kt)("strong",{parentName:"p"},"kunai")," use the following command line."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./kunai --dump-config\n")),(0,a.kt)("admonition",{title:"Default configuration",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"--dump-config")," option gives you a view on the default configuration of the tool when ran without setting ",(0,a.kt)("inlineCode",{parentName:"p"},"-c --config")," option")),(0,a.kt)("h2",{id:"configuration-file"},"Configuration File"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'// UUID\xa0identifying the host\nhost_uuid = "c030b40d-0eab-417b-b33a-22d952357984"\n\n// where the events should be written\noutput = "/dev/stdout"\n\n// this is the maximum number of events that can be stored in the \n// buffer used by the eBPF\xa0probes. This limit might need to be increased\n// if events get lost (very likely due to a high troughput).\n// NB: increasing this limit also increase the memory used by kunai\nmax_buffered_events = 1024\n\n// paths to files containing detection/filtering rules\nrules = []\n\n// path to files containing iocs to match against\niocs = []\n\n[[events]]\nname = "execve"\nenable = true\n\n[[events]]\nname = "execve_script"\nenable = true\n\n[[events]]\n// corresponds to tasks being scheduled, it is used to gather\n// correlation information and not display events per se\nname = "task_sched"\nenable = true\n\n[[events]]\nname = "exit"\nenable = true\n\n[[events]]\nname = "exit_group"\nenable = true\n\n[[events]]\nname = "clone"\nenable = true\n\n[[events]]\nname = "prctl"\nenable = true\n\n[[events]]\nname = "init_module"\nenable = true\n\n[[events]]\nname = "bpf_prog_load"\nenable = true\n\n[[events]]\nname = "bpf_socket_filter"\nenable = true\n\n[[events]]\nname = "mprotect_exec"\nenable = true\n\n[[events]]\nname = "mmap_exec"\nenable = true\n\n[[events]]\nname = "connect"\nenable = true\n\n[[events]]\nname = "dns_query"\nenable = true\n\n[[events]]\nname = "send_data"\nenable = true\n\n[[events]]\nname = "read"\n// disabled by default as it generates a large amount of events\nenable = false\n\n[[events]]\nname = "read_config"\nenable = true\n\n[[events]]\n// disabled by default as it generates a large amount of events\nname = "write"\nenable = false\n\n[[events]]\nname = "write_config"\nenable = true\n\n[[events]]\nname = "file_rename"\nenable = true\n\n[[events]]\nname = "file_unlink"\nenable = true\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Enabling/disabling logs will impact the performance of the tool. If you are looking for advanced log filtering please look at ",(0,a.kt)("a",{parentName:"p",href:"./advanced/rule_configuration"},"log filtering documentation"))),(0,a.kt)("h3",{id:"log-rotation"},"Log rotation"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"log rotation feature is available since ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.2.5")," ",(0,a.kt)("strong",{parentName:"p"},"only"))),(0,a.kt)("p",null,"Log rotation is possible by defining a ",(0,a.kt)("inlineCode",{parentName:"p"},"[output_settings]")," section\nin the configuration file. Log rotation ",(0,a.kt)("strong",{parentName:"p"},"will work if and only if")," ",(0,a.kt)("inlineCode",{parentName:"p"},"output"),"\nsetting ",(0,a.kt)("strong",{parentName:"p"},"is a file"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'host_uuid = "c030b40d-0eab-417b-b33a-22d952357984"\noutput = "/var/log/kunai/events.jsonl"\nmax_buffered_events = 1024\nrules = []\niocs = []\n\n// this section has to come after iocs\n[output_settings]\n// we rotate when the current log file reaches 100MB\nrotate_size="100MB"\n// when the total size of logs reaches 10GB we start to\n// delete old files\nmax_size="10GB"\n\n// continue here with the rest of the configuration\n[...]\n')),(0,a.kt)("h2",{id:"advanced-cli-usage"},"Advanced CLI usage"),(0,a.kt)("p",null,"Some of the configuration options can be set directly from CLI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Usage: kunai [OPTIONS]\n\nOptions:\n      --debug\n          Enable debugging\n  -c, --config <FILE>\n          Specify a configuration file to use. Command line options supersede the ones specified in the configuration file.\n      --dump-config\n          Prints a default configuration to stdout\n      --show-events\n          Show details about configurable events on stdout\n      --exclude <EXCLUDE>\n          Exclude events by name (comma separated)\n      --include <INCLUDE>\n          Include events by name (comma separated). Supersedes any exclude filter.\n      --max-buffered-events <MAX_BUFFERED_EVENTS>\n          Increase the size of the buffer shared between eBPF probes and userland\n  -r, --rule-file <FILE>\n          Detection/filtering rule file. Supersedes configuration file\n  -i, --ioc-file <FILE>\n          File containing IoCs (json line)\n  -v, --verbose...\n          Set verbosity level, repeat option for more verbosity.\n  -s, --silent\n          \n  -h, --help\n          Print help\n  -V, --version\n          Print version\n")),(0,a.kt)("admonition",{title:"tips",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"CLI options override configuration file options"),(0,a.kt)("li",{parentName:"ul"},"you can used ",(0,a.kt)("inlineCode",{parentName:"li"},"--include all")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"--exclude all")," to respectively include or exclude all events"))),(0,a.kt)("h3",{id:"testing-rules--ioc-configuration"},"Testing rules / IoC configuration"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"replay")," command is available only since ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.2.1"))),(0,a.kt)("p",null,"When to use replay command:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You want to test your ",(0,a.kt)("a",{parentName:"li",href:"/docs/advanced/rule_configuration"},(0,a.kt)("strong",{parentName:"a"},"detection/filtering rules"))),(0,a.kt)("li",{parentName:"ul"},"You want to test your ",(0,a.kt)("a",{parentName:"li",href:"/docs/advanced/ioc_configuration"},(0,a.kt)("strong",{parentName:"a"},"IoC configuration")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: kunai replay [LOG_FILES]...\n\nArguments:\n  [LOG_FILES]...  \n\nOptions:\n  -h, --help  Print help\n")),(0,a.kt)("p",null,"A typical usage of the replay command would be: ",(0,a.kt)("inlineCode",{parentName:"p"},"./kunai -i iocs.json -r rules.yaml replay /path/to/kunai/logs.jsonl")))}d.isMDXComponent=!0}}]);