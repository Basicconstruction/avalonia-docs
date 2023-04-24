"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[3599],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return o?n.createElement(m,i(i({ref:t},p),{},{components:o})):n.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},8139:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={},i="Types of Control",l={unversionedId:"authoring-controls/types-of-control",id:"version-11.0.0/authoring-controls/types-of-control",title:"Types of Control",description:"If you want to create your own controls, there are three main categories of control in Avalonia. The first thing to do is choose the category of control that best suits your use-case.",source:"@site/versioned_docs/version-11.0.0/authoring-controls/types-of-control.md",sourceDirName:"authoring-controls",slug:"/authoring-controls/types-of-control",permalink:"/docs/authoring-controls/types-of-control",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-11.0.0/authoring-controls/types-of-control.md",tags:[],version:"11.0.0",frontMatter:{}},s={},c=[{value:'User Controls <a href="#user-controls" id="user-controls"></a>',id:"user-controls-",level:3},{value:'Templated Controls <a href="#templated-controls" id="templated-controls"></a>',id:"templated-controls-",level:3},{value:'Basic Control <a href="#basic-control" id="basic-control"></a>',id:"basic-control-",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"types-of-control"},"Types of Control"),(0,r.kt)("p",null,"If you want to create your own controls, there are three main categories of control in Avalonia. The first thing to do is choose the category of control that best suits your use-case."),(0,r.kt)("h3",{id:"user-controls-"},"User Controls ",(0,r.kt)("a",{href:"#user-controls",id:"user-controls"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"UserControl"),'s are the simplest way to author controls. This type of control is best for "views" or "pages" that are specific to an application. ',(0,r.kt)("inlineCode",{parentName:"p"},"UserControl"),"s are authored in the same way as you would author a ",(0,r.kt)("inlineCode",{parentName:"p"},"Window"),": by creating a new ",(0,r.kt)("inlineCode",{parentName:"p"},"UserControl")," from a template and adding controls to it."),(0,r.kt)("h3",{id:"templated-controls-"},"Templated Controls ",(0,r.kt)("a",{href:"#templated-controls",id:"templated-controls"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TemplatedControl"),"s are best used for generic controls that can be shared among various applications. They are ",(0,r.kt)("em",{parentName:"p"},"lookless")," controls, meaning that they can be restyled for different themes and applications. The majority of standard controls defined by Avalonia fit into this category."),(0,r.kt)("p",null,'{% hint style="info" %}\nIn WPF/UWP you would inherit from the Control class to create a new templated control, but in Avalonia you should inherit from ',(0,r.kt)("inlineCode",{parentName:"p"},"TemplatedControl."),"\n{% endhint %}"),(0,r.kt)("p",null,'{% hint style="info" %}\nIf you want to provide a ',(0,r.kt)("inlineCode",{parentName:"p"},"Style")," for your ",(0,r.kt)("inlineCode",{parentName:"p"},"TemplatedControl")," in a separate file, remember to include this file in your Application via ",(0,r.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/styling/styles"},(0,r.kt)("inlineCode",{parentName:"a"},"StyleInclude")),".\n{% endhint %}"),(0,r.kt)("h3",{id:"basic-control-"},"Basic Control ",(0,r.kt)("a",{href:"#basic-control",id:"basic-control"})),(0,r.kt)("p",null,"Basic ",(0,r.kt)("inlineCode",{parentName:"p"},"Control"),"s are the foundation of user interfaces - they draw themselves using geometry by overriding the ",(0,r.kt)("inlineCode",{parentName:"p"},"Visual.Render")," method. Controls such as ",(0,r.kt)("inlineCode",{parentName:"p"},"TextBlock")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," fall into this category."),(0,r.kt)("p",null,'{% hint style="info" %}\nIn WPF/UWP you would inherit from the FrameworkElement class to create a new basic control, but in Avalonia you should inherit from ',(0,r.kt)("inlineCode",{parentName:"p"},"Control."),"\n{% endhint %}"))}d.isMDXComponent=!0}}]);