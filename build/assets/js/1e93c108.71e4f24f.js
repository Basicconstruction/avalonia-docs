"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[2055],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),y=a,m=u["".concat(p,".").concat(y)]||u[y]||c[y]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4932:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="Defining Properties",l={unversionedId:"authoring-controls/defining-properties",id:"version-0.10.19/authoring-controls/defining-properties",title:"Defining Properties",description:"If you are creating a control, you will want to define properties on your control. You do this by defining AvaloniaPropertys for your control. Avalonia properties consist of two parts: the property definition and the CLR getter/setter for the property.",source:"@site/versioned_docs/version-0.10.19/authoring-controls/defining-properties.md",sourceDirName:"authoring-controls",slug:"/authoring-controls/defining-properties",permalink:"/docs/0.10.19/authoring-controls/defining-properties",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.10.19/authoring-controls/defining-properties.md",tags:[],version:"0.10.19",frontMatter:{}},p={},s=[{value:'Registering Styled Properties <a id="registering-styled-properties"></a>',id:"registering-styled-properties-",level:3},{value:'Using a <code>StyledProperty</code> on Another Class <a id="using-a-styledproperty-on-another-class"></a>',id:"using-a-styledproperty-on-another-class-",level:3},{value:'Readonly Properties <a id="readonly-properties"></a>',id:"readonly-properties-",level:3},{value:'Attached Properties <a id="attached-properties"></a>',id:"attached-properties-",level:3},{value:'Direct AvaloniaProperties <a id="direct-avaloniaproperties"></a>',id:"direct-avaloniaproperties-",level:3},{value:'Using a DirectProperty on Another Class <a id="using-a-directproperty-on-another-class"></a>',id:"using-a-directproperty-on-another-class-",level:3},{value:'When to use a Direct vs a Styled Property <a id="when-to-use-a-direct-vs-a-styled-property"></a>',id:"when-to-use-a-direct-vs-a-styled-property-",level:3},{value:"DataValidation support",id:"datavalidation-support",level:3}],d={toc:s},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"defining-properties"},"Defining Properties"),(0,a.kt)("p",null,"If you are creating a control, you will want to define properties on your control. You do this by defining ",(0,a.kt)("inlineCode",{parentName:"p"},"AvaloniaProperty"),"s for your control. Avalonia properties consist of two parts: the property definition and the CLR getter/setter for the property."),(0,a.kt)("h3",{id:"registering-styled-properties-"},"Registering Styled Properties ",(0,a.kt)("a",{id:"registering-styled-properties"})),(0,a.kt)("p",null,"Unless you have a good reason not to, you should define properties on your control as ",(0,a.kt)("em",{parentName:"p"},"styled properties"),". Styled properties ensure that your property will work correctly with Avalonia's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/styling"},"styling system"),"."),(0,a.kt)("p",null,"You register a styled property by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"AvaloniaProperty.Register")," and storing the result in a ",(0,a.kt)("inlineCode",{parentName:"p"},"static readonly")," field. You then create a standard C","#"," property to access it."),(0,a.kt)("p",null,"Here's how the ",(0,a.kt)("inlineCode",{parentName:"p"},"Border")," control defines its ",(0,a.kt)("inlineCode",{parentName:"p"},"Background")," property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static readonly StyledProperty<Brush> BackgroundProperty =\n    AvaloniaProperty.Register<Border, Brush>(nameof(Background));\n\npublic Brush Background\n{\n    get { return GetValue(BackgroundProperty); }\n    set { SetValue(BackgroundProperty, value); }\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"AvaloniaProperty.Register")," method also accepts a number of other parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaultValue"),": This gives the property a default value. Be sure to only pass value types and immutable types here as passing a reference type will cause the same object to be used on all instances on which the property is registered."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"inherits"),": Specified that the property's default value should come from the parent control."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaultBindingMode"),": The default binding mode for the property. Can be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"OneWay"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"TwoWay"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"OneTime")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"OneWayToSource"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"validate"),": A validation/coercion function of type ",(0,a.kt)("inlineCode",{parentName:"li"},"Func<TOwner, TValue, TValue>"),". The function accepts the instance of the class on which the property is being set and the value and returns the coerced value or throws an exception for an invalid value.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A styled property is analogous to a ",(0,a.kt)("inlineCode",{parentName:"p"},"DependencyProperty")," in other XAML frameworks. ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The naming convention of the property and its backing AvaloniaProperty field is important. The name of the field is always the name of the property, with the suffix Property appended.")),(0,a.kt)("h3",{id:"using-a-styledproperty-on-another-class-"},"Using a ",(0,a.kt)("inlineCode",{parentName:"h3"},"StyledProperty")," on Another Class ",(0,a.kt)("a",{id:"using-a-styledproperty-on-another-class"})),(0,a.kt)("p",null,"Sometimes the property you want to add to your control already exists on another control, ",(0,a.kt)("inlineCode",{parentName:"p"},"Background")," being a good example. To register a property defined on another control, you call ",(0,a.kt)("inlineCode",{parentName:"p"},"StyledProperty.AddOwner"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static readonly StyledProperty<IBrush> BackgroundProperty =\n    Border.BackgroundProperty.AddOwner<Panel>();\n\npublic Brush Background\n{\n    get { return GetValue(BackgroundProperty); }\n    set { SetValue(BackgroundProperty, value); }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Unlike WPF/UWP, a property must be registered on a class otherwise it cannot be set on an object of that class. This may change in future, however.")),(0,a.kt)("h3",{id:"readonly-properties-"},"Readonly Properties ",(0,a.kt)("a",{id:"readonly-properties"})),(0,a.kt)("p",null,"To create a readonly property you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"AvaloniaProperty.RegisterDirect")," method. Here is how ",(0,a.kt)("inlineCode",{parentName:"p"},"Visual")," registers the readonly ",(0,a.kt)("inlineCode",{parentName:"p"},"Bounds")," property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static readonly DirectProperty<Visual, Rect> BoundsProperty =\n    AvaloniaProperty.RegisterDirect<Visual, Rect>(\n        nameof(Bounds),\n        o => o.Bounds);\n\nprivate Rect _bounds;\n\npublic Rect Bounds\n{\n    get { return _bounds; }\n    private set { SetAndRaise(BoundsProperty, ref _bounds, value); }\n}\n")),(0,a.kt)("p",null,"As can be seen, readonly properties are stored as a field on the object. When registering the property, a getter is passed which is used to access the property value through ",(0,a.kt)("inlineCode",{parentName:"p"},"GetValue")," and then ",(0,a.kt)("inlineCode",{parentName:"p"},"SetAndRaise")," is used to notify listeners to changes to the property."),(0,a.kt)("h3",{id:"attached-properties-"},"Attached Properties ",(0,a.kt)("a",{id:"attached-properties"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/data-binding/creating-and-binding-attached-properties"},"Attached properties")," are defined almost identically to styled properties except that they are registered using the ",(0,a.kt)("inlineCode",{parentName:"p"},"RegisterAttached")," method and their accessors are defined as static methods."),(0,a.kt)("p",null,"Here's how ",(0,a.kt)("inlineCode",{parentName:"p"},"Grid")," defines its ",(0,a.kt)("inlineCode",{parentName:"p"},"Grid.Column")," attached property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public static readonly AttachedProperty<int> ColumnProperty =\n    AvaloniaProperty.RegisterAttached<Grid, Control, int>("Column");\n\npublic static int GetColumn(Control element)\n{\n    return element.GetValue(ColumnProperty);\n}\n\npublic static void SetColumn(Control element, int value)\n{\n    element.SetValue(ColumnProperty, value);\n}\n')),(0,a.kt)("h3",{id:"direct-avaloniaproperties-"},"Direct AvaloniaProperties ",(0,a.kt)("a",{id:"direct-avaloniaproperties"})),(0,a.kt)("p",null,"As its name suggests, ",(0,a.kt)("inlineCode",{parentName:"p"},"RegisterDirect")," isn't just used for registering readonly properties. You can also pass a ",(0,a.kt)("em",{parentName:"p"},"setter")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"RegisterDirect")," to expose a standard C","#"," property as a Avalonia property."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"StyledProperty")," which is registered using ",(0,a.kt)("inlineCode",{parentName:"p"},"AvaloniaProperty.Register")," maintains a prioritized list of values and bindings that allow styles to work. However, this is overkill for many properties, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemsControl.Items")," - this will never be styled and the overhead involved with styled properties is unnecessary."),(0,a.kt)("p",null,"Here is how ",(0,a.kt)("inlineCode",{parentName:"p"},"ItemsControl.Items")," is registered:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static readonly DirectProperty<ItemsControl, IEnumerable> ItemsProperty =\n    AvaloniaProperty.RegisterDirect<ItemsControl, IEnumerable>(\n        nameof(Items),\n        o => o.Items,\n        (o, v) => o.Items = v);\n\nprivate IEnumerable _items = new AvaloniaList<object>();\n\npublic IEnumerable Items\n{\n    get { return _items; }\n    set { SetAndRaise(ItemsProperty, ref _items, value); }\n}\n")),(0,a.kt)("p",null,"Direct properties are a lightweight version of styled properties that support the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AvaloniaObject.GetValue"),(0,a.kt)("li",{parentName:"ul"},"AvaloniaObject.SetValue for non-readonly properties"),(0,a.kt)("li",{parentName:"ul"},"PropertyChanged"),(0,a.kt)("li",{parentName:"ul"},"Binding ","(","only with LocalValue priority",")"),(0,a.kt)("li",{parentName:"ul"},"GetObservable"),(0,a.kt)("li",{parentName:"ul"},"AddOwner"),(0,a.kt)("li",{parentName:"ul"},"Metadata")),(0,a.kt)("p",null,"They don't support the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Validation/Coercion ","(","although this could be done in the property setter",")"),(0,a.kt)("li",{parentName:"ul"},"Overriding default values."),(0,a.kt)("li",{parentName:"ul"},"Inherited values")),(0,a.kt)("h3",{id:"using-a-directproperty-on-another-class-"},"Using a DirectProperty on Another Class ",(0,a.kt)("a",{id:"using-a-directproperty-on-another-class"})),(0,a.kt)("p",null,"In the same way that you can call ",(0,a.kt)("inlineCode",{parentName:"p"},"AddOwner")," on a styled property, you can also add an owner to a direct property. Because direct properties reference fields on the control, you must also add a field for the property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public static readonly DirectProperty<MyControl, IEnumerable> ItemsProperty =\n    ItemsControl.ItemsProperty.AddOwner<MyControl>(\n        o => o.Items,\n        (o, v) => o.Items = v);\n\nprivate IEnumerable _items = new AvaloniaList<object>();\n\npublic IEnumerable Items\n{\n    get { return _items; }\n    set { SetAndRaise(ItemsProperty, ref _items, value); }\n}\n")),(0,a.kt)("h3",{id:"when-to-use-a-direct-vs-a-styled-property-"},"When to use a Direct vs a Styled Property ",(0,a.kt)("a",{id:"when-to-use-a-direct-vs-a-styled-property"})),(0,a.kt)("p",null,"In general you should declare your properties as styled properties. However, direct properties have advantages and disadvantages:"),(0,a.kt)("p",null,"Pros:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No additional object is allocated per-instance for the property"),(0,a.kt)("li",{parentName:"ul"},"Property getter is a standard C","#"," property getter"),(0,a.kt)("li",{parentName:"ul"},"Property setter is a standard C","#"," property setter that raises an event."),(0,a.kt)("li",{parentName:"ul"},"You can add ",(0,a.kt)("a",{parentName:"li",href:"../data-binding/data-validation.md"},"data validation")," support")),(0,a.kt)("p",null,"Cons:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cannot inherit value from parent control"),(0,a.kt)("li",{parentName:"ul"},"Cannot take advantage of Avalonia's styling system"),(0,a.kt)("li",{parentName:"ul"},"Property value is a field and as such is allocated whether the property is set on the object or not")),(0,a.kt)("p",null,"So use direct properties when you have the following requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Property will not need to be styled"),(0,a.kt)("li",{parentName:"ul"},"Property will usually or always have a value")),(0,a.kt)("h3",{id:"datavalidation-support"},"DataValidation support"),(0,a.kt)("p",null,"If you want to allow a property to validate the data and show validation error messages, the property must be implemented as a ",(0,a.kt)("inlineCode",{parentName:"p"},"DirectProperty")," and validation support must be enabled (",(0,a.kt)("inlineCode",{parentName:"p"},"enableDataValidation: true"),").  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example of a property with DataValidation enabled")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static readonly DirectProperty<MyControl, int> ValueProperty =\n    AvaloniaProperty.RegisterDirect<MyControl, int>(\n        nameof(Value),\n        o => o.Value,\n        (o, v) => o.Value = v, \n        enableDataValidation: true);\n")),(0,a.kt)("p",null,"If you want to ",(0,a.kt)("a",{parentName:"p",href:"#using-a-directproperty-on-another-class"},"re-use a direct property of another class")," you can also enable data validation. In this case use ",(0,a.kt)("inlineCode",{parentName:"p"},"AddOwnerWithDataValidation"),". "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example: TextBox.TextProperty property re-uses TextBlock.TextProperty but adds validation support")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"public static readonly DirectProperty<TextBox, string?> TextProperty =\n    TextBlock.TextProperty.AddOwnerWithDataValidation<TextBox>(\n        o => o.Text,\n        (o, v) => o.Text = v,\n        defaultBindingMode: BindingMode.TwoWay,\n        enableDataValidation: true);\n")))}c.isMDXComponent=!0}}]);