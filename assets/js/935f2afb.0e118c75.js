"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"\ud83d\udea7 Unstable \ud83d\udea7","banner":"unreleased","badge":true,"noIndex":false,"className":"docs-version-current","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Quick Start","href":"/docs/next/quickstart","docId":"quickstart"},{"type":"link","label":"Installation","href":"/docs/next/installation","docId":"installation"},{"type":"link","label":"Configuration","href":"/docs/next/configuration","docId":"configuration"},{"type":"link","label":"CLI Usage","href":"/docs/next/cli","docId":"cli"},{"type":"category","label":"Explore Kunai Events","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Event Layout and Info Section","href":"/docs/next/events/generalities","docId":"events/generalities"},{"type":"link","label":"Execve","href":"/docs/next/events/execve","docId":"events/execve"},{"type":"link","label":"Execve Script","href":"/docs/next/events/execve_script","docId":"events/execve_script"},{"type":"link","label":"Exit","href":"/docs/next/events/exit","docId":"events/exit"},{"type":"link","label":"Exit Group","href":"/docs/next/events/exit_group","docId":"events/exit_group"},{"type":"link","label":"Clone","href":"/docs/next/events/clone","docId":"events/clone"},{"type":"link","label":"Prctl","href":"/docs/next/events/prctl","docId":"events/prctl"},{"type":"link","label":"Kill","href":"/docs/next/events/kill","docId":"events/kill"},{"type":"link","label":"Ptrace","href":"/docs/next/events/ptrace","docId":"events/ptrace"},{"type":"link","label":"Init Module","href":"/docs/next/events/init_module","docId":"events/init_module"},{"type":"link","label":"Bpf Prog Load","href":"/docs/next/events/bpf_prog_load","docId":"events/bpf_prog_load"},{"type":"link","label":"Bpf Socket Filter Attached","href":"/docs/next/events/bpf_socket_filter","docId":"events/bpf_socket_filter"},{"type":"link","label":"Mprotect Exec","href":"/docs/next/events/mprotect_exec","docId":"events/mprotect_exec"},{"type":"link","label":"Mmap Exec","href":"/docs/next/events/mmap_exec","docId":"events/mmap_exec"},{"type":"link","label":"Connect","href":"/docs/next/events/connect","docId":"events/connect"},{"type":"link","label":"Dns Query","href":"/docs/next/events/dns_query","docId":"events/dns_query"},{"type":"link","label":"Send Data","href":"/docs/next/events/send_data","docId":"events/send_data"},{"type":"link","label":"Read","href":"/docs/next/events/read","docId":"events/read"},{"type":"link","label":"Read Config","href":"/docs/next/events/read_config","docId":"events/read_config"},{"type":"link","label":"Write","href":"/docs/next/events/write","docId":"events/write"},{"type":"link","label":"Write Config","href":"/docs/next/events/write_config","docId":"events/write_config"},{"type":"link","label":"File Rename","href":"/docs/next/events/file_rename","docId":"events/file_rename"},{"type":"link","label":"File Unlink","href":"/docs/next/events/file_unlink","docId":"events/file_unlink"},{"type":"link","label":"Write and Close","href":"/docs/next/events/write_close","docId":"events/write_close"},{"type":"link","label":"File Create","href":"/docs/next/events/file_create","docId":"events/file_create"},{"type":"link","label":"File Scan","href":"/docs/next/events/file_scan","docId":"events/file_scan"}],"href":"/docs/next/events/"},{"type":"category","label":"Threat Detection Usage","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Configuration with Rules","href":"/docs/next/advanced/rule_configuration","docId":"advanced/rule_configuration"},{"type":"link","label":"Builtin IoC matching","href":"/docs/next/advanced/ioc_configuration","docId":"advanced/ioc_configuration"}],"href":"/docs/next/advanced/"},{"type":"link","label":"Compatibility","href":"/docs/next/compatibility","docId":"compatibility"}]},"docs":{"advanced/index":{"id":"advanced/index","title":"Threat Detection Usage","description":"Detection/filtering rule format has changed since previous version. Make sure you have updated your rules before using this version.","sidebar":"tutorialSidebar"},"advanced/ioc_configuration":{"id":"advanced/ioc_configuration","title":"Builtin IoC matching","description":"IoC (Indicator of Compromise) scanning results from the same motivation behind detection rules. It addresses the need to log only events matching specific **IoCs**. Even though one can match IoC with detection rules it is not very convenient to manage for lots of IoCs and even less to automate. The other difference is on the resource management aspect. Detection rules has some non negligible processing/memory cost to work properly (find the rules to apply and then match against fields). On the other hand, IoC matching is reduced to a lookup in a set, so it is much more cpu and memory efficient.","sidebar":"tutorialSidebar"},"advanced/rule_configuration":{"id":"advanced/rule_configuration","title":"Configuration with Rules","description":"Using Kunai to monitor every single event happening on a system is nice as it gives a very deep insight of what is going on. However, this approach generates loads of events. While it might be the way to go for some Kunai users, some others might be interested into detecting only very specific events (based on configurable rules) and show only those ones. This is exactly the topic we are going to tackle in this section of the documentation.","sidebar":"tutorialSidebar"},"cli":{"id":"cli","title":"CLI Usage","description":"Some of the configuration options can be set directly from CLI.","sidebar":"tutorialSidebar"},"compatibility":{"id":"compatibility","title":"Compatibility","description":"Kunai has been built to be compatible with all the Linux LTS kernels(from 5.4 to 6.6 at the time of writing). Compatibility is tested in our CI/CD\xa0pipeline at every modification to guarantee stability.","sidebar":"tutorialSidebar"},"configuration":{"id":"configuration","title":"Configuration","description":"By default kunai does not log all events it can monitor, so if you want to unlock the full potential of the tool, you need to configure it through a configuration file.","sidebar":"tutorialSidebar"},"events/bpf_prog_load":{"id":"events/bpf_prog_load","title":"Bpf Prog Load","description":"This event is generated every time a BPF\xa0program is loaded into the kernel.","sidebar":"tutorialSidebar"},"events/bpf_socket_filter":{"id":"events/bpf_socket_filter","title":"Bpf Socket Filter Attached","description":"A socket filter attachement has been made (for instance via getsockopt syscall).","sidebar":"tutorialSidebar"},"events/clone":{"id":"events/clone","title":"Clone","description":"A task is being cloned/forked. This means that a new task will be created","sidebar":"tutorialSidebar"},"events/connect":{"id":"events/connect","title":"Connect","description":"This event gets generated every time a connect attempt is made to a remote IP.","sidebar":"tutorialSidebar"},"events/dns_query":{"id":"events/dns_query","title":"Dns Query","description":"This event is generated when the a DNS response is received on the host and gives insight both on the query, the response and the DNS\xa0resolver.","sidebar":"tutorialSidebar"},"events/execve":{"id":"events/execve","title":"Execve","description":"Execve events are generated whenever an execve syscall happens on the system. It provides information about the current binary currently running.","sidebar":"tutorialSidebar"},"events/execve_script":{"id":"events/execve_script","title":"Execve Script","description":"This event is generated under the same conditions as execve event. The only difference is that it provides additional information about the interpreter when the file being executed is a script.","sidebar":"tutorialSidebar"},"events/exit":{"id":"events/exit","title":"Exit","description":"Exit events get generated when a single task (process or thread) exits.","sidebar":"tutorialSidebar"},"events/exit_group":{"id":"events/exit_group","title":"Exit Group","description":"Event generated when a thread-group (process and all its threads) exits.","sidebar":"tutorialSidebar"},"events/file_create":{"id":"events/file_create","title":"File Create","description":"This event is generated when a new file is being created at .data.path.","sidebar":"tutorialSidebar"},"events/file_rename":{"id":"events/file_rename","title":"File Rename","description":"This event gets generated whenever a file is being renamed.","sidebar":"tutorialSidebar"},"events/file_scan":{"id":"events/file_scan","title":"File Scan","description":"Such events are generated when a scan-files action is requested. This event is a bit particular compared to other because it is triggered from another event. You can find the **cross-reference** to the **triggering event** in .data.sourceevent field.","sidebar":"tutorialSidebar"},"events/file_unlink":{"id":"events/file_unlink","title":"File Unlink","description":"Event generated when a file gets unlinked","sidebar":"tutorialSidebar"},"events/generalities":{"id":"events/generalities","title":"Event Layout and Info Section","description":"Every kunai event gets a set of common fields shared between all the events. These fields give various information which might be used for advanced purposes such as event identification, grouping or correlation.","sidebar":"tutorialSidebar"},"events/index":{"id":"events/index","title":"Explore Kunai Events","description":"Info section has changed since previous version. Make sure you have updated your tooling and rules depending on kunai to reflect those changes.","sidebar":"tutorialSidebar"},"events/init_module":{"id":"events/init_module","title":"Init Module","description":"This kind of event is generated when a kernel module is loaded into the kernel.","sidebar":"tutorialSidebar"},"events/kill":{"id":"events/kill","title":"Kill","description":"This event is generated when kill signal is send to a foreign process.","sidebar":"tutorialSidebar"},"events/mmap_exec":{"id":"events/mmap_exec","title":"Mmap Exec","description":"This events is generated whenever the mmap syscall is used to map an executable file in memory, with memory execution protection.","sidebar":"tutorialSidebar"},"events/mprotect_exec":{"id":"events/mprotect_exec","title":"Mprotect Exec","description":"This kind of event is generated when memory protection is turned to executable.","sidebar":"tutorialSidebar"},"events/prctl":{"id":"events/prctl","title":"Prctl","description":"A prctl event is generated when a process makes a call to the prctl syscall. As you can","sidebar":"tutorialSidebar"},"events/ptrace":{"id":"events/ptrace","title":"Ptrace","description":"Event generated when a ptrace syscall is issued. .data.mode reflects the ptrace mode as defined in Linux Kernel headers","sidebar":"tutorialSidebar"},"events/read":{"id":"events/read","title":"Read","description":"This event gets generated whenever a file is read.","sidebar":"tutorialSidebar"},"events/read_config":{"id":"events/read_config","title":"Read Config","description":"This file is generated whenever a file located in /etc is being read.","sidebar":"tutorialSidebar"},"events/send_data":{"id":"events/send_data","title":"Send Data","description":"This events gets generated when data is sent to a remote IP address.","sidebar":"tutorialSidebar"},"events/write":{"id":"events/write","title":"Write","description":"This event gets generated whenever a file is write.","sidebar":"tutorialSidebar"},"events/write_close":{"id":"events/write_close","title":"Write and Close","description":"An event generated when a file that has been written is just being closed. This is a great hook event to trigger a file scan as the file is not supposed to be written again.","sidebar":"tutorialSidebar"},"events/write_config":{"id":"events/write_config","title":"Write Config","description":"This file is generated whenever a file located in /etc is being written.","sidebar":"tutorialSidebar"},"installation":{"id":"installation","title":"Installation","description":"Kunai can be easily installed on the system using the install command","sidebar":"tutorialSidebar"},"quickstart":{"id":"quickstart","title":"Quick Start","description":"Before going further, please make sure you\'ve read the compatibility page.","sidebar":"tutorialSidebar"}}}')}}]);