"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4714,8401],{16115:(n,e,t)=>{t.d(e,{Ay:()=>s});var o=t(58168),i=(t(96540),t(15680));const l={toc:[]},a="wrapper";function s(n){let{components:e,...t}=n;return(0,i.yg)(a,(0,o.A)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},"This page is part of an iterative guide (where we build onto code from the previous steps).")),(0,i.yg)("p",{parentName:"admonition"},"It is recommend that you follow the guide from the ",(0,i.yg)("a",{parentName:"p",href:"intro"},"start"),". However, if you are only interested in the content on this page then take a look at the ",(0,i.yg)("a",{parentName:"p",href:"#complete-code"},"full code")," at the bottom of page for context of how this code fits into a working example.")))}s.isMDXComponent=!0},23764:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>g,contentTitle:()=>r,default:()=>u,frontMatter:()=>h,metadata:()=>p,toc:()=>m});var o=t(58168),i=(t(96540),t(15680)),l=t(16115),a=t(5546);const s='<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8" />\n    <meta\n      name="viewport"\n      content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0"\n    />\n    <title>Lightweight Charts\u2122 Customization Tutorial</title>\n    \x3c!-- Adding the standalone version of Lightweight charts --\x3e\n    <script\n      type="text/javascript"\n      src="https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js"\n    ><\/script>\n    <style>\n      body {\n        padding: 0;\n        margin: 0;\n        /* Add a background color to match the chart */\n        background-color: #222;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div\n      id="container"\n      style="position: absolute; width: 100%; height: 100%"\n    ></div>\n    <script type="text/javascript">\n      // Function to generate a sample set of Candlestick datapoints\n      function generateCandlestickData() {\n        return [\n          {\n            time: "2018-10-19",\n            open: 180.34,\n            high: 180.99,\n            low: 178.57,\n            close: 179.85,\n          },\n          {\n            time: "2018-10-22",\n            open: 180.82,\n            high: 181.4,\n            low: 177.56,\n            close: 178.75,\n          },\n          {\n            time: "2018-10-23",\n            open: 175.77,\n            high: 179.49,\n            low: 175.44,\n            close: 178.53,\n          },\n          {\n            time: "2018-10-24",\n            open: 178.58,\n            high: 182.37,\n            low: 176.31,\n            close: 176.97,\n          },\n          {\n            time: "2018-10-25",\n            open: 177.52,\n            high: 180.5,\n            low: 176.83,\n            close: 179.07,\n          },\n          {\n            time: "2018-10-26",\n            open: 176.88,\n            high: 177.34,\n            low: 170.91,\n            close: 172.23,\n          },\n          {\n            time: "2018-10-29",\n            open: 173.74,\n            high: 175.99,\n            low: 170.95,\n            close: 173.2,\n          },\n          {\n            time: "2018-10-30",\n            open: 173.16,\n            high: 176.43,\n            low: 172.64,\n            close: 176.24,\n          },\n          {\n            time: "2018-10-31",\n            open: 177.98,\n            high: 178.85,\n            low: 175.59,\n            close: 175.88,\n          },\n          {\n            time: "2018-11-01",\n            open: 176.84,\n            high: 180.86,\n            low: 175.9,\n            close: 180.46,\n          },\n          {\n            time: "2018-11-02",\n            open: 182.47,\n            high: 183.01,\n            low: 177.39,\n            close: 179.93,\n          },\n          {\n            time: "2018-11-05",\n            open: 181.02,\n            high: 182.41,\n            low: 179.3,\n            close: 182.19,\n          },\n          {\n            time: "2018-11-06",\n            open: 181.93,\n            high: 182.65,\n            low: 180.05,\n            close: 182.01,\n          },\n          {\n            time: "2018-11-07",\n            open: 183.79,\n            high: 187.68,\n            low: 182.06,\n            close: 187.23,\n          },\n          {\n            time: "2018-11-08",\n            open: 187.13,\n            high: 188.69,\n            low: 185.72,\n            close: 188.0,\n          },\n          {\n            time: "2018-11-09",\n            open: 188.32,\n            high: 188.48,\n            low: 184.96,\n            close: 185.99,\n          },\n          {\n            time: "2018-11-12",\n            open: 185.23,\n            high: 186.95,\n            low: 179.02,\n            close: 179.43,\n          },\n          {\n            time: "2018-11-13",\n            open: 177.3,\n            high: 181.62,\n            low: 172.85,\n            close: 179.0,\n          },\n          {\n            time: "2018-11-14",\n            open: 182.61,\n            high: 182.9,\n            low: 179.15,\n            close: 179.9,\n          },\n          {\n            time: "2018-11-15",\n            open: 179.01,\n            high: 179.67,\n            low: 173.61,\n            close: 177.36,\n          },\n          {\n            time: "2018-11-16",\n            open: 173.99,\n            high: 177.6,\n            low: 173.51,\n            close: 177.02,\n          },\n          {\n            time: "2018-11-19",\n            open: 176.71,\n            high: 178.88,\n            low: 172.3,\n            close: 173.59,\n          },\n          {\n            time: "2018-11-20",\n            open: 169.25,\n            high: 172.0,\n            low: 167.0,\n            close: 169.05,\n          },\n          {\n            time: "2018-11-21",\n            open: 170.0,\n            high: 170.93,\n            low: 169.15,\n            close: 169.3,\n          },\n          {\n            time: "2018-11-23",\n            open: 169.39,\n            high: 170.33,\n            low: 168.47,\n            close: 168.85,\n          },\n          {\n            time: "2018-11-26",\n            open: 170.2,\n            high: 172.39,\n            low: 168.87,\n            close: 169.82,\n          },\n          {\n            time: "2018-11-27",\n            open: 169.11,\n            high: 173.38,\n            low: 168.82,\n            close: 173.22,\n          },\n          {\n            time: "2018-11-28",\n            open: 172.91,\n            high: 177.65,\n            low: 170.62,\n            close: 177.43,\n          },\n          {\n            time: "2018-11-29",\n            open: 176.8,\n            high: 177.27,\n            low: 174.92,\n            close: 175.66,\n          },\n          {\n            time: "2018-11-30",\n            open: 175.75,\n            high: 180.37,\n            low: 175.11,\n            close: 180.32,\n          },\n          {\n            time: "2018-12-03",\n            open: 183.29,\n            high: 183.5,\n            low: 179.35,\n            close: 181.74,\n          },\n          {\n            time: "2018-12-04",\n            open: 181.06,\n            high: 182.23,\n            low: 174.55,\n            close: 175.3,\n          },\n          {\n            time: "2018-12-06",\n            open: 173.5,\n            high: 176.04,\n            low: 170.46,\n            close: 175.96,\n          },\n          {\n            time: "2018-12-07",\n            open: 175.35,\n            high: 178.36,\n            low: 172.24,\n            close: 172.79,\n          },\n          {\n            time: "2018-12-10",\n            open: 173.39,\n            high: 173.99,\n            low: 167.73,\n            close: 171.69,\n          },\n          {\n            time: "2018-12-11",\n            open: 174.3,\n            high: 175.6,\n            low: 171.24,\n            close: 172.21,\n          },\n          {\n            time: "2018-12-12",\n            open: 173.75,\n            high: 176.87,\n            low: 172.81,\n            close: 174.21,\n          },\n          {\n            time: "2018-12-13",\n            open: 174.31,\n            high: 174.91,\n            low: 172.07,\n            close: 173.87,\n          },\n          {\n            time: "2018-12-14",\n            open: 172.98,\n            high: 175.14,\n            low: 171.95,\n            close: 172.29,\n          },\n          {\n            time: "2018-12-17",\n            open: 171.51,\n            high: 171.99,\n            low: 166.93,\n            close: 167.97,\n          },\n          {\n            time: "2018-12-18",\n            open: 168.9,\n            high: 171.95,\n            low: 168.5,\n            close: 170.04,\n          },\n          {\n            time: "2018-12-19",\n            open: 170.92,\n            high: 174.95,\n            low: 166.77,\n            close: 167.56,\n          },\n          {\n            time: "2018-12-20",\n            open: 166.28,\n            high: 167.31,\n            low: 162.23,\n            close: 164.16,\n          },\n          {\n            time: "2018-12-21",\n            open: 162.81,\n            high: 167.96,\n            low: 160.17,\n            close: 160.48,\n          },\n          {\n            time: "2018-12-24",\n            open: 160.16,\n            high: 161.4,\n            low: 158.09,\n            close: 158.14,\n          },\n          {\n            time: "2018-12-26",\n            open: 159.46,\n            high: 168.28,\n            low: 159.44,\n            close: 168.28,\n          },\n          {\n            time: "2018-12-27",\n            open: 166.44,\n            high: 170.46,\n            low: 163.36,\n            close: 170.32,\n          },\n          {\n            time: "2018-12-28",\n            open: 171.22,\n            high: 173.12,\n            low: 168.6,\n            close: 170.22,\n          },\n          {\n            time: "2018-12-31",\n            open: 171.47,\n            high: 173.24,\n            low: 170.65,\n            close: 171.82,\n          },\n          {\n            time: "2019-01-02",\n            open: 169.71,\n            high: 173.18,\n            low: 169.05,\n            close: 172.41,\n          },\n          {\n            time: "2019-01-03",\n            open: 171.84,\n            high: 171.84,\n            low: 168.21,\n            close: 168.61,\n          },\n          {\n            time: "2019-01-04",\n            open: 170.18,\n            high: 174.74,\n            low: 169.52,\n            close: 173.62,\n          },\n          {\n            time: "2019-01-07",\n            open: 173.83,\n            high: 178.18,\n            low: 173.83,\n            close: 177.04,\n          },\n          {\n            time: "2019-01-08",\n            open: 178.57,\n            high: 179.59,\n            low: 175.61,\n            close: 177.89,\n          },\n          {\n            time: "2019-01-09",\n            open: 177.87,\n            high: 181.27,\n            low: 177.1,\n            close: 179.73,\n          },\n          {\n            time: "2019-01-10",\n            open: 178.03,\n            high: 179.24,\n            low: 176.34,\n            close: 179.06,\n          },\n          {\n            time: "2019-01-11",\n            open: 177.93,\n            high: 180.26,\n            low: 177.12,\n            close: 179.41,\n          },\n          {\n            time: "2019-01-14",\n            open: 177.59,\n            high: 179.23,\n            low: 176.9,\n            close: 178.81,\n          },\n          {\n            time: "2019-01-15",\n            open: 176.08,\n            high: 177.82,\n            low: 175.2,\n            close: 176.47,\n          },\n          {\n            time: "2019-01-16",\n            open: 177.09,\n            high: 177.93,\n            low: 175.86,\n            close: 177.04,\n          },\n          {\n            time: "2019-01-17",\n            open: 174.01,\n            high: 175.46,\n            low: 172.0,\n            close: 174.87,\n          },\n          {\n            time: "2019-01-18",\n            open: 176.98,\n            high: 180.04,\n            low: 176.18,\n            close: 179.58,\n          },\n          {\n            time: "2019-01-22",\n            open: 177.49,\n            high: 178.6,\n            low: 175.36,\n            close: 177.11,\n          },\n          {\n            time: "2019-01-23",\n            open: 176.59,\n            high: 178.06,\n            low: 174.53,\n            close: 176.89,\n          },\n          {\n            time: "2019-01-24",\n            open: 177.0,\n            high: 177.53,\n            low: 175.3,\n            close: 177.29,\n          },\n          {\n            time: "2019-01-25",\n            open: 179.78,\n            high: 180.87,\n            low: 178.61,\n            close: 180.4,\n          },\n          {\n            time: "2019-01-28",\n            open: 178.97,\n            high: 179.99,\n            low: 177.41,\n            close: 179.83,\n          },\n          {\n            time: "2019-01-29",\n            open: 178.96,\n            high: 180.15,\n            low: 178.09,\n            close: 179.69,\n          },\n          {\n            time: "2019-01-30",\n            open: 180.47,\n            high: 184.2,\n            low: 179.78,\n            close: 182.18,\n          },\n          {\n            time: "2019-01-31",\n            open: 181.5,\n            high: 184.67,\n            low: 181.06,\n            close: 183.53,\n          },\n          {\n            time: "2019-02-01",\n            open: 184.03,\n            high: 185.15,\n            low: 182.83,\n            close: 184.37,\n          },\n          {\n            time: "2019-02-04",\n            open: 184.3,\n            high: 186.43,\n            low: 183.84,\n            close: 186.43,\n          },\n          {\n            time: "2019-02-05",\n            open: 186.89,\n            high: 186.99,\n            low: 184.69,\n            close: 186.39,\n          },\n          {\n            time: "2019-02-06",\n            open: 186.69,\n            high: 186.69,\n            low: 184.06,\n            close: 184.72,\n          },\n          {\n            time: "2019-02-07",\n            open: 183.74,\n            high: 184.92,\n            low: 182.45,\n            close: 184.07,\n          },\n          {\n            time: "2019-02-08",\n            open: 183.05,\n            high: 184.58,\n            low: 182.72,\n            close: 184.54,\n          },\n          {\n            time: "2019-02-11",\n            open: 185.0,\n            high: 185.42,\n            low: 182.75,\n            close: 182.92,\n          },\n          {\n            time: "2019-02-12",\n            open: 183.84,\n            high: 186.4,\n            low: 183.52,\n            close: 185.52,\n          },\n          {\n            time: "2019-02-13",\n            open: 186.3,\n            high: 188.68,\n            low: 185.92,\n            close: 188.41,\n          },\n          {\n            time: "2019-02-14",\n            open: 187.5,\n            high: 188.93,\n            low: 186.0,\n            close: 187.71,\n          },\n          {\n            time: "2019-02-15",\n            open: 189.87,\n            high: 192.62,\n            low: 189.05,\n            close: 192.39,\n          },\n          {\n            time: "2019-02-19",\n            open: 191.71,\n            high: 193.19,\n            low: 191.28,\n            close: 192.33,\n          },\n          {\n            time: "2019-02-20",\n            open: 192.39,\n            high: 192.4,\n            low: 191.11,\n            close: 191.85,\n          },\n          {\n            time: "2019-02-21",\n            open: 191.85,\n            high: 192.37,\n            low: 190.61,\n            close: 191.82,\n          },\n          {\n            time: "2019-02-22",\n            open: 191.69,\n            high: 192.54,\n            low: 191.62,\n            close: 192.39,\n          },\n          {\n            time: "2019-02-25",\n            open: 192.75,\n            high: 193.42,\n            low: 189.96,\n            close: 189.98,\n          },\n          {\n            time: "2019-02-26",\n            open: 185.59,\n            high: 188.47,\n            low: 182.8,\n            close: 188.3,\n          },\n          {\n            time: "2019-02-27",\n            open: 187.9,\n            high: 188.5,\n            low: 183.21,\n            close: 183.67,\n          },\n          {\n            time: "2019-02-28",\n            open: 183.6,\n            high: 185.19,\n            low: 183.11,\n            close: 185.14,\n          },\n          {\n            time: "2019-03-01",\n            open: 185.82,\n            high: 186.56,\n            low: 182.86,\n            close: 185.17,\n          },\n          {\n            time: "2019-03-04",\n            open: 186.2,\n            high: 186.24,\n            low: 182.1,\n            close: 183.81,\n          },\n          {\n            time: "2019-03-05",\n            open: 184.24,\n            high: 185.12,\n            low: 183.25,\n            close: 184.0,\n          },\n          {\n            time: "2019-03-06",\n            open: 184.53,\n            high: 184.97,\n            low: 183.84,\n            close: 184.45,\n          },\n          {\n            time: "2019-03-07",\n            open: 184.39,\n            high: 184.62,\n            low: 181.58,\n            close: 182.51,\n          },\n          {\n            time: "2019-03-08",\n            open: 181.49,\n            high: 181.91,\n            low: 179.52,\n            close: 181.23,\n          },\n          {\n            time: "2019-03-11",\n            open: 182.0,\n            high: 183.2,\n            low: 181.2,\n            close: 182.44,\n          },\n          {\n            time: "2019-03-12",\n            open: 183.43,\n            high: 184.27,\n            low: 182.33,\n            close: 184.0,\n          },\n          {\n            time: "2019-03-13",\n            open: 183.24,\n            high: 183.78,\n            low: 181.08,\n            close: 181.14,\n          },\n          {\n            time: "2019-03-14",\n            open: 181.28,\n            high: 181.74,\n            low: 180.5,\n            close: 181.61,\n          },\n          {\n            time: "2019-03-15",\n            open: 182.3,\n            high: 182.49,\n            low: 179.57,\n            close: 182.23,\n          },\n          {\n            time: "2019-03-18",\n            open: 182.53,\n            high: 183.48,\n            low: 182.33,\n            close: 183.42,\n          },\n          {\n            time: "2019-03-19",\n            open: 184.19,\n            high: 185.82,\n            low: 183.48,\n            close: 184.13,\n          },\n          {\n            time: "2019-03-20",\n            open: 184.3,\n            high: 187.12,\n            low: 183.43,\n            close: 186.1,\n          },\n          {\n            time: "2019-03-21",\n            open: 185.5,\n            high: 190.0,\n            low: 185.5,\n            close: 189.97,\n          },\n          {\n            time: "2019-03-22",\n            open: 189.31,\n            high: 192.05,\n            low: 188.67,\n            close: 188.75,\n          },\n          {\n            time: "2019-03-25",\n            open: 188.75,\n            high: 191.71,\n            low: 188.51,\n            close: 189.68,\n          },\n          {\n            time: "2019-03-26",\n            open: 190.69,\n            high: 192.19,\n            low: 188.74,\n            close: 189.34,\n          },\n          {\n            time: "2019-03-27",\n            open: 189.65,\n            high: 191.61,\n            low: 188.39,\n            close: 189.25,\n          },\n          {\n            time: "2019-03-28",\n            open: 189.91,\n            high: 191.4,\n            low: 189.16,\n            close: 190.06,\n          },\n          {\n            time: "2019-03-29",\n            open: 190.85,\n            high: 192.04,\n            low: 190.14,\n            close: 191.89,\n          },\n          {\n            time: "2019-04-01",\n            open: 192.99,\n            high: 195.9,\n            low: 192.85,\n            close: 195.64,\n          },\n          {\n            time: "2019-04-02",\n            open: 195.5,\n            high: 195.5,\n            low: 194.01,\n            close: 194.31,\n          },\n          {\n            time: "2019-04-03",\n            open: 194.98,\n            high: 198.78,\n            low: 194.11,\n            close: 198.61,\n          },\n          {\n            time: "2019-04-04",\n            open: 199.0,\n            high: 200.49,\n            low: 198.02,\n            close: 200.45,\n          },\n          {\n            time: "2019-04-05",\n            open: 200.86,\n            high: 203.13,\n            low: 200.61,\n            close: 202.06,\n          },\n          {\n            time: "2019-04-08",\n            open: 201.37,\n            high: 203.79,\n            low: 201.24,\n            close: 203.55,\n          },\n          {\n            time: "2019-04-09",\n            open: 202.26,\n            high: 202.71,\n            low: 200.46,\n            close: 200.9,\n          },\n          {\n            time: "2019-04-10",\n            open: 201.26,\n            high: 201.6,\n            low: 198.02,\n            close: 199.43,\n          },\n          {\n            time: "2019-04-11",\n            open: 199.9,\n            high: 201.5,\n            low: 199.03,\n            close: 201.48,\n          },\n          {\n            time: "2019-04-12",\n            open: 202.13,\n            high: 204.26,\n            low: 202.13,\n            close: 203.85,\n          },\n          {\n            time: "2019-04-15",\n            open: 204.16,\n            high: 205.14,\n            low: 203.4,\n            close: 204.86,\n          },\n          {\n            time: "2019-04-16",\n            open: 205.25,\n            high: 205.99,\n            low: 204.29,\n            close: 204.47,\n          },\n          {\n            time: "2019-04-17",\n            open: 205.34,\n            high: 206.84,\n            low: 205.32,\n            close: 206.55,\n          },\n          {\n            time: "2019-04-18",\n            open: 206.02,\n            high: 207.78,\n            low: 205.1,\n            close: 205.66,\n          },\n          {\n            time: "2019-04-22",\n            open: 204.11,\n            high: 206.25,\n            low: 204.0,\n            close: 204.78,\n          },\n          {\n            time: "2019-04-23",\n            open: 205.14,\n            high: 207.33,\n            low: 203.43,\n            close: 206.05,\n          },\n          {\n            time: "2019-04-24",\n            open: 206.16,\n            high: 208.29,\n            low: 205.54,\n            close: 206.72,\n          },\n          {\n            time: "2019-04-25",\n            open: 206.01,\n            high: 207.72,\n            low: 205.06,\n            close: 206.5,\n          },\n          {\n            time: "2019-04-26",\n            open: 205.88,\n            high: 206.14,\n            low: 203.34,\n            close: 203.61,\n          },\n          {\n            time: "2019-04-29",\n            open: 203.31,\n            high: 203.8,\n            low: 200.34,\n            close: 202.16,\n          },\n          {\n            time: "2019-04-30",\n            open: 201.55,\n            high: 203.75,\n            low: 200.79,\n            close: 203.7,\n          },\n          {\n            time: "2019-05-01",\n            open: 203.2,\n            high: 203.52,\n            low: 198.66,\n            close: 198.8,\n          },\n          {\n            time: "2019-05-02",\n            open: 199.3,\n            high: 201.06,\n            low: 198.8,\n            close: 201.01,\n          },\n          {\n            time: "2019-05-03",\n            open: 202.0,\n            high: 202.31,\n            low: 200.32,\n            close: 200.56,\n          },\n          {\n            time: "2019-05-06",\n            open: 198.74,\n            high: 199.93,\n            low: 198.31,\n            close: 199.63,\n          },\n          {\n            time: "2019-05-07",\n            open: 196.75,\n            high: 197.65,\n            low: 192.96,\n            close: 194.77,\n          },\n          {\n            time: "2019-05-08",\n            open: 194.49,\n            high: 196.61,\n            low: 193.68,\n            close: 195.17,\n          },\n          {\n            time: "2019-05-09",\n            open: 193.31,\n            high: 195.08,\n            low: 191.59,\n            close: 194.58,\n          },\n          {\n            time: "2019-05-10",\n            open: 193.21,\n            high: 195.49,\n            low: 190.01,\n            close: 194.58,\n          },\n          {\n            time: "2019-05-13",\n            open: 191.0,\n            high: 191.66,\n            low: 189.14,\n            close: 190.34,\n          },\n          {\n            time: "2019-05-14",\n            open: 190.5,\n            high: 192.76,\n            low: 190.01,\n            close: 191.62,\n          },\n          {\n            time: "2019-05-15",\n            open: 190.81,\n            high: 192.81,\n            low: 190.27,\n            close: 191.76,\n          },\n          {\n            time: "2019-05-16",\n            open: 192.47,\n            high: 194.96,\n            low: 192.2,\n            close: 192.38,\n          },\n          {\n            time: "2019-05-17",\n            open: 190.86,\n            high: 194.5,\n            low: 190.75,\n            close: 192.58,\n          },\n          {\n            time: "2019-05-20",\n            open: 191.13,\n            high: 192.86,\n            low: 190.61,\n            close: 190.95,\n          },\n          {\n            time: "2019-05-21",\n            open: 187.13,\n            high: 192.52,\n            low: 186.34,\n            close: 191.45,\n          },\n          {\n            time: "2019-05-22",\n            open: 190.49,\n            high: 192.22,\n            low: 188.05,\n            close: 188.91,\n          },\n          {\n            time: "2019-05-23",\n            open: 188.45,\n            high: 192.54,\n            low: 186.27,\n            close: 192.0,\n          },\n          {\n            time: "2019-05-24",\n            open: 192.54,\n            high: 193.86,\n            low: 190.41,\n            close: 193.59,\n          },\n        ];\n      }\n\n      // Create the Lightweight Chart within the container element\n      const chart = LightweightCharts.createChart(\n        document.getElementById(\'container\'),\n        {\n          layout: {\n            background: { color: "#222" },\n            textColor: "#C3BCDB",\n          },\n          grid: {\n            vertLines: { color: "#444" },\n            horzLines: { color: "#444" },\n          },\n        }\n      );\n\n      // Setting the border color for the vertical axis\n      chart.priceScale().applyOptions({\n        borderColor: "#71649C",\n      });\n\n      // Setting the border color for the horizontal axis\n      chart.timeScale().applyOptions({\n        borderColor: "#71649C",\n      });\n\n      // Get the current users primary locale\n      const currentLocale = window.navigator.languages[0];\n      // Create a number format using Intl.NumberFormat\n      const myPriceFormatter = Intl.NumberFormat(currentLocale, {\n            style: "currency",\n            currency: "EUR", // Currency for data points\n          }).format;\n\n      // Apply the custom priceFormatter to the chart\n      chart.applyOptions({\n        localization: {\n          priceFormatter: myPriceFormatter,\n        },\n      });\n\n      // Generate sample data to use within a candlestick series\n      const candleStickData = generateCandlestickData();\n\n      // Create the Main Series (Candlesticks)\n      const mainSeries = chart.addCandlestickSeries();\n      // Set the data for the Main Series\n      mainSeries.setData(candleStickData);\n\n      // Changing the Candlestick colors\n      mainSeries.applyOptions({\n        wickUpColor: "rgb(54, 116, 217)",\n        upColor: "rgb(54, 116, 217)",\n        wickDownColor: "rgb(225, 50, 85)",\n        downColor: "rgb(225, 50, 85)",\n        borderVisible: false,\n      });\n\n      // Adjust the options for the priceScale of the mainSeries\n      mainSeries.priceScale().applyOptions({\n        autoScale: false, // disables auto scaling based on visible content\n        scaleMargins: {\n          top: 0.1,\n          bottom: 0.2,\n        },\n      });\n\n      // Adding a window resize event handler to resize the chart when\n      // the window size changes.\n      // Note: for more advanced examples (when the chart doesn\'t fill the entire window)\n      // you may need to use ResizeObserver -> https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver\n      window.addEventListener("resize", () => {\n        chart.resize(window.innerWidth, window.innerHeight);\n      });\n    <\/script>\n  </body>\n</html>\n';var c=t(97338);const h={sidebar_position:5,title:"Price scale",pagination_title:"Price scale",sidebar_label:"Price scale",description:"In this section, we are going to adjust the functionality of the vertical price scale.",keywords:["customization","appearance","styling"],pagination_prev:"customization/price-format",pagination_next:"customization/time-scale"},r=void 0,p={unversionedId:"customization/price-scale",id:"customization/price-scale",title:"Price scale",description:"In this section, we are going to adjust the functionality of the vertical price scale.",source:"@site/tutorials/customization/price-scale.mdx",sourceDirName:"customization",slug:"/customization/price-scale",permalink:"/lightweight-charts/tutorials/customization/price-scale",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Price scale",pagination_title:"Price scale",sidebar_label:"Price scale",description:"In this section, we are going to adjust the functionality of the vertical price scale.",keywords:["customization","appearance","styling"],pagination_prev:"customization/price-format",pagination_next:"customization/time-scale"},sidebar:"tutorialsSidebar",previous:{title:"Price format",permalink:"/lightweight-charts/tutorials/customization/price-format"},next:{title:"Time scale",permalink:"/lightweight-charts/tutorials/customization/time-scale"}},g={},m=[{value:"Adjusting settings for the price scale",id:"adjusting-settings-for-the-price-scale",level:2},{value:"Result",id:"result",level:2},{value:"Before",id:"before",level:3},{value:"After",id:"after",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Download",id:"download",level:2},{value:"Complete code",id:"complete-code",level:2}],d={toc:m},w="wrapper";function u(n){let{components:e,...h}=n;return(0,i.yg)(w,(0,o.A)({},d,h,{components:e,mdxType:"MDXLayout"}),(0,i.yg)(l.Ay,{mdxType:"IterativeGuideWarning"}),(0,i.yg)("p",null,"In this section, we are going to adjust the functionality of the vertical price scale. Currently, the price scale will auto-scale to fit the visible data on the chart. You can observe this behaviour by scrolling the chart to the right such that some of the data points are no longer visible. We will disable this feature such that the price scale can only be manually adjusted by the user (by clicking and dragging on the scale)."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"A chart can have more than one price scale and their options can be individually adjusted, however in this example we only have one price scale.")),(0,i.yg)("h2",{id:"adjusting-settings-for-the-price-scale"},"Adjusting settings for the price scale"),(0,i.yg)("p",null,"We can get the current ",(0,i.yg)("a",{parentName:"p",href:"/docs/api/interfaces/IPriceScaleApi"},"IPriceScaleApi")," instance for the chart by evoking the ",(0,i.yg)("inlineCode",{parentName:"p"},"priceScale()")," method on the candlestick series reference."),(0,i.yg)("p",null,"Once again, we can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"applyOptions()")," method on this API instance to adjust it's options. You can add the following code to the example at any point after the ",(0,i.yg)("inlineCode",{parentName:"p"},"mainSeries")," reference has been created, so let us place it at the end of the script. The options available are shown here: ",(0,i.yg)("a",{parentName:"p",href:"/docs/api/interfaces/PriceScaleOptions"},"PriceScaleOptions"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"// Adjust the options for the priceScale of the mainSeries\nmainSeries.priceScale().applyOptions({\n    autoScale: false, // disables auto scaling based on visible content\n    scaleMargins: {\n        top: 0.1,\n        bottom: 0.2,\n    },\n});\n")),(0,i.yg)("p",null,"As discussed above we are disabling the ",(0,i.yg)("inlineCode",{parentName:"p"},"autoScale")," feature on this price scale. We are additionally adjusting the ",(0,i.yg)("inlineCode",{parentName:"p"},"scaleMargins")," which are used when the chart is first rendered to determine the 'zoom' and position of the scale. The scale margins set the proportion of the chart to be empty above and below the data points currently visible."),(0,i.yg)("h2",{id:"result"},"Result"),(0,i.yg)("p",null,"At this point, we should have a chart like the one presented below. Play around with scrolling the data left and right to see the change of behaviour versus the previous step."),(0,i.yg)("h3",{id:"before"},"Before"),(0,i.yg)("iframe",{className:"standalone-iframe",src:t(50087).A}),(0,i.yg)("h3",{id:"after"},"After"),(0,i.yg)("iframe",{className:"standalone-iframe",src:t(37616).A}),(0,i.yg)("a",{href:t(37616).A,target:"\\_blank"},"View in a new window"),(0,i.yg)("h2",{id:"next-steps"},"Next steps"),(0,i.yg)("p",null,"In the next step, we will be adjusting the settings on the horizontal time scale."),(0,i.yg)("h2",{id:"download"},"Download"),(0,i.yg)("p",null,"You can download the HTML file for example at this stage ",(0,i.yg)("a",{href:t(37616).A,download:"customization-tutorial-step5.html",target:"\\_blank"},"here")," in case you've encountered a problem or would like to start the next step from this point."),(0,i.yg)("h2",{id:"complete-code"},"Complete code"),(0,i.yg)(c.A,{mdxType:"InstantDetails"},(0,i.yg)("summary",null,"Click here to reveal the complete code for the example at this stage of the guide."),(0,i.yg)(a.Ay,{className:"language-html",mdxType:"CodeBlock"},s)))}u.isMDXComponent=!0},5546:(n,e,t)=>{t.d(e,{Ay:()=>y});var o=t(96540),i=t(77964),l=t(78478),a=t(95293),s=t(55597),c=t(6715);function h(n,e,t){n.addEventListener("resize",(()=>{const n=e.getBoundingClientRect();t(n.width,n.height)}),!0)}const r={3.8:async n=>{const e=await t.e(3409).then(t.bind(t,73409));return{module:e,createChart:(t,o)=>{const i=e.createChart(t,o);return h(n,t,i.resize.bind(i)),i}}},"4.0":async n=>{const e=await t.e(7476).then(t.bind(t,37476));return{module:e,createChart:(t,o)=>{const i=e.createChart(t,o);return h(n,t,i.resize.bind(i)),i}}},4.1:async n=>{const e=await t.e(9631).then(t.bind(t,59631));return{module:e,createChart:(t,o)=>{const i=e.createChart(t,o);return h(n,t,i.resize.bind(i)),i}}},current:async()=>{const n=await t.e(7839).then(t.bind(t,47839));return{module:n,createChart:(e,t)=>{const o=n.createChart(e,t);return h(window,e,o.resize.bind(o)),o}}}},p="iframe_R_Fr";function g(n){const{script:e,iframeStyle:t}=n,{preferredVersion:i}=(0,s.g1)(),l=c&&c.length>0?c[0]:"",a=i?.name??l??"current",h=function(n){return`\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t${n}\n\t\t\t};\n\t\t<\/script>\n\t`}(e),g=o.useRef(null);return o.useEffect((()=>{const n=g.current,e=n?.contentWindow,t=n?.contentDocument;if(null===n||!e||!t)return;const o=async()=>{try{const{module:n,createChart:t}=await r[a](e);Object.assign(e,n),e.createChart=t,e.run?.()}catch(n){console.error(n)}};if(void 0!==e.run)o();else{const e=()=>{o(),n.removeEventListener("load",e)};n.addEventListener("load",e)}}),[h]),o.createElement("iframe",{key:e,ref:g,srcDoc:h,className:p,style:t})}var m=t(82840);const d=()=>`${Math.random().toString(36).slice(2,11)}`;function w(n){return"string"==typeof n?n:function(){const[n,e]=(0,o.useState)("");return(0,o.useEffect)((()=>e(d())),[]),n}()}const u=Object.keys(m.k.DARK);const y=n=>{const{chart:e,replaceThemeConstants:t,hideableCode:s,chartOnly:c,iframeStyle:h,replaceTabs:r=!0,...d}=n;let{children:y}=n;const{colorMode:f}=(0,a.G)(),O="dark"===f,b=w();return t&&"string"==typeof y&&(y=function(n,e){const t=e?m.k.DARK:m.k.LIGHT;let o=n;for(const i of u)o=o.replace(new RegExp(i,"g"),`'${t[i]}'`);return o}(y,O)),r&&"string"==typeof y&&(y=y.replace(/\t/g,"    ")),y=y.replace(new RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),e||s?o.createElement(o.Fragment,null,s&&o.createElement(o.Fragment,null,o.createElement("input",{id:b,type:"checkbox",className:"toggle-hidden-lines"}),o.createElement("label",{className:"toggle-label",htmlFor:b},"Show all code")),!c&&o.createElement(i.A,d,y),e&&o.createElement(l.A,{fallback:o.createElement("div",{className:p},"\xa0")},(()=>o.createElement(g,{script:y,iframeStyle:h})))):o.createElement(i.A,d,y)}},97338:(n,e,t)=>{t.d(e,{A:()=>a});var o=t(20053),i=t(96540);const l={details:"details_G3qo"};function a(n){let{children:e}=n;return i.createElement("details",{className:(0,o.A)(l.details)},e)}},82840:(n,e,t)=>{t.d(e,{k:()=>o});const o={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},50087:(n,e,t)=>{t.d(e,{A:()=>o});const o=t.p+"1737e2d56fa4c1dc4de81adcae792187.html"},37616:(n,e,t)=>{t.d(e,{A:()=>o});const o=t.p+"c21d01723d266071229b4b18cc3c6b7d.html"},6715:n=>{n.exports=["4.1","4.0","3.8"]}}]);