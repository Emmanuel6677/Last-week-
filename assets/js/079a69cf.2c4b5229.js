"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5086,8401],{44228:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>O,frontMatter:()=>h,metadata:()=>g,toc:()=>C});var a=n(58168),i=(n(96540),n(15680)),r=n(5546),o=n(55597),s=n(6715);function c(t){const{preferredVersion:e}=(0,o.g1)(),n=s&&s.length>0?s[0]:"",a=e?.name??n??"current";return"current"===a||parseFloat(a)>=t.version?t.children:t.fallback({})}const l="// remove-start\n// Lightweight Charts\u2122 Example: Crosshair syncing\n// https://tradingview.github.io/lightweight-charts/tutorials/how_to/set-crosshair-position\n// remove-end\n\n// hide-start\nfunction generateData(startValue, startDate) {\n\tconst res = [];\n\tconst time = startDate ?? (new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0)));\n\tfor (let i = 0; i < 500; ++i) {\n\t\tres.push({\n\t\t\ttime: time.getTime() / 1000,\n\t\t\tvalue: i + startValue,\n\t\t});\n\n\t\ttime.setUTCDate(time.getUTCDate() + 1);\n\t}\n\n\treturn res;\n}\n\nconst chart1 = createChart(\n\tdocument.getElementById('container'),\n\t{\n\t\theight: 250,\n\t\tcrosshair: {\n\t\t\tmode: 0,\n\t\t},\n\t\ttimeScale: {\n\t\t\tvisible: false,\n\t\t},\n\t\tlayout: {\n\t\t\tbackground: {\n\t\t\t\ttype: 'solid',\n\t\t\t\tcolor: '#FFF5F5',\n\t\t\t},\n\t\t},\n\t}\n);\nconst mainSeries1 = chart1.addLineSeries({\n\tcolor: 'red',\n});\n\nmainSeries1.setData(generateData(0));\n\nconst chart2 = createChart(\n\tdocument.getElementById('container'),\n\t{\n\t\theight: 250,\n\t\tlayout: {\n\t\t\tbackground: {\n\t\t\t\ttype: 'solid',\n\t\t\t\tcolor: '#F5F5FF',\n\t\t\t},\n\t\t},\n\t}\n);\nconst mainSeries2 = chart2.addLineSeries({\n\tcolor: 'blue',\n});\n\nmainSeries2.setData(generateData(100));\n// hide-end\n\nchart1.timeScale().subscribeVisibleLogicalRangeChange(timeRange => {\n\tchart2.timeScale().setVisibleLogicalRange(timeRange);\n});\n\nchart2.timeScale().subscribeVisibleLogicalRangeChange(timeRange => {\n\tchart1.timeScale().setVisibleLogicalRange(timeRange);\n});\n\nfunction getCrosshairDataPoint(series, param) {\n\tif (!param.time) {\n\t\treturn null;\n\t}\n\tconst dataPoint = param.seriesData.get(series);\n\treturn dataPoint || null;\n}\n\nfunction syncCrosshair(chart, series, dataPoint) {\n\tif (dataPoint) {\n\t\tchart.setCrosshairPosition(dataPoint.value, dataPoint.time, series);\n\t\treturn;\n\t}\n\tchart.clearCrosshairPosition();\n}\nchart1.subscribeCrosshairMove(param => {\n\tconst dataPoint = getCrosshairDataPoint(mainSeries1, param);\n\tsyncCrosshair(chart2, mainSeries2, dataPoint);\n});\nchart2.subscribeCrosshairMove(param => {\n\tconst dataPoint = getCrosshairDataPoint(mainSeries2, param);\n\tsyncCrosshair(chart1, mainSeries1, dataPoint);\n});\n",d="// remove-start\n// Lightweight Charts\u2122 Example: Crosshair syncing\n// https://tradingview.github.io/lightweight-charts/tutorials/how_to/set-crosshair-position\n// remove-end\n\n// hide-start\nfunction generateData() {\n\tconst res = [];\n\tconst time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));\n\tfor (let i = 0; i < 500; ++i) {\n\t\tres.push({\n\t\t\ttime: time.getTime() / 1000,\n\t\t\tvalue: i,\n\t\t});\n\n\t\ttime.setUTCDate(time.getUTCDate() + 1);\n\t}\n\n\treturn res;\n}\n\nconst chart = createChart(\n\tdocument.getElementById('container'),\n\t{\n\t\thandleScale: false,\n\t\thandleScroll: false,\n\t}\n);\n\nconst mainSeries = chart.addLineSeries({\n\tpriceFormat: {\n\t\tminMove: 1,\n\t\tprecision: 0,\n\t},\n});\n\nmainSeries.setData(generateData());\n\nchart.timeScale().fitContent();\n// hide-end\n\ndocument.getElementById('container').addEventListener('touchmove', e => {\n\tconst bcr = document.getElementById('container').getBoundingClientRect();\n\tconst x = bcr.left + e.touches[0].clientX;\n\tconst y = bcr.top + e.touches[0].clientY;\n\n\tconst price = mainSeries.coordinateToPrice(y);\n\tconst time = chart.timeScale().coordinateToTime(x);\n\n\tif (!Number.isFinite(price) || !Number.isFinite(time)) {\n\t\treturn;\n\t}\n\n\tchart.setCrosshairPosition(price, time, mainSeries);\n});\n\ndocument.getElementById('container').addEventListener('touchend', () => {\n\tchart.clearCrosshairPosition();\n});\n";var m=n(7951);const h={title:"Set crosshair position",sidebar_label:"Set crosshair position",description:"Examples of how to add a programatically set the crosshair position.",pagination_prev:null,pagination_next:null,keywords:["crosshair","tracking","example"]},u=void 0,g={unversionedId:"how_to/set-crosshair-position",id:"how_to/set-crosshair-position",title:"Set crosshair position",description:"Examples of how to add a programatically set the crosshair position.",source:"@site/tutorials/how_to/set-crosshair-position.mdx",sourceDirName:"how_to",slug:"/how_to/set-crosshair-position",permalink:"/lightweight-charts/tutorials/how_to/set-crosshair-position",draft:!1,tags:[],version:"current",frontMatter:{title:"Set crosshair position",sidebar_label:"Set crosshair position",description:"Examples of how to add a programatically set the crosshair position.",pagination_prev:null,pagination_next:null,keywords:["crosshair","tracking","example"]},sidebar:"tutorialsSidebar"},p={},C=[{value:"Syncing two charts",id:"syncing-two-charts",level:2},{value:"Tracking without long-press (on mobile)",id:"tracking-without-long-press-on-mobile",level:2}],f={toc:C},E="wrapper";function O(t){let{components:e,...n}=t;return(0,i.yg)(E,(0,a.A)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Lightweight Charts\u2122 allows the crosshair position to be set programatically using the ",(0,i.yg)("a",{parentName:"p",href:"/docs/api/interfaces/IChartApi#setcrosshairposition"},(0,i.yg)("inlineCode",{parentName:"a"},"setCrosshairPosition")),", and cleared using ",(0,i.yg)("a",{parentName:"p",href:"/docs/api/interfaces/IChartApi#clearcrosshairposition"},(0,i.yg)("inlineCode",{parentName:"a"},"clearCrosshairPosition")),"."),(0,i.yg)("p",null,"Usually the crosshair position is set automatically by the user's actions. However in some cases you may want to set it explicitly. For example if you want to synchronise the crosshairs of two separate charts."),(0,i.yg)(c,{version:4.1,fallback:()=>(0,i.yg)(m.A,{notCurrent:"These tutorials are for version 4.1 (or greater) of Lightweight\xa0Charts\u2122.",type:"caution",displayVersionMessage:!0,mdxType:"VersionWarningAdmonition"}),mdxType:"MinimumVersionWrapper"},(0,i.yg)("h2",{id:"syncing-two-charts"},"Syncing two charts"),(0,i.yg)(r.Ay,{replaceThemeConstants:!0,chart:!0,className:"language-js",hideableCode:!0,iframeStyle:{height:"500px"},mdxType:"CodeBlock"},l),(0,i.yg)("h2",{id:"tracking-without-long-press-on-mobile"},"Tracking without long-press (on mobile)"),(0,i.yg)("p",null,"  If scrolling and scaling is disabled, then the API can be used to enable a kind of tracking mode without the user having to long-press the screen."),(0,i.yg)(r.Ay,{replaceThemeConstants:!0,chart:!0,className:"language-js",hideableCode:!0,mdxType:"CodeBlock"},d)))}O.isMDXComponent=!0},11963:(t,e,n)=>{n.d(e,{A:()=>m});var a=n(96540),i=n(20053),r=n(17559),o=n(21312);const s={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};const c={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(o.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(o.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(o.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(o.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(o.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},l={secondary:"note",important:"info",success:"tip",warning:"danger"};function d(t){const{mdxAdmonitionTitle:e,rest:n}=function(t){const e=a.Children.toArray(t),n=e.find((t=>a.isValidElement(t)&&"mdxAdmonitionTitle"===t.props?.mdxType)),i=a.createElement(a.Fragment,null,e.filter((t=>t!==n)));return{mdxAdmonitionTitle:n,rest:i}}(t.children);return{...t,title:t.title??e,children:n}}function m(t){const{children:e,type:n,title:o,icon:m}=d(t),h=function(t){const e=l[t]??t,n=c[e];return n||(console.warn(`No admonition config found for admonition type "${e}". Using Info as fallback.`),c.info)}(n),u=o??h.label,{iconComponent:g}=h,p=m??a.createElement(g,null);return a.createElement("div",{className:(0,i.A)(r.G.common.admonition,r.G.common.admonitionType(t.type),"alert",`alert--${h.infimaClassName}`,s.admonition)},a.createElement("div",{className:s.admonitionHeading},a.createElement("span",{className:s.admonitionIcon},p),u),a.createElement("div",{className:s.admonitionContent},e))}},5546:(t,e,n)=>{n.d(e,{Ay:()=>f});var a=n(96540),i=n(77964),r=n(78478),o=n(95293),s=n(55597),c=n(6715);function l(t,e,n){t.addEventListener("resize",(()=>{const t=e.getBoundingClientRect();n(t.width,t.height)}),!0)}const d={3.8:async t=>{const e=await n.e(3409).then(n.bind(n,73409));return{module:e,createChart:(n,a)=>{const i=e.createChart(n,a);return l(t,n,i.resize.bind(i)),i}}},"4.0":async t=>{const e=await n.e(7476).then(n.bind(n,37476));return{module:e,createChart:(n,a)=>{const i=e.createChart(n,a);return l(t,n,i.resize.bind(i)),i}}},4.1:async t=>{const e=await n.e(9631).then(n.bind(n,59631));return{module:e,createChart:(n,a)=>{const i=e.createChart(n,a);return l(t,n,i.resize.bind(i)),i}}},current:async()=>{const t=await n.e(7839).then(n.bind(n,47839));return{module:t,createChart:(e,n)=>{const a=t.createChart(e,n);return l(window,e,a.resize.bind(a)),a}}}},m="iframe_R_Fr";function h(t){const{script:e,iframeStyle:n}=t,{preferredVersion:i}=(0,s.g1)(),r=c&&c.length>0?c[0]:"",o=i?.name??r??"current",l=function(t){return`\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t${t}\n\t\t\t};\n\t\t<\/script>\n\t`}(e),h=a.useRef(null);return a.useEffect((()=>{const t=h.current,e=t?.contentWindow,n=t?.contentDocument;if(null===t||!e||!n)return;const a=async()=>{try{const{module:t,createChart:n}=await d[o](e);Object.assign(e,t),e.createChart=n,e.run?.()}catch(t){console.error(t)}};if(void 0!==e.run)a();else{const e=()=>{a(),t.removeEventListener("load",e)};t.addEventListener("load",e)}}),[l]),a.createElement("iframe",{key:e,ref:h,srcDoc:l,className:m,style:n})}var u=n(82840);const g=()=>`${Math.random().toString(36).slice(2,11)}`;function p(t){return"string"==typeof t?t:function(){const[t,e]=(0,a.useState)("");return(0,a.useEffect)((()=>e(g())),[]),t}()}const C=Object.keys(u.k.DARK);const f=t=>{const{chart:e,replaceThemeConstants:n,hideableCode:s,chartOnly:c,iframeStyle:l,replaceTabs:d=!0,...g}=t;let{children:f}=t;const{colorMode:E}=(0,o.G)(),O="dark"===E,y=p();return n&&"string"==typeof f&&(f=function(t,e){const n=e?u.k.DARK:u.k.LIGHT;let a=t;for(const i of C)a=a.replace(new RegExp(i,"g"),`'${n[i]}'`);return a}(f,O)),d&&"string"==typeof f&&(f=f.replace(/\t/g,"    ")),f=f.replace(new RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),e||s?a.createElement(a.Fragment,null,s&&a.createElement(a.Fragment,null,a.createElement("input",{id:y,type:"checkbox",className:"toggle-hidden-lines"}),a.createElement("label",{className:"toggle-label",htmlFor:y},"Show all code")),!c&&a.createElement(i.A,g,f),e&&a.createElement(r.A,{fallback:a.createElement("div",{className:m},"\xa0")},(()=>a.createElement(h,{script:f,iframeStyle:l})))):a.createElement(i.A,g,f)}},7951:(t,e,n)=>{n.d(e,{A:()=>s});var a=n(55597),i=n(11963),r=n(96540),o=n(6715);function s(t){let{notCurrent:e,isCurrent:n,type:s,title:c,displayVersionMessage:l}=t;const{preferredVersion:d,savePreferredVersionName:m}=(0,a.g1)(),h=Boolean(e&&!d?.isLast),u=Boolean(n&&d?.isLast),g=o&&o.length>0?o[0]:"",p=d?.label??d?.name??"";if(!h&&!u||!p)return r.createElement(r.Fragment,null);let C=(h?e:n)??"";return C=C.replace(/DOC_VERSION/g,p).replace(/CURRENT_VERSION/g,g),r.createElement("div",null,r.createElement(i.A,{type:s,title:c},r.createElement("p",null,C),l&&r.createElement("p",null,"You are currently viewing the documentation for the version tagged:"," ",r.createElement("strong",null,p),". ",r.createElement("br",null),r.createElement("strong",null,r.createElement("a",{href:"",onClick:()=>m(g)},"Switch to the latest published version"))," ","(",g,")")))}},82840:(t,e,n)=>{n.d(e,{k:()=>a});const a={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},6715:t=>{t.exports=["4.1","4.0","3.8"]}}]);