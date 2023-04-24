"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[5374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Welcome!",sidebar_position:0},i="Welcome",l={unversionedId:"welcome",id:"version-0.10.19/welcome",title:"Welcome",description:"Welcome to the documentation for Avalonia, a cross-platform .NET framework for building beautiful, modern graphical user interfaces (GUIs). With Avalonia, you can create native applications for Windows, macOS, Linux, iOS, Android, and WebAssembly, all from a single codebase.",source:"@site/versioned_docs/version-0.10.19/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/docs/0.10.19/welcome",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.10.19/welcome.md",tags:[],version:"0.10.19",sidebarPosition:0,frontMatter:{sidebar_label:"Welcome!",sidebar_position:0}},s={},p=[{value:"\ud83d\udcbb Supported .NET Versions",id:"-supported-net-versions",level:2},{value:"\ud83d\udcf1 Supported Platforms",id:"-supported-platforms",level:2},{value:"\ud83d\udee0 Supported Development Environments",id:"-supported-development-environments",level:2},{value:"\ud83d\ude4b\u200d\u2642\ufe0f Getting Help",id:"\ufe0f-getting-help",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome"},"Welcome"),(0,o.kt)("p",null,"Welcome to the documentation for Avalonia, a cross-platform .NET framework for building beautiful, modern graphical user interfaces (GUIs). With Avalonia, you can create native applications for Windows, macOS, Linux, iOS, Android, and WebAssembly, all from a single codebase."),(0,o.kt)("h2",{id:"-supported-net-versions"},"\ud83d\udcbb Supported .NET Versions"),(0,o.kt)("p",null,"Avalonia is compatible with all platforms that support .NET Standard 2.0. You can find more information on .NET Standard versions ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/standard/net-standard?tabs=net-standard-2-0#select-net-standard-version"},"here"),"."),(0,o.kt)("h2",{id:"-supported-platforms"},"\ud83d\udcf1 Supported Platforms"),(0,o.kt)("p",null,"Avalonia has official support for the following platforms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows 8 and higher (although it does work on Windows 7 as well)"),(0,o.kt)("li",{parentName:"ul"},"macOS High Sierra 10.13 and higher")),(0,o.kt)("p",null,"On Linux, Avalonia is supported on the following distributions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Debian 9 (Stretch) and higher"),(0,o.kt)("li",{parentName:"ul"},"Ubuntu 16.04 and higher"),(0,o.kt)("li",{parentName:"ul"},"Fedora 30 and higher")),(0,o.kt)("h2",{id:"-supported-development-environments"},"\ud83d\udee0 Supported Development Environments"),(0,o.kt)("p",null,"Avalonia has excellent support for XAML development with IntelliSense in the following environments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Visual Studio 2017 and higher, including the Avalonia Visual Designer"),(0,o.kt)("li",{parentName:"ul"},"JetBrains Rider 2020.3 and higher")),(0,o.kt)("p",null,"You can find instructions on how to install the Avalonia extension for Visual Studio ",(0,o.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/getting-started/ide-support"},"here"),". For JetBrains Rider setup, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/getting-started/ide-support/jetbrains-rider-setup"},"these instructions"),"."),(0,o.kt)("h2",{id:"\ufe0f-getting-help"},"\ud83d\ude4b\u200d\u2642\ufe0f Getting Help"),(0,o.kt)("p",null,"If you encounter any issues or bugs with Avalonia, please open a new issue on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia"},"GitHub"),". Our active developer community on ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/Avalonia"},"Telegram")," is also a great resource for help with your projects."),(0,o.kt)("p",null,"In addition to community support, we offer a range of commercial support plans that provide priority assistance from the core contributors. You can learn more about these plans on ",(0,o.kt)("a",{parentName:"p",href:"https://avaloniaui.net/Support"},"our website"),"."))}d.isMDXComponent=!0}}]);