"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2057],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=c(r),s=a,m=k["".concat(p,".").concat(s)]||k[s]||d[s]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[k]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={id:"TickMark",title:"Interface: TickMark",sidebar_label:"TickMark",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,o={unversionedId:"api/interfaces/TickMark",id:"api/interfaces/TickMark",title:"Interface: TickMark",description:"Tick mark for the horizontal scale.",source:"@site/docs/api/interfaces/TickMark.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/TickMark",permalink:"/lightweight-charts/docs/next/api/interfaces/TickMark",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"TickMark",title:"Interface: TickMark",sidebar_label:"TickMark",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},c=[{value:"Properties",id:"properties",level:2},{value:"index",id:"index",level:3},{value:"time",id:"time",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"weight",id:"weight",level:3},{value:"originalTime",id:"originaltime",level:3}],u={toc:c},k="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(k,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Tick mark for the horizontal scale."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"index"},"index"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"index"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#timepointindex"},(0,a.kt)("inlineCode",{parentName:"a"},"TimePointIndex"))),(0,a.kt)("p",null,"Index"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"time"},"time"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"time"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("p",null,"Time / Coordinate"),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[species]")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'"InternalHorzScaleItem"')),(0,a.kt)("td",{parentName:"tr",align:"left"},"The 'name' or species of the nominal.")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"weight"},"weight"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"weight"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#tickmarkweightvalue"},(0,a.kt)("inlineCode",{parentName:"a"},"TickMarkWeightValue"))),(0,a.kt)("p",null,"Weight of the tick mark"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"originaltime"},"originalTime"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"originalTime"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("p",null,"Original value for the ",(0,a.kt)("inlineCode",{parentName:"p"},"time")," property"))}d.isMDXComponent=!0}}]);