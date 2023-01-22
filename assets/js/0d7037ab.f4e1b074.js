"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8571],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(7294);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,s=function(e,t){if(null==e)return{};var o,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var i=r.createContext({}),c=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),d=s,m=u["".concat(i,".").concat(d)]||u[d]||h[d]||a;return o?r.createElement(m,n(n({ref:t},p),{},{components:o})):r.createElement(m,n({ref:t},p))}));function m(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=o.length,n=new Array(a);n[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:s,n[1]=l;for(var c=2;c<a;c++)n[c]=o[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7675:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=o(7462),s=(o(7294),o(3905));const a={sidebar_position:1,title:"Threadpool Executor vs Processpool Executor",tags:["multi-threading","python","threadpool","processpool"]},n=void 0,l={unversionedId:"Operating Systems stuff/ProcessPoolExecutor-vs-ThreadPoolExecutor",id:"Operating Systems stuff/ProcessPoolExecutor-vs-ThreadPoolExecutor",title:"Threadpool Executor vs Processpool Executor",description:"ThreadPool Executor vs ProcessPool Executor",source:"@site/tech-bytes/Operating Systems stuff/ProcessPoolExecutor-vs-ThreadPoolExecutor.md",sourceDirName:"Operating Systems stuff",slug:"/Operating Systems stuff/ProcessPoolExecutor-vs-ThreadPoolExecutor",permalink:"/tech-bytes/Operating Systems stuff/ProcessPoolExecutor-vs-ThreadPoolExecutor",draft:!1,tags:[{label:"multi-threading",permalink:"/tech-bytes/tags/multi-threading"},{label:"python",permalink:"/tech-bytes/tags/python"},{label:"threadpool",permalink:"/tech-bytes/tags/threadpool"},{label:"processpool",permalink:"/tech-bytes/tags/processpool"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Threadpool Executor vs Processpool Executor",tags:["multi-threading","python","threadpool","processpool"]},sidebar:"tutorialSidebar",previous:{title:"Operating Systems Stuffs",permalink:"/tech-bytes/category/operating-systems-stuffs"},next:{title:"NVM Essentials",permalink:"/tech-bytes/NVM essentials"}},i={},c=[{value:"ThreadPool Executor vs ProcessPool Executor",id:"threadpool-executor-vs-processpool-executor",level:2},{value:"<code>ProcessPoolExecutor</code>",id:"processpoolexecutor",level:3},{value:"<code>ThreadPoolExecutor</code>",id:"threadpoolexecutor",level:3},{value:"Difference",id:"difference",level:3},{value:"Threadpool Executor",id:"threadpool-executor",level:2},{value:"Processpool Executor",id:"processpool-executor",level:2},{value:"When should we use Threadpool or Processpool?",id:"when-should-we-use-threadpool-or-processpool",level:2},{value:"Notes",id:"notes",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"threadpool-executor-vs-processpool-executor"},"ThreadPool Executor vs ProcessPool Executor"),(0,s.kt)("p",null,"If you just want to know the difference? Here it is ..."),(0,s.kt)("h3",{id:"processpoolexecutor"},(0,s.kt)("inlineCode",{parentName:"h3"},"ProcessPoolExecutor")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Runs each of your workers in its own separate child process."),(0,s.kt)("li",{parentName:"ul"},"Each separate child process has its own separate Global Interpreter Lock, so if the task you want to execute is\nCPU-bound, using 5 child processes can make things run almost 5x as fast."),(0,s.kt)("li",{parentName:"ul"},"It is possible to share data between processes. However, to do this, the state must be serialized and transmitted\nbetween processes. This process is called inter-process communication. There are certain limitations on what data\nand state can be shared and this adds overhead to sharing data."),(0,s.kt)("li",{parentName:"ul"},"TLDR - Sharing state between processes is harder and heavyweight."),(0,s.kt)("li",{parentName:"ul"},"Create 10s of Workers, not 100s or 1000s of tasks.")),(0,s.kt)("h3",{id:"threadpoolexecutor"},(0,s.kt)("inlineCode",{parentName:"h3"},"ThreadPoolExecutor")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Runs each of your workers in separate threads within the main process."),(0,s.kt)("li",{parentName:"ul"},"Mainly used for I/O bound operations like Read/Write or network requests or there might be global variables or data\nshared via function arguments. Sharing data between Threads is straightforward."),(0,s.kt)("li",{parentName:"ul"},"Multiple threads within a ",(0,s.kt)("inlineCode",{parentName:"li"},"ThreadPoolExecutor")," are subject to the Global Interpreter Lock.\nThis lock uses synchronization to ensure that only one thread of execution can execute instructions at a time\nwithin a Python process which means only ",(0,s.kt)("strong",{parentName:"li"},"one")," thread can execute at a time."),(0,s.kt)("li",{parentName:"ul"},"Ability to create 10s to 1,000s workers, not really constrained.")),(0,s.kt)("h3",{id:"difference"},"Difference"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:o(7903).Z,width:"996",height:"354"})),(0,s.kt)("p",null,"If you just want to know the difference, you can stop reading here and but if you want to learn more in detail, read\nfurther!"),(0,s.kt)("h2",{id:"threadpool-executor"},"Threadpool Executor"),(0,s.kt)("p",null,"A Threadpool executor class provides a thread pool in executor. What is a thread pool?\nIt is a group of pre-initiated threads that are on standby and ready to be given work.\nWhen a pool is handed a ",(0,s.kt)("strong",{parentName:"p"},"task"),", it takes a thread from the container, hands it a Task\nit was given and invoke the ",(0,s.kt)("inlineCode",{parentName:"p"},"execute()")," method. Once the execution is complete, the thread\nhands itself back to the pool, putting itself to sleep."),(0,s.kt)("p",null,"Each thread has these features:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Belongs to a process"),(0,s.kt)("li",{parentName:"ul"},"Share the same memory as other threads in the same process (state and data)")),(0,s.kt)("h2",{id:"processpool-executor"},"Processpool Executor"),(0,s.kt)("p",null,"A Processpool Executor class provides a process pool in Python. A process is an instance\nof a computer program.\nThe pool is responsible for "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"When the pool is created, such as when they are needed"),(0,s.kt)("li",{parentName:"ul"},"Also what they should do when they are not being used, such as making them wait without consuming computational\nresources")),(0,s.kt)("h2",{id:"when-should-we-use-threadpool-or-processpool"},"When should we use Threadpool or Processpool?"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"TLDR")," -\nProcesspool is for CPU bound task so you can benefit from multiple CPUs"),(0,s.kt)("p",null,"Threadpool is for I/O bound task so you can benefit from the I/O wait.\nDo not use Threadpool for long running tasks such as monitoring or scheduling."),(0,s.kt)("h3",{id:"notes"},"Notes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/51828790/what-is-the-difference-between-processpoolexecutor-and-threadpoolexecutor"},"https://stackoverflow.com/questions/51828790/what-is-the-difference-between-processpoolexecutor-and-threadpoolexecutor")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://superfastpython.com/threadpoolexecutor-vs-processpoolexecutor/#:~:text=As%20their%20names%20suggest%2C%20the,by%20the%20underlying%20operating%20system"},"https://superfastpython.com/threadpoolexecutor-vs-processpoolexecutor/#:~:text=As%20their%20names%20suggest%2C%20the,by%20the%20underlying%20operating%20system"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://softwareengineering.stackexchange.com/questions/173575/what-is-a-thread-pool"},"https://softwareengineering.stackexchange.com/questions/173575/what-is-a-thread-pool"))))}u.isMDXComponent=!0},7903:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/img-5ea9a471cec31804da4d2730d2c1d342.png"}}]);