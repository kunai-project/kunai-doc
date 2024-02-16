"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[3701],{1608:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"0.1.0","label":"0.1.0","banner":null,"badge":true,"noIndex":false,"className":"docs-version-0.1.0","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Quick Start","href":"/docs/quickstart","docId":"quickstart"},{"type":"link","label":"Configuration","href":"/docs/configuration","docId":"configuration"},{"type":"category","label":"Kunai - Events","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Event Layout and Info Section","href":"/docs/events/generalities","docId":"events/generalities"},{"type":"link","label":"Execve","href":"/docs/events/execve","docId":"events/execve"},{"type":"link","label":"Execve script","href":"/docs/events/execve_script","docId":"events/execve_script"},{"type":"link","label":"Exit","href":"/docs/events/exit","docId":"events/exit"},{"type":"link","label":"Exit group","href":"/docs/events/exit_group","docId":"events/exit_group"},{"type":"link","label":"Init module","href":"/docs/events/init_module","docId":"events/init_module"},{"type":"link","label":"Bpf prog load","href":"/docs/events/bpf_prog_load","docId":"events/bpf_prog_load"},{"type":"link","label":"Mprotect exec","href":"/docs/events/mprotect_exec","docId":"events/mprotect_exec"},{"type":"link","label":"Mmap exec","href":"/docs/events/mmap_exec","docId":"events/mmap_exec"},{"type":"link","label":"Connect","href":"/docs/events/connect","docId":"events/connect"},{"type":"link","label":"Dns query","href":"/docs/events/dns_query","docId":"events/dns_query"},{"type":"link","label":"Send data","href":"/docs/events/send_data","docId":"events/send_data"},{"type":"link","label":"Mount","href":"/docs/events/mount","docId":"events/mount"},{"type":"link","label":"Read","href":"/docs/events/read","docId":"events/read"},{"type":"link","label":"Read config","href":"/docs/events/read_config","docId":"events/read_config"},{"type":"link","label":"Write","href":"/docs/events/write","docId":"events/write"},{"type":"link","label":"Write config","href":"/docs/events/write_config","docId":"events/write_config"},{"type":"link","label":"File rename","href":"/docs/events/file_rename","docId":"events/file_rename"}],"href":"/docs/category/kunai---events"},{"type":"link","label":"Compatibility","href":"/docs/compatibility","docId":"compatibility"}]},"docs":{"compatibility":{"id":"compatibility","title":"Compatibility","description":"Even though kunai has been built to be a single binary compatible with most of the current Linux LTS kernels (from 5.4 to 6.1 at the time of writing) it is possible that the program crashes before it can even start monitoring. If that happens to you do not panic, it does not mean the tool is bad, it just means your kernel is not yet supported, for a reason or another. Having a single binary fitting to several kernels is great for deployment however this has a cost:\xa0the programs needs to be aware of some of the changes made between the kernel versions.","sidebar":"tutorialSidebar"},"configuration":{"id":"configuration","title":"Configuration","description":"By default kunai does not log all events it can monitor, so if you want to unlock the full potential of the tool, you need to configure it through a configuration file.","sidebar":"tutorialSidebar"},"events/bpf_prog_load":{"id":"events/bpf_prog_load","title":"Bpf prog load","description":"This event is generated every time a BPF\xa0program is loaded into the kernel.","sidebar":"tutorialSidebar"},"events/connect":{"id":"events/connect","title":"Connect","description":"This event gets generated every time a connect attempt is made to a remote IP.","sidebar":"tutorialSidebar"},"events/dns_query":{"id":"events/dns_query","title":"Dns query","description":"This event is generated when the a DNS response is received on the host and gives insight both on the query, the response and the DNS\xa0resolver.","sidebar":"tutorialSidebar"},"events/execve":{"id":"events/execve","title":"Execve","description":"Execve events are generated whenever an execve syscall happens on the system. It provides information about the current binary currently running.","sidebar":"tutorialSidebar"},"events/execve_script":{"id":"events/execve_script","title":"Execve script","description":"This event is generated under the same conditions as execve event. The only difference is that it provides additional information about the interpreter when the file being executed is a script.","sidebar":"tutorialSidebar"},"events/exit":{"id":"events/exit","title":"Exit","description":"Exit events get generated when a single task (process or thread) exits.","sidebar":"tutorialSidebar"},"events/exit_group":{"id":"events/exit_group","title":"Exit group","description":"Event generated when a thread-group (process and all its threads) exits.","sidebar":"tutorialSidebar"},"events/file_rename":{"id":"events/file_rename","title":"File rename","description":"This event gets generated whenever a file is being renamed.","sidebar":"tutorialSidebar"},"events/generalities":{"id":"events/generalities","title":"Event Layout and Info Section","description":"Every kunai event gets a set of common fields shared between all the events. These fields give various information which might be used for advanced purposes such as event identification, grouping or correlation.","sidebar":"tutorialSidebar"},"events/init_module":{"id":"events/init_module","title":"Init module","description":"This kind of event is generated when a kernel module is loaded into the kernel.","sidebar":"tutorialSidebar"},"events/mmap_exec":{"id":"events/mmap_exec","title":"Mmap exec","description":"This events is generated whenever the mmap syscall is used to map an executable file in memory, with memory execution protection.","sidebar":"tutorialSidebar"},"events/mount":{"id":"events/mount","title":"Mount","description":"This event gets generated when a path gets mounted on the system.","sidebar":"tutorialSidebar"},"events/mprotect_exec":{"id":"events/mprotect_exec","title":"Mprotect exec","description":"This kind of event is generated when memory protection is turned to executable.","sidebar":"tutorialSidebar"},"events/read":{"id":"events/read","title":"Read","description":"This event gets generated whenever a file is read.","sidebar":"tutorialSidebar"},"events/read_config":{"id":"events/read_config","title":"Read config","description":"This file is generated whenever a file located in /etc is being read.","sidebar":"tutorialSidebar"},"events/send_data":{"id":"events/send_data","title":"Send data","description":"This events gets generated when data is sent to a remote IP address.","sidebar":"tutorialSidebar"},"events/write":{"id":"events/write","title":"Write","description":"This event gets generated whenever a file is write.","sidebar":"tutorialSidebar"},"events/write_config":{"id":"events/write_config","title":"Write config","description":"This file is generated whenever a file located in /etc is being written.","sidebar":"tutorialSidebar"},"quickstart":{"id":"quickstart","title":"Quick Start","description":"Before going further, please make sure you\'ve read the compatibility page.","sidebar":"tutorialSidebar"}}}')}}]);