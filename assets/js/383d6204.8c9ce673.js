"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3373],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>u});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(i),h=a,u=m["".concat(c,".").concat(h)]||m[h]||d[h]||r;return i?n.createElement(u,s(s({ref:t},p),{},{components:i})):n.createElement(u,s({ref:t},p))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,s=new Array(r);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<r;l++)s[l]=i[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},44617:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=i(87462),a=(i(67294),i(3905));const r={sidebar_label:"Introduction",sidebar_position:0},s="Plugins Introduction",o={unversionedId:"plugins/intro",id:"version-4.1/plugins/intro",title:"Plugins Introduction",description:"The library provides a rich set of charting capabilities out of the box, but",source:"@site/versioned_docs/version-4.1/plugins/intro.md",sourceDirName:"plugins",slug:"/plugins/intro",permalink:"/lightweight-charts/docs/plugins/intro",draft:!1,tags:[],version:"4.1",sidebarPosition:0,frontMatter:{sidebar_label:"Introduction",sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Working with time zones",permalink:"/lightweight-charts/docs/time-zones"},next:{title:"Series Primitives",permalink:"/lightweight-charts/docs/plugins/series-primitives"}},c={},l=[{value:"Custom Series",id:"custom-series",level:2},{value:"Adding a custom series to a chart",id:"adding-a-custom-series-to-a-chart",level:3},{value:"Drawing Primitives",id:"drawing-primitives",level:2},{value:"Adding a primitive to an existing series",id:"adding-a-primitive-to-an-existing-series",level:3},{value:"Adding a primitive to the chart instead of a series",id:"adding-a-primitive-to-the-chart-instead-of-a-series",level:3},{value:"Examples",id:"examples",level:2}],p={toc:l},m="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plugins-introduction"},"Plugins Introduction"),(0,a.kt)("p",null,"The library provides a rich set of charting capabilities out of the box, but\ndevelopers can also extend its functionality by building custom plugins."),(0,a.kt)("p",null,"Plugins in Lightweight Charts\u2122\ufe0f come in two types:\n",(0,a.kt)("a",{parentName:"p",href:"#custom-series"},"custom series")," and ",(0,a.kt)("a",{parentName:"p",href:"#drawing-primitives"},"drawing primitives"),".\nCustom series allow developers to define new types of series, while drawing\nprimitives enable the creation of custom visualizations, drawing tools, and\nchart annotations (and more) which can be attached to an existing series."),(0,a.kt)("admonition",{title:"Picking between the Custom Series and Drawing Primitives",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In the majority of cases you will most likely be better served by using a\n",(0,a.kt)("a",{parentName:"p",href:"#drawing-primitives"},"Drawing Primitive")," plugin unless you are specifically\nlooking to create a new type of series.")),(0,a.kt)("p",null,"With the flexibility provided by these plugins, developers can create highly\ncustomizable charting applications for their users."),(0,a.kt)("h2",{id:"custom-series"},"Custom Series"),(0,a.kt)("p",null,"Custom series allow developers to create new types of series with their own data\nstructures, and rendering logic (implemented using\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D"},"CanvasRenderingContext2D"),"\nmethods). These custom series extend the current capabilities of our built-in\nseries, providing a consistent API which mirrors the built-in chart types. These\nseries are expected to have a uniform width for each data point, which ensures\nthat the chart maintains a consistent look and feel across all series types. The\nonly restriction on the data structure is that it should extend the\nWhitespaceData interface (have a valid time property for each data point)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You can find a more detailed guide to developing custom series in the\n",(0,a.kt)("a",{parentName:"strong",href:"./custom_series/"},"Custom Series Types")," article.")),(0,a.kt)("h3",{id:"adding-a-custom-series-to-a-chart"},"Adding a custom series to a chart"),(0,a.kt)("p",null,"A custom series can be added to a chart using the\n",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/IChartApi#addcustomseries"},(0,a.kt)("inlineCode",{parentName:"a"},"addCustomSeries"))," method\nwhich expects a class implementing the\n",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ICustomSeriesPaneView"},"ICustomSeriesPaneView")," interface\nas the first argument, and an optional set of options as the second argument.\nThe series can then be used just like any other series, for example you would\nuse ",(0,a.kt)("inlineCode",{parentName:"p"},"setData")," method to provide data to the series."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title='javascript'",title:"'javascript'"},"class MyCustomSeries {\n    /* Class implementing the ICustomSeriesPaneView interface */\n}\n\nconst chart = createChart(document.getElementById('container'));\nconst myCustomSeries = chart.addCustomSeries(MyCustomSeries, {\n    // options for the MyCustomSeries\n    customOption: 10,\n});\n\nconst data = [\n    { time: 1642425322, value: 123, customValue: 456 },\n    /* ... more data */\n];\n\nmyCustomSeries.setData(data);\n")),(0,a.kt)("h2",{id:"drawing-primitives"},"Drawing Primitives"),(0,a.kt)("p",null,"Drawing primitives provide a more flexible approach to extending the charting\ncapabilities of Lightweight Charts\u2122\ufe0f. They are attached to a specific series and\ncan draw anywhere on the chart, including the main chart pane, price scales, and\ntime scales."),(0,a.kt)("p",null,"Primitives can be used to create custom drawing tools or indicators, or to add\nentirely new visualizations to the chart. Primitives can be drawn at different\nlevels in the visual stack, allowing for complex compositions of multiple\nprimitives."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You can find a more detailed guide to developing series primitives in the\n",(0,a.kt)("a",{parentName:"strong",href:"./series-primitives/"},"Series Primitives")," article.")),(0,a.kt)("h3",{id:"adding-a-primitive-to-an-existing-series"},"Adding a primitive to an existing series"),(0,a.kt)("p",null,"A custom series primitive can be added to an existing series using the\n",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesApi#attachprimitive"},(0,a.kt)("inlineCode",{parentName:"a"},"attachPrimitive()"))," method\nwhich expects an instantiated object implementing the\n",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#iseriesprimitive"},"ISeriesPrimitive")," interface as the first\nargument."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title='javascript'",title:"'javascript'"},"class MyCustomPrimitive {\n    /* Class implementing the ISeriesPrimitive interface */\n}\n\n// Create an instantiated series primitive.\nconst myCustomPrimitive = new MyCustomPrimitive();\n\nconst chart = createChart(document.getElementById('container'));\nconst lineSeries = chart.addLineSeries();\n\nconst data = [\n    { time: 1642425322, value: 123 },\n    /* ... more data */\n];\n\n// Attach the primitive to the series\nlineSeries.attachPrimitive(myCustomPrimitive);\n")),(0,a.kt)("h3",{id:"adding-a-primitive-to-the-chart-instead-of-a-series"},"Adding a primitive to the chart instead of a series"),(0,a.kt)("p",null,"It is required that a drawing primitive is attached to series on the chart. In some cases, it might not make sense to attach a primitive to a specific series on the chart, for example if you are dynamically adding and removing series but would like a specific primitive to remain on the chart always. If this is the case then it is recommended to create an empty series (of any type) and attach the primitive to that instead."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This series wouldn't have data, and thus wouldn't have the concept of price values for the vertical positioning of items. In some cases, such as a watermark, this isn't an issue.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='javascript'",title:"'javascript'"},"// ...\n// Create an instantiated series primitive.\nconst myCustomPrimitive = new MyCustomPrimitive();\n\nconst chart = createChart(document.getElementById('container'));\n\n// an empty series which won't ever have data\nconst chartSeries = chart.addLineSeries();\nchartSeries.attachPrimitive(myCustomPrimitive);\n\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"We have a few example plugins within the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin-examples")," folder of the Lightweight Charts\u2122\ufe0f repo: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tradingview/lightweight-charts/tree/master/plugin-examples"},"plugin-examples"),"."),(0,a.kt)("p",null,"You can view a demo site for these plugin examples here: ",(0,a.kt)("a",{parentName:"p",href:"https://tradingview.github.io/lightweight-charts/plugin-examples"},"Plugin Examples Demos"),"."))}d.isMDXComponent=!0}}]);