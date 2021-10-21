(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4389],{2964:function(n,t,e){"use strict";e.d(t,{u:function(){return a},P:function(){return s}});var r=e(7294),o=e(276).Z,i=e(210);function a(n,t){return r.createElement(r.Fragment,null,n&&r.createElement(i.Z,{className:"language-javascript"},"import "+n+' from "erxes-ui/lib/components/'+n+'";'),r.createElement(o,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Type"),r.createElement("th",null,"Default"),r.createElement("th",null,"Description"))),r.createElement("tbody",null,t.map((function(n,t){return r.createElement("tr",{key:t},n.map((function(n,t){return r.createElement("td",{key:t},n)})))})))))}function s(n){var t=JSON.stringify(n);return t=(t=(t=(t=(t=t.replace(/{"/g,"")).replace(/":/g,"=")).replace(/,"/g," ")).replace(/}/g,"")).replace(/=true/g,"")}},2226:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return E},frontMatter:function(){return w},metadata:function(){return D},toc:function(){return S}});var r=e(4034),o=e(9973),i=e(7294),a=e(3905),s=e(783),p=e(9163),c=e(131),l=e.n(c),m=e(3852),d=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},u=l()(p.ZP.div)(g||(g=d(["\n  height: ",";\n  position: ",";\n"],["\n  height: ",";\n  position: ",";\n"])),(function(n){return n.objective&&"100px"}),(function(n){return n.objective&&"relative"})),f=l()(p.ZP.div)(b||(b=d(["\n  position: absolute;\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  width: ","px;\n  height: ","px;\n  margin-left: -","px;\n  margin-top: -","px;\n  animation: "," 0.75s linear infinite;\n  border: 2px solid ",";\n  border-top-color: ",";\n  border-right-color: ",";\n  border-radius: 100%;\n"],["\n  position: absolute;\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  width: ","px;\n  height: ","px;\n  margin-left: -","px;\n  margin-top: -","px;\n  animation: "," 0.75s linear infinite;\n  border: 2px solid ",";\n  border-top-color: ",";\n  border-right-color: ",";\n  border-radius: 100%;\n"])),(function(n){return n.left}),(function(n){return n.right}),(function(n){return n.top}),(function(n){return n.bottom}),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.size&&n.size/2}),s.U1,m.O9.borderDarker,m.O9.colorSecondary,m.O9.colorSecondary);var g,b,h=function(n){var t=n.objective,e=void 0!==t&&t,r=n.size,o=void 0===r?26:r,a=n.top,s=void 0===a?"50%":a,p=n.bottom,c=void 0===p?"auto":p,l=n.left,m=void 0===l?"50%":l,d=n.right,g=void 0===d?"auto":d;return i.createElement(u,{objective:e},i.createElement(f,{size:o,top:s,bottom:c,right:g,left:m}))},x=e(641),v=e(210),y=e(2964);function k(n){var t=n.type,e=n.values,o=void 0===e?[]:e,a=n.rights,s=void 0===a?[]:a,p=n.table,c=void 0===p?[]:p,l=function(n,t,e){var r;return(r={})[n]=t,r.right=s&&s[e],r.objective=!0,r},m=function(n){return i.createElement(i.Fragment,null,i.createElement("div",{className:x.Z.styleSpinner},o.map((function(t,e){return i.createElement("div",{className:x.Z.spinner},i.createElement(h,(0,r.Z)({key:e},l(n,t,e))))}))),i.createElement(v.Z,{className:"language-jsx"},"<>"+o.map((function(t,e){return"\n\t<Spinner "+(0,y.P)(l(n,t,e))+"/>"}))+"\n</>"))};return"size"===t?m("size"):"position"===t||"objective"===t?m("left"):"APIspinner"===t?(0,y.u)("Spinner",c):null}var w={id:"spinners",title:"Spinners"},D={unversionedId:"components/Spinner/spinners",id:"components/Spinner/spinners",isDocsHomePage:!1,title:"Spinners",description:"Spinners can be used to show the loading state in your projects.",source:"@site/docs/components/Spinner/spinners.md",sourceDirName:"components/Spinner",slug:"/components/Spinner/spinners",permalink:"/components/Spinner/spinners",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/components/Spinner/spinners.md",version:"current",lastUpdatedBy:"zulaann",lastUpdatedAt:1634803898,formattedLastUpdatedAt:"10/21/2021",frontMatter:{id:"spinners",title:"Spinners"},sidebar:"components",previous:{title:"Name card",permalink:"/components/Namecard/namecard"},next:{title:"Table",permalink:"/components/Table/table"}},S=[{value:"Examples",id:"examples",children:[{value:"Sizing",id:"sizing",children:[]}]},{value:"Position",id:"position",children:[]},{value:"Objective",id:"objective",children:[]},{value:"API",id:"api",children:[]}],j={toc:S};function E(n){var t=n.components,e=(0,o.Z)(n,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},j,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Spinners can be used to show the loading state in your projects."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"sizing"},"Sizing"),(0,a.kt)("p",null,"Change the sizing using ",(0,a.kt)("code",null,"size")," prop."),(0,a.kt)(k,{type:"size",values:[40,15],mdxType:"SpinnerComponent"}),(0,a.kt)("h2",{id:"position"},"Position"),(0,a.kt)("p",null,"Change the position with ",(0,a.kt)("code",null,"left"),", ",(0,a.kt)("code",null,"right"),", ",(0,a.kt)("code",null,"top"),", ",(0,a.kt)("code",null,"bottom")," props depending on your purpose."),(0,a.kt)(k,{type:"position",values:["10%","50%","auto"],rights:["auto","auto","10%"],mdxType:"SpinnerComponent"}),(0,a.kt)("h2",{id:"objective"},"Objective"),(0,a.kt)("p",null,"Make your spinner objective by ",(0,a.kt)("code",null,"objective")," prop."),(0,a.kt)(k,{type:"objective",values:["10%"],mdxType:"SpinnerComponent"}),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)(k,{type:"APIspinner",table:[["objective","boolean","false","Make your spinner objective"],["size","number","26","Change the spinning size"],["left","string","50%","Determine space from left side"],["right","string","auto","Determine space from right side"],["top","string","50%","Determine space from top side"],["bottom","string","auto","Determine space from bottom side"]],mdxType:"SpinnerComponent"}))}E.isMDXComponent=!0},783:function(n,t,e){"use strict";e.d(t,{U1:function(){return b},lL:function(){return h}});var r,o,i,a,s,p,c,l,m,d,u,f=e(9163),g=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},b=(0,f.F4)(r||(r=g(["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"],["\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n"]))),h=((0,f.F4)(o||(o=g(["\n  0%{\n    transform:translateY(0px)\n  }\n  28%{\n    transform:translateY(-5px)\n  }\n  44%{\n    transform:translateY(0px)\n  }\n"],["\n  0%{\n    transform:translateY(0px)\n  }\n  28%{\n    transform:translateY(-5px)\n  }\n  44%{\n    transform:translateY(0px)\n  }\n"]))),(0,f.F4)(i||(i=g(["\n  0% {\n    opacity: 0;\n\t}\n\t\n  100% {\n    opacity: 1;\n  }\n"],["\n  0% {\n    opacity: 0;\n\t}\n\t\n  100% {\n    opacity: 1;\n  }\n"]))),(0,f.F4)(a||(a=g(["\n  0% {\n    transform: translateY(-20px);\n    opacity: 0.7;\n\t}\n\t\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"],["\n  0% {\n    transform: translateY(-20px);\n    opacity: 0.7;\n\t}\n\t\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"]))),(0,f.F4)(s||(s=g(["\n  0% {\n    transform: translateX(20px);\n    opacity: 0.7;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"],["\n  0% {\n    transform: translateX(20px);\n    opacity: 0.7;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"]))),(0,f.F4)(p||(p=g(["\n  0% {\n    transform: translateX(-20px);\n    opacity: 0.7;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"],["\n  0% {\n    transform: translateX(-20px);\n    opacity: 0.7;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"]))),(0,f.F4)(c||(c=g(["\n  0%{transform:rotate(-10deg)}\n  28%{transform:rotate(10deg)}\n  10%{transform:rotate(20deg)}\n  18%{transform:rotate(-20deg)}\n  28%{transform:rotate(20deg)}\n  30%,100%{transform:rotate(0deg)}\n"],["\n  0%{transform:rotate(-10deg)}\n  28%{transform:rotate(10deg)}\n  10%{transform:rotate(20deg)}\n  18%{transform:rotate(-20deg)}\n  28%{transform:rotate(20deg)}\n  30%,100%{transform:rotate(0deg)}\n"]))));(0,f.F4)(l||(l=g(["\n  from {\n    background-position:0 0;\n  }\n\n  to {\n    background-position:-10000px 5000px;\n  }\n"],["\n  from {\n    background-position:0 0;\n  }\n\n  to {\n    background-position:-10000px 5000px;\n  }\n"]))),(0,f.F4)(m||(m=g(["\n  from {\n    background-position: 16px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n"],["\n  from {\n    background-position: 16px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n"]))),(0,f.F4)(d||(d=g(["\n  0% { box-shadow: 0 0 -5px 0 #63D2D6; }\n  40% { box-shadow: 0 0 10px 0 #63D2D6; }\n  60% { box-shadow: 0 0 10px 0 #63D2D6; }\n  100% { box-shadow: 0 0 -5px 0 #63D2D6; }\n"],["\n  0% { box-shadow: 0 0 -5px 0 #63D2D6; }\n  40% { box-shadow: 0 0 10px 0 #63D2D6; }\n  60% { box-shadow: 0 0 10px 0 #63D2D6; }\n  100% { box-shadow: 0 0 -5px 0 #63D2D6; }\n"]))),(0,f.F4)(u||(u=g(["\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.1) rotate(30deg);\n    transform: scale(0.1) rotate(30deg);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n  }\n\n  50% {\n    -webkit-transform: rotate(-10deg);\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    -webkit-transform: rotate(3deg);\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}"],["\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.1) rotate(30deg);\n    transform: scale(0.1) rotate(30deg);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n  }\n\n  50% {\n    -webkit-transform: rotate(-10deg);\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    -webkit-transform: rotate(3deg);\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}"])))},641:function(n,t){"use strict";t.Z={buttons:"buttons_18wb",step:"step_2TGP",dedicationWrapper:"dedicationWrapper_3CLG",featureImage:"featureImage_Nz4U",investIcon:"investIcon_1E_p",smallDesc:"smallDesc_rLtZ",description:"description_30kM",item:"item_281F",link:"link_3jTK",iframe:"iframe_WMJZ",clientsWrapper:"clientsWrapper_2zdX",clients:"clients_21O3",features:"features_2xlB",iconWrapper:"iconWrapper_2t8I",colorYellow:"colorYellow_iVS4",colorPrimary:"colorPrimary_1n6O",descriptionList:"descriptionList_3h7-",styled:"styled_304r",styleSpinner:"styleSpinner_1qYL",spinner:"spinner_3Hax"}}}]);