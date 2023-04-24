"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[1149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=l,g=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={},o="Developer Tools",i={unversionedId:"getting-started/developer-tools",id:"version-0.10.19/getting-started/developer-tools",title:"Developer Tools",description:"Avalonia has an inbuilt DevTools window which is enabled by calling the attached AttachDevTools() method in a Window constructor. The default templates have this enabled when the program is compiled in DEBUG mode:",source:"@site/versioned_docs/version-0.10.19/getting-started/developer-tools.md",sourceDirName:"getting-started",slug:"/getting-started/developer-tools",permalink:"/docs/0.10.19/getting-started/developer-tools",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.10.19/getting-started/developer-tools.md",tags:[],version:"0.10.19",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Assets",permalink:"/docs/0.10.19/getting-started/assets"},next:{title:"Logging Errors and Warnings",permalink:"/docs/0.10.19/getting-started/logging-errors-and-warnings"}},s={},p=[{value:"Logical and Visual Trees",id:"logical-and-visual-trees",level:2},{value:"Properties",id:"properties",level:3},{value:"Layout",id:"layout",level:3},{value:"Styles",id:"styles",level:3},{value:"Events",id:"events",level:2},{value:"Console",id:"console",level:2},{value:"Hotkeys",id:"hotkeys",level:2},{value:"Examples",id:"examples",level:2},{value:"Changing a property value",id:"changing-a-property-value",level:3},{value:"Changing layout properties",id:"changing-layout-properties",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"developer-tools"},"Developer Tools"),(0,l.kt)("p",null,"Avalonia has an inbuilt DevTools window which is enabled by calling the attached ",(0,l.kt)("inlineCode",{parentName:"p"},"AttachDevTools()")," method in a ",(0,l.kt)("inlineCode",{parentName:"p"},"Window")," constructor. The default templates have this enabled when the program is compiled in ",(0,l.kt)("inlineCode",{parentName:"p"},"DEBUG")," mode:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public partial class MainWindow : Window\n{\n    public MainWindow()\n    {\n        InitializeComponent();\n    }\n}\n\n// in auto-generated by Avalonia.NameGenerator MainWindow.g.cs:\npartial class MainWindow\n{\n    // ...\n    public void InitializeComponent(bool loadXaml = true, bool attachDevTools = true)\n    {\n        // ...\n#if DEBUG\n        if (attachDevTools)\n        {\n            this.AttachDevTools();\n        }\n#endif\n        // ...\n    }\n}\n")),(0,l.kt)("p",null,"To open the DevTools, press F12, or pass a different ",(0,l.kt)("inlineCode",{parentName:"p"},"Gesture")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"this.AttachDevTools()")," method."),(0,l.kt)("p",null,'{% hint style="info" %}\nFrom release 0.10 to use DevTools, you must add ',(0,l.kt)("inlineCode",{parentName:"p"},"Avalonia.Diagnostics")," nuget package."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Avalonia.Diagnostics --version 0.10.0\n")),(0,l.kt)("p",null,"{% endhint %}"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(6660).Z,width:"2284",height:"1540"})),(0,l.kt)("p",null,"There is a known issue when running under .NET core 2.1 that pressing F12 will cause the program to quit. In this case, either switch to .NET core 2.0 or 3.0+ or change the open gesture to something different, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl+F12"),"."),(0,l.kt)("h2",{id:"logical-and-visual-trees"},"Logical and Visual Trees"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Logical Tree")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Visual Tree")," tabs display the controls in the window's logical and visual trees. Selecting a control will show the properties of that control in the right-hand pane where they can be edited."),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("p",null,"Allows for quickly checking and editing properties of the control. One can also search for properties (by name or by using a regex)."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Column"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Property"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the property")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"Current value of the property")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Type"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of the current value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Priority"),(0,l.kt)("td",{parentName:"tr",align:null},"Priority of the value")))),(0,l.kt)("p",null,"image (24) (1) (1).png](<./img/image (26).png>)"),(0,l.kt)("h3",{id:"layout"},"Layout"),(0,l.kt)("p",null,"Allows for inspecting and editing of common layout properties (",(0,l.kt)("inlineCode",{parentName:"p"},"Margin"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Border")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"Padding"),").\\\nControl size and size constraints are also shown."),(0,l.kt)("p",null,'{% hint style="info" %}\nIf ',(0,l.kt)("inlineCode",{parentName:"p"},"Width")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Height")," are underlined that means there is an active constraint. Hover over the value to see a tooltip containing relevant information.\n{% endhint %}"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4482).Z,width:"499",height:"478"})),(0,l.kt)("h3",{id:"styles"},"Styles"),(0,l.kt)("p",null,"While ",(0,l.kt)("a",{parentName:"p",href:"/docs/0.10.19/getting-started/developer-tools#properties"},"properties")," panel shows currently active values of properties, styles panel shows all values and origin of the value."),(0,l.kt)("p",null,"Additionally one can see all styles that could potentially match this control (by toggling ",(0,l.kt)("inlineCode",{parentName:"p"},"Show inactive")," option)."),(0,l.kt)("p",null,"Current styles can be snap-shotted by either pressing the ",(0,l.kt)("inlineCode",{parentName:"p"},"Snapshot")," button or pressing ",(0,l.kt)("inlineCode",{parentName:"p"},"Alt+S")," while hovering over the target window. Snap-shotting means that styles panel won't update to reflect new state of the control. This is especially useful when troubleshooting problems with ",(0,l.kt)("inlineCode",{parentName:"p"},":pointerover")," or ",(0,l.kt)("inlineCode",{parentName:"p"},":pressed")," selectors."),(0,l.kt)("p",null,'{% hint style="info" %}\nIf setter value is bound to a resource it will be indicated by a circle followed by the resource key.\n{% endhint %}'),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(764).Z,width:"855",height:"533"})),(0,l.kt)("p",null,'{% hint style="info" %}\nIf given value has a strikethrough it means that it is being overridden by a value in style with higher priority.\n{% endhint %}'),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(3495).Z,width:"809",height:"464"})),(0,l.kt)("p",null,"Setters have a context menu that allows for quickly copying names and values to the clipboard."),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(763).Z,width:"594",height:"179"})),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("p",null,"The events tab can be used to track the propagation of ",(0,l.kt)("a",{parentName:"p",href:"../input/"},"events"),". Select the events to track in the left pane, and all events of that type will be shown in the center upper pane. Select one of these events to see the event route."),(0,l.kt)("p",null,'{% hint style="info" %}\nDotted underline under event name or control type indicates that quick navigation is possible.'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Double clicking an event type will select and scroll to the given event type"),(0,l.kt)("li",{parentName:"ul"},"Double clicking a control type (and/or name) will navigate to the visual tree tab and select said control.\n{% endhint %}")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(1796).Z,width:"2005",height:"830"})),(0,l.kt)("h2",{id:"console"},"Console"),(0,l.kt)("p",null,'The console can be shown using the "View" \u2192 "Console" menu. The console implements a C# REPL which can be used to run arbitrary C# code. In a console session, the following predefined variables are available:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"help"),": Displays a help message"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"e"),": The control currently selected in the logical or visual tree"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"root"),": The root of the visual tree")),(0,l.kt)("h2",{id:"hotkeys"},"Hotkeys"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Keys Combination"),(0,l.kt)("th",{parentName:"tr",align:null},"Function"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alt+S"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable Snapshot Styles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alt+D"),(0,l.kt)("td",{parentName:"tr",align:null},"Disable Snapshot Styles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CTRL+Shift"),(0,l.kt)("td",{parentName:"tr",align:null},"Inspect Control over Pointer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CTRL+Alt+F"),(0,l.kt)("td",{parentName:"tr",align:null},"Toggle Popup freeze")))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"changing-a-property-value"},"Changing a property value"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(1860).Z,width:"3285",height:"1167"})),(0,l.kt)("h3",{id:"changing-layout-properties"},"Changing layout properties"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(5779).Z,width:"3285",height:"1167"})))}u.isMDXComponent=!0},5779:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/devtools-change-layout-96099e8dce1440bc57c1db752d65bf73.gif"},1860:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/devtools-change-property-7b4ec184aaaaa019c0f420a0b2889fd5.gif"},6660:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image (23)-c7f4d972e44b32611933eb50f2addb4c.png"},4482:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image (24) (1) (1)-e648d38c08b17113e38de46faf546df1.png"},763:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image (25)-b9c48abf10d1c535e935ee94735a9161.png"},764:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image (27)-8283f0e0dd08f87f7ecb8bcf0d3b9ba9.png"},3495:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image (28)-d9a2de44b287444003a84816cd3db47b.png"},1796:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image (29)-6d7d3b8388174cf1b5d8b6f1b3225505.png"}}]);