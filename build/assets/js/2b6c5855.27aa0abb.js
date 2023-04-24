"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[4061],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return a?i.createElement(h,o(o({ref:t},c),{},{components:a})):i.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8118:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=a(7462),n=(a(7294),a(3905));const r={description:"Understanding the Model-View-ViewModel architectural pattern."},o="MVVM Architecture",l={unversionedId:"guides/basics/mvvm",id:"version-0.10.19/guides/basics/mvvm",title:"MVVM Architecture",description:"Understanding the Model-View-ViewModel architectural pattern.",source:"@site/versioned_docs/version-0.10.19/guides/basics/mvvm.md",sourceDirName:"guides/basics",slug:"/guides/basics/mvvm",permalink:"/docs/0.10.19/guides/basics/mvvm",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.10.19/guides/basics/mvvm.md",tags:[],version:"0.10.19",frontMatter:{description:"Understanding the Model-View-ViewModel architectural pattern."},sidebar:"guideSidebar",previous:{title:"Code-behind",permalink:"/docs/0.10.19/guides/basics/code-behind"},next:{title:"Accessing the UI thread",permalink:"/docs/0.10.19/guides/basics/accessing-the-ui-thread"}},s={},d=[{value:'When to use MVVM <a href="#when-to-use-mvvm" id="when-to-use-mvvm"></a>',id:"when-to-use-mvvm-",level:2},{value:'Views and ViewModels <a href="#views-and-viewmodels" id="views-and-viewmodels"></a>',id:"views-and-viewmodels-",level:2},{value:'Models <a href="#models" id="models"></a>',id:"models-",level:2},{value:'Services <a href="#services" id="services"></a>',id:"services-",level:2},{value:'Frameworks <a href="#frameworks" id="frameworks"></a>',id:"frameworks-",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"mvvm-architecture"},"MVVM Architecture"),(0,n.kt)("p",null,"The Model-View-ViewModel pattern (MVVM) is a common way of structuring a UI application. It takes advantage of Avalonia's ",(0,n.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/data-binding"},"binding")," system to separate the logic of the application from the display of the application."),(0,n.kt)("p",null,"MVVM might be overkill for a simple application, but as applications grow over time, they usually reach a point where tracking logic in ",(0,n.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/guides/basics/code-behind"},"code-behind")," becomes problematic for two main reasons:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The interactions between UI components becomes overly complicated and error-prone"),(0,n.kt)("li",{parentName:"ul"},"It's very difficult to unit test code in code-behind")),(0,n.kt)("p",null,"MVVM solves this by abstracting the user interface into regular .NET classes that can be unit tested like any other classes."),(0,n.kt)("p",null,"This is intended as a brief introduction to MVVM, there are many resources online that go into this subject in more depth."),(0,n.kt)("h2",{id:"when-to-use-mvvm-"},"When to use MVVM ",(0,n.kt)("a",{href:"#when-to-use-mvvm",id:"when-to-use-mvvm"})),(0,n.kt)("p",null,"First of all, MVVM has overhead in terms of complexity."),(0,n.kt)("p",null,"Because the advantages of using the MVVM pattern usually only become apparent when an application becomes more complex, it is often difficult to understand from simple examples ",(0,n.kt)("em",{parentName:"p"},"why")," MVVM should be used. Indeed if your application is going to remain small, using code-behind may well be easier to understand and maintain."),(0,n.kt)("p",null,"Many people prefer to start off their application using code-behind and once this starts proving problematic, refactor to use the MVVM pattern. This step usually happens while the application is relatively simple so generally doesn't take too much time."),(0,n.kt)("h2",{id:"views-and-viewmodels-"},"Views and ViewModels ",(0,n.kt)("a",{href:"#views-and-viewmodels",id:"views-and-viewmodels"})),(0,n.kt)("p",null,"When we talk about the MVVM pattern, the most important parts are the ",(0,n.kt)("strong",{parentName:"p"},"View")," layer and the ",(0,n.kt)("strong",{parentName:"p"},"ViewModel")," layer. Views are usually implemented as ",(0,n.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/controls/window"},(0,n.kt)("inlineCode",{parentName:"a"},"Window")),"s and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/controls/usercontrol"},(0,n.kt)("inlineCode",{parentName:"a"},"UserControl")),"s while ViewModels are .NET classes."),(0,n.kt)("p",null,"One way to imagine an MVVM application is to imagine these two layers as hovering over one another, connected by bindings:"),(0,n.kt)("p",null,"The above example has, at the View layer:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("inlineCode",{parentName:"li"},"MainWindow")," which is an Avalonia ",(0,n.kt)("inlineCode",{parentName:"li"},"Window")," containing;"),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("inlineCode",{parentName:"li"},"Document")," which is an Avalonia ",(0,n.kt)("inlineCode",{parentName:"li"},"UserControl")," containing;"),(0,n.kt)("li",{parentName:"ul"},"Two ",(0,n.kt)("inlineCode",{parentName:"li"},"TextBox"),"es: ",(0,n.kt)("inlineCode",{parentName:"li"},"Name")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Address")),(0,n.kt)("li",{parentName:"ul"},"Two ",(0,n.kt)("inlineCode",{parentName:"li"},"Button"),"s: ",(0,n.kt)("inlineCode",{parentName:"li"},"OK")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Cancel")),(0,n.kt)("li",{parentName:"ul"},"Various bindings, indicated by arrows")),(0,n.kt)("p",null,"At the ViewModel layer there are .NET classes which mirror the view layer:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("inlineCode",{parentName:"li"},"MainWindowViewModel")," which has a property containing;"),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("inlineCode",{parentName:"li"},"DocumentViewModel")," which has;"),(0,n.kt)("li",{parentName:"ul"},"Two ",(0,n.kt)("inlineCode",{parentName:"li"},"string")," properties: ",(0,n.kt)("inlineCode",{parentName:"li"},"Name")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Address")),(0,n.kt)("li",{parentName:"ul"},"Two methods: ",(0,n.kt)("inlineCode",{parentName:"li"},"Ok")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Cancel"))),(0,n.kt)("p",null,"The ViewModel layer knows nothing of the view layer, so it is ",(0,n.kt)("em",{parentName:"p"},"independent")," of Avalonia. Each View usually has a corresponding ViewModel which contains all of the logic for the View. The View layer is connected to the ViewModel layer by bindings. Because the ViewModel layer is independent of Avalonia, it can be unit tested like any other code."),(0,n.kt)("h2",{id:"models-"},"Models ",(0,n.kt)("a",{href:"#models",id:"models"})),(0,n.kt)("p",null,"The Model layer is the lowest layer in an MVVM application. Models usually represent data read from a database, or classes from a low-level library which implements the business logic of the application. The Model layer will be very specific to each application."),(0,n.kt)("p",null,"An example of a model might be a table row read from a database using Entity Framework."),(0,n.kt)("h2",{id:"services-"},"Services ",(0,n.kt)("a",{href:"#services",id:"services"})),(0,n.kt)("p",null,"In addition, most applications will add ",(0,n.kt)("em",{parentName:"p"},"services")," to this mix, which usually implement the reading and writing of models and other application-specific logic."),(0,n.kt)("h2",{id:"frameworks-"},"Frameworks ",(0,n.kt)("a",{href:"#frameworks",id:"frameworks"})),(0,n.kt)("p",null,"There are a number of frameworks designed to help write applications using the MVVM pattern. ",(0,n.kt)("a",{parentName:"p",href:"https://reactiveui.net"},"ReactiveUI")," is one of the most popular and has support for Avalonia which can be added via the ",(0,n.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Avalonia.ReactiveUI/"},"Avalonia.ReactiveUI NuGet package"),"."))}m.isMDXComponent=!0}}]);