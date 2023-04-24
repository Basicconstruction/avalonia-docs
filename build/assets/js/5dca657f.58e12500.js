"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={description:"GET STARTED"},a="\u26a1 The Design Preview",s={unversionedId:"get-started/the-design-preview",id:"version-11.0.0/get-started/the-design-preview",title:"\u26a1 The Design Preview",description:"GET STARTED",source:"@site/versioned_docs/version-11.0.0/get-started/the-design-preview.md",sourceDirName:"get-started",slug:"/get-started/the-design-preview",permalink:"/docs/get-started/the-design-preview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-11.0.0/get-started/the-design-preview.md",tags:[],version:"11.0.0",frontMatter:{description:"GET STARTED"},sidebar:"documentationSidebar",previous:{title:"\u26a1 Input Controls",permalink:"/docs/get-started/input-controls"},next:{title:"\u26a1 Respond to an Event",permalink:"/docs/get-started/respond-to-an-event"}},p={},l=[],c={toc:l},d="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-the-design-preview"},"\u26a1 The Design Preview"),(0,o.kt)("p",null,"On this page, you will explore the attributes of the window; and then use some of them to adjust the size of the window when it is shown in the preview pane."),(0,o.kt)("p",null,"Examine the XAML for the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Window>")," tag. It will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"\n        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n        mc:Ignorable="d" d:DesignWidth="400" d:DesignHeight="550"\n        x:Class="GetStartedApp.MainWindow"\n        Title="GetStartedApp">\n')),(0,o.kt)("p",null,"The window tag starts by defining some of the XML namespaces that ",(0,o.kt)("em",{parentName:"p"},"Avalonia UI")," uses. The aliases 'x', 'd' and 'mc' are used."," "),(0,o.kt)("p",null,"The design namespace 'd' allows the design-time attributes ",(0,o.kt)("inlineCode",{parentName:"p"},"d:DesignWidth")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"d:DesignHeight"),"to be set. In the above code sample, these have been set to make the preview look more like a mobile (portrait orientation) display. "," "),(0,o.kt)("p",null,"With these attributes set, the preview of the window now looks like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(728).Z,width:"459",height:"596"})),(0,o.kt)("p",null,"On the next page, you will see how to add some action to the app by responding to the button click event. "," "))}u.isMDXComponent=!0},728:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image (64)-49d00a06ec429a9ebae420d5671b4112.png"}}]);