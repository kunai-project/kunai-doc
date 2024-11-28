"use strict";(self.webpackChunkkunai_doc=self.webpackChunkkunai_doc||[]).push([[3193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={title:"Enhancing Detection Engineering with Automated Malware Sandboxing",authors:["quentin"],tags:["detection-engineering","malware","sandbox"]},o="Introduction",s={permalink:"/blog/2024/10/02/kunai-malware-sandboxing",editUrl:"https://github.com/kunai-project/kunai-doc/tree/main/blog/2024-10-02-kunai-malware-sandboxing/index.md",source:"@site/blog/2024-10-02-kunai-malware-sandboxing/index.md",title:"Enhancing Detection Engineering with Automated Malware Sandboxing",description:"In the complex field of incident response, effective training for Security Operations Center (SOC) operators is critical. One of the key challenges in SOC training is providing realistic, data-driven environments that accurately simulate the threats and incidents operators will face. Additionally, detection engineers need reliable and actionable data to create robust detection rules that align with real-world security monitoring systems. However, gathering and analyzing real-world malware samples, which is essential to this process, can be time-consuming and prone to errors when done manually.",date:"2024-10-02T00:00:00.000Z",formattedDate:"October 2, 2024",tags:[{label:"detection-engineering",permalink:"/blog/tags/detection-engineering"},{label:"malware",permalink:"/blog/tags/malware"},{label:"sandbox",permalink:"/blog/tags/sandbox"}],readingTime:4.565,hasTruncateMarker:!1,authors:[{name:"Quentin Jerome",title:"Kunai Maintainer",url:"https://github.com/qjerome",imageURL:"https://github.com/qjerome.png",key:"quentin"}],frontMatter:{title:"Enhancing Detection Engineering with Automated Malware Sandboxing",authors:["quentin"],tags:["detection-engineering","malware","sandbox"]},nextItem:{title:"Using your MISP IoC in Kunai",permalink:"/blog/2024/04/19/kunai-misp"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the complex field of incident response, effective training for Security Operations Center (SOC) operators is critical. One of the key challenges in SOC training is providing realistic, data-driven environments that accurately simulate the threats and incidents operators will face. Additionally, detection engineers need reliable and actionable data to create robust detection rules that align with real-world security monitoring systems. However, gathering and analyzing real-world malware samples, which is essential to this process, can be time-consuming and prone to errors when done manually."),(0,i.kt)("p",null,"In this blog post, we introduce an approach to solving these challenges through automation. We explore how a Kunai-based sandbox can streamline the collection and analysis of malware samples, offering a practical solution."),(0,i.kt)("p",null,"By leveraging this sandbox infrastructure, the project opens up new opportunities for more efficient malware analysis while supporting a wide range of CPU architectures, including those specific to IoT and mobile devices."),(0,i.kt)("h1",{id:"the-need-for-realistic-data"},"The Need for Realistic Data"),(0,i.kt)("p",null,"One prerequisite for offering cyber ranges or training solutions in the context of detection engineering and security monitoring is the collection of real-world malware samples. "),(0,i.kt)("p",null,"To provide high-quality training and realistic experiences, these samples can be used as injects in various training scenarios or for testing detection rules."),(0,i.kt)("p",null,"A common approach is to collect such data manually by running and monitoring malware samples, preferably in a confined environment such as a virtual machine (VM). However, this approach has several drawbacks: it lacks reproducibility under identical experimental conditions and involves repetitive, error-prone tasks (uploading files, running monitoring tools/malware samples, monitoring network traffic, conducting post-analysis, etc.). "),(0,i.kt)("p",null,"Thus, this process is an ideal candidate for automation. Our first motivation for creating this new project is to address these challenges. Our second goal is to provide detection engineers with a reliable way to generate ",(0,i.kt)("strong",{parentName:"p"},"actionable data")," from malware samples."),(0,i.kt)("h1",{id:"the-concept-of-a-kunai-based-sandbox"},"The Concept of a Kunai-Based Sandbox"),(0,i.kt)("p",null,"Malware sample sandboxing is a frequent task performed at various stages of a security alert's lifecycle, from incident/malware triage to more detailed malware analysis. This task is typically supported by numerous tools, ranging from open-source options like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kevoreilly/CAPEv2/"},"Cape Sandbox")," to paid alternatives like ",(0,i.kt)("a",{parentName:"p",href:"https://www.joesandbox.com/#windows"},"Joe Sandbox"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.vmray.com/"},"VMRay"),", or ",(0,i.kt)("a",{parentName:"p",href:"https://any.run/"},"Any Run"),"."),(0,i.kt)("p",null,"While these solutions are excellent in many respects\u2014such as defeating anti-sandboxing techniques and providing deep insight into a sample's capabilities\u2014we believe they are not always the best tools for gathering actionable information for detection engineers. For many organizations, there is no direct mapping between the data collected from malware analysis platforms (sandboxes) and their monitoring systems. As a result, a task that should be simple\u2014building detection rules tailored to an organization\u2019s security monitoring tools\u2014can become challenging."),(0,i.kt)("p",null,"To solve this issue, we propose a simple yet powerful sandboxing infrastructure based on ",(0,i.kt)("a",{parentName:"p",href:"https://www.qemu.org/"},"QEMU")," for virtualization and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kunai-project/kunai"},"Kunai")," for sample monitoring. This infrastructure can serve multiple purposes: analyzing malware samples using the same tools employed for detection and collecting data for use within the NGSOTI project."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9822).Z,width:"850",height:"463"})),(0,i.kt)("h1",{id:"project-status"},"Project Status"),(0,i.kt)("p",null,"The source code for the project is available in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kunai-project/sandbox/"},"Kunai sandbox repository"),". Additionally, our under-construction open dataset, extracted using this sandbox, can be found at ",(0,i.kt)("a",{parentName:"p",href:"https://helga.circl.lu/NGSOTI/malware-dataset"},"NGSOTI malware dataset"),"."),(0,i.kt)("p",null,"Currently, the sandboxing system can run Linux malware samples within a virtual environment, monitor them using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kunai-project/kunai"},"Kunai"),", and capture the network traffic generated by the system. Another key feature of our sandbox is its support for multiple CPU architectures (currently ",(0,i.kt)("strong",{parentName:"p"},"Intel 32/64bits")," and ",(0,i.kt)("strong",{parentName:"p"},"ARM 64bits"),"), enabling the analysis of a broader range of malware samples. We believe ",(0,i.kt)("strong",{parentName:"p"},"ARM")," achitecture support is crucial, as it can be used to analyze malware samples specific to ",(0,i.kt)("strong",{parentName:"p"},"IoT")," or ",(0,i.kt)("strong",{parentName:"p"},"mobile")," (phones, tablets, etc.) devices."),(0,i.kt)("h1",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"While our approach provides a great opportunity for detection engineers to obtain data that is directly usable for creating ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kunai-project/kunai"},"Kunai-based")," detection rules, we must remember that it does not achieve the same level of stealthiness as other sandboxing platforms, which often rely on custom hypervisors. Therefore, our approach should not be considered a replacement for dedicated sandboxing platforms but rather a complement that facilitates detection engineering-related tasks."),(0,i.kt)("h1",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"The NGSOTI project aims to bridge the gap between theoretical knowledge and practical skills for SOC operators by offering realistic, data-driven training experiences. By automating the collection and analysis of malware samples through the Kunai-based sandbox, we provide a straightforward, efficient, and repeatable method for detection engineers to generate actionable insights. This approach is not intended to replace traditional sandboxing but rather to complement it. With support for multiple CPU architectures, including those specific to IoT and mobile devices, the sandbox expands the possibilities for analyzing and generating data from a wider range of malware, enhancing the diversity of scenarios that NGSOTI can offer. As the project progresses, we look forward to further enriching the open dataset and continuing to develop solutions that address the evolving challenges in detection engineering."),(0,i.kt)("h1",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kunai-project/sandbox"},"Kunai project - sandbox")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://helga.circl.lu/NGSOTI/malware-dataset"},"NGSOTI - malware-dataset"))),(0,i.kt)("h1",{id:"funding"},"Funding"),(0,i.kt)("p",null,"The NGSOTI project is dedicated to training the next generation of Security Operation Center (SOC) operators, focusing on the human aspect of cybersecurity. It underscores the significance of providing SOC operators with the necessary skills and open-source tools to address challenges such as detection engineering, incident response, and threat intelligence analysis. Involving key partners such as CIRCL, Restena, Tenzir, and the University of Luxembourg, the project aims to establish a real operational infrastructure for practical training. This initiative integrates academic curricula with industry insights, offering hands-on experience in cyber ranges."),(0,i.kt)("p",null,"NGSOTI is co-funded under Digital Europe Programme (DEP) via the ECCC (European cybersecurity competence network and competence centre)."))}u.isMDXComponent=!0},9822:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sandbox-diagram-406745f357919f0e3820fcbbf1305e0b.png"}}]);