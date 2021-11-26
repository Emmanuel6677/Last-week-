"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2688],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6689:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"HandleScaleOptions",title:"Interface: HandleScaleOptions",sidebar_label:"HandleScaleOptions",sidebar_position:0,custom_edit_url:null},s=void 0,p={unversionedId:"api/interfaces/HandleScaleOptions",id:"api/interfaces/HandleScaleOptions",isDocsHomePage:!1,title:"Interface: HandleScaleOptions",description:"Represents options for how the chart is scaled by the mouse and touch gestures.",source:"@site/docs/api/interfaces/HandleScaleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/HandleScaleOptions",permalink:"/lightweight-charts/api/interfaces/HandleScaleOptions",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"HandleScaleOptions",title:"Interface: HandleScaleOptions",sidebar_label:"HandleScaleOptions",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"GridOptions",permalink:"/lightweight-charts/api/interfaces/GridOptions"},next:{title:"HandleScrollOptions",permalink:"/lightweight-charts/api/interfaces/HandleScrollOptions"}},c=[{value:"Properties",id:"properties",children:[{value:"mouseWheel",id:"mousewheel",children:[],level:3},{value:"pinch",id:"pinch",children:[],level:3},{value:"axisPressedMouseMove",id:"axispressedmousemove",children:[],level:3},{value:"axisDoubleClickReset",id:"axisdoubleclickreset",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Represents options for how the chart is scaled by the mouse and touch gestures."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"mousewheel"},"mouseWheel"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"mouseWheel"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Enable scaling with the mouse wheel."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pinch"},"pinch"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"pinch"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Enable scaling with pinch/zoom gestures."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"axispressedmousemove"},"axisPressedMouseMove"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"axisPressedMouseMove"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/api/interfaces/AxisPressedMouseMoveOptions"},(0,a.kt)("inlineCode",{parentName:"a"},"AxisPressedMouseMoveOptions"))),(0,a.kt)("p",null,"Enable scaling the price and/or time scales by holding down the left mouse button and moving the mouse."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"axisdoubleclickreset"},"axisDoubleClickReset"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"axisDoubleClickReset"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Enable resetting scaling by double-clicking the left mouse button."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,a.kt)("inlineCode",{parentName:"p"},"true")))}d.isMDXComponent=!0}}]);