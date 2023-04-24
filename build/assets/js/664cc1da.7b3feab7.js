"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[7491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=a,k=h["".concat(c,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={},o="Accessing the UI thread",s={unversionedId:"guides/basics/accessing-the-ui-thread",id:"version-0.10.19/guides/basics/accessing-the-ui-thread",title:"Accessing the UI thread",description:"A Dispatcher provides services for managing work items on a specific thread. In Avalonia you will usually have only one Dispatcher, the one that handles the UI thread. Whenever you need to update the UI from a different thread than the UI thread, you need to access the UI thread via the running Dispatcher.",source:"@site/versioned_docs/version-0.10.19/guides/basics/accessing-the-ui-thread.md",sourceDirName:"guides/basics",slug:"/guides/basics/accessing-the-ui-thread",permalink:"/docs/0.10.19/guides/basics/accessing-the-ui-thread",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.10.19/guides/basics/accessing-the-ui-thread.md",tags:[],version:"0.10.19",frontMatter:{},sidebar:"guideSidebar",previous:{title:"MVVM Architecture",permalink:"/docs/0.10.19/guides/basics/mvvm"},next:{title:"Running your Avalonia app on a Raspberry Pi with Raspbian Lite",permalink:"/docs/0.10.19/guides/deep-dives/running-on-raspbian-lite-via-drm"}},c={},l=[{value:"Access the UI thread from a different thread",id:"access-the-ui-thread-from-a-different-thread",level:2},{value:"The DispatcherPriority",id:"the-dispatcherpriority",level:2},{value:"Examples",id:"examples",level:2},{value:"Reference",id:"reference",level:2},{value:"Source Code",id:"source-code",level:2}],u={toc:l},h="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"accessing-the-ui-thread"},"Accessing the UI thread"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Dispatcher")," provides services for managing work items on a specific thread. In Avalonia you will usually have only one ",(0,a.kt)("inlineCode",{parentName:"p"},"Dispatcher"),", the one that handles the UI thread. Whenever you need to update the UI from a different thread than the UI thread, you need to access the UI thread via the running ",(0,a.kt)("inlineCode",{parentName:"p"},"Dispatcher"),"."),(0,a.kt)("h2",{id:"access-the-ui-thread-from-a-different-thread"},"Access the UI thread from a different thread"),(0,a.kt)("p",null,"You can access the current UI thread via ",(0,a.kt)("inlineCode",{parentName:"p"},"Dispatcher.UIThread"),". You can either use ",(0,a.kt)("inlineCode",{parentName:"p"},"Post")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"InvokeAsync"),", if you want to run a job on the UI thread. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"Post")," when you just want to start a job, but you don't need to wait for the job to be finished and you don't need the result. If you need to wait for the result, then use ",(0,a.kt)("inlineCode",{parentName:"p"},"InvokeAsync")," instead. "),(0,a.kt)("h2",{id:"the-dispatcherpriority"},"The DispatcherPriority"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"DispatcherPriority")," specifies at which priority the given job should be queued. For possible values please refer to the ",(0,a.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Threading/DispatcherPriority/"},"API-Reference")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"In the below example we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"TextBlock")," which shows the result and a ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," which is used to start our work. "),(0,a.kt)("p",null,"Our view looks like this: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<StackPanel>\n  <TextBlock x:Name="TextBlock_Result" />\n  <Button Content="Run long running process" Click="Button_OnClick" />\n</StackPanel>\n')),(0,a.kt)("p",null,"The long running task looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'async Task LongRunningTask()\n{\n    // Do some work\n    this.FindControl<TextBlock>("TextBlock_Result").Text = "I\'m working ...";\n    await Task.Delay(2000);\n    this.FindControl<TextBlock>("TextBlock_Result").Text = "Done";\n}\n')),(0,a.kt)("p",null,"Finally we can run the long running task as shown below: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"private void Button_OnClick(object sender, RoutedEventArgs e)\n{\n    // Start the job and return immediately\n    Dispatcher.UIThread.Post(() => LongRunningTask(), DispatcherPriority.Background);\n}\n")),(0,a.kt)("p",null,"if we want to get the result to work with it further, we need to change the long running task to return the result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'async Task<string> LongRunningTask()\n{\n    // Do some work\n    this.FindControl<TextBlock>("TextBlock_Result").Text = "I\'m working ...";\n    await Task.Delay(2000);\n    this.FindControl<TextBlock>("TextBlock_Result").Text = "Done";\n    \n    // return a result\n    return "Success";\n}\n')),(0,a.kt)("p",null,"We can use the result now: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"private async void Button_OnClick(object sender, RoutedEventArgs e)\n{\n    // Run the job\n    var result = await Dispatcher.UIThread.InvokeAsync(LongRunningTask, DispatcherPriority.Background);\n    \n    // Work with the result\n    Debug.WriteLine(result);\n}\n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://reference.avaloniaui.net/api/Avalonia.Threading/Dispatcher/"},"Dispatcher")),(0,a.kt)("h2",{id:"source-code"},"Source Code"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/Avalonia/blob/master/src/Avalonia.Base/Threading/Dispatcher.cs"},"Dispatcher.cs")))}p.isMDXComponent=!0}}]);