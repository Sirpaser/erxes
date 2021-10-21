(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5623],{7484:function(n){n.exports=function(){"use strict";var n=1e3,t=6e4,r=36e5,e="millisecond",i="second",o="minute",a="hour",s="day",c="week",u="month",l="quarter",p="year",d="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,x={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(n,t,r){var e=String(n);return!e||e.length>=t?n:""+Array(t+1-e.length).join(r)+n},y={s:m,z:function(n){var t=-n.utcOffset(),r=Math.abs(t),e=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+m(e,2,"0")+":"+m(i,2,"0")},m:function n(t,r){if(t.date()<r.date())return-n(r,t);var e=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(e,u),o=r-i<0,a=t.clone().add(e+(o?-1:1),u);return+(-(e+(r-i)/(o?i-a:a-i))||0)},a:function(n){return n<0?Math.ceil(n)||0:Math.floor(n)},p:function(n){return{M:u,y:p,w:c,d:s,D:d,h:a,m:o,s:i,ms:e,Q:l}[n]||String(n||"").toLowerCase().replace(/s$/,"")},u:function(n){return void 0===n}},v="en",b={};b[v]=x;var $=function(n){return n instanceof k},w=function(n,t,r){var e;if(!n)return v;if("string"==typeof n)b[n]&&(e=n),t&&(b[n]=t,e=n);else{var i=n.name;b[i]=n,e=i}return!r&&e&&(v=e),e||!r&&v},O=function(n,t){if($(n))return n.clone();var r="object"==typeof t?t:{};return r.date=n,r.args=arguments,new k(r)},S=y;S.l=w,S.i=$,S.w=function(n,t){return O(n,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function x(n){this.$L=w(n.locale,null,!0),this.parse(n)}var m=x.prototype;return m.parse=function(n){this.$d=function(n){var t=n.date,r=n.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var e=t.match(h);if(e){var i=e[2]-1||0,o=(e[7]||"0").substring(0,3);return r?new Date(Date.UTC(e[1],i,e[3]||1,e[4]||0,e[5]||0,e[6]||0,o)):new Date(e[1],i,e[3]||1,e[4]||0,e[5]||0,e[6]||0,o)}}return new Date(t)}(n),this.$x=n.x||{},this.init()},m.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},m.$utils=function(){return S},m.isValid=function(){return!(this.$d.toString()===f)},m.isSame=function(n,t){var r=O(n);return this.startOf(t)<=r&&r<=this.endOf(t)},m.isAfter=function(n,t){return O(n)<this.startOf(t)},m.isBefore=function(n,t){return this.endOf(t)<O(n)},m.$g=function(n,t,r){return S.u(n)?this[t]:this.set(r,n)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(n,t){var r=this,e=!!S.u(t)||t,l=S.p(n),f=function(n,t){var i=S.w(r.$u?Date.UTC(r.$y,t,n):new Date(r.$y,t,n),r);return e?i:i.endOf(s)},h=function(n,t){return S.w(r.toDate()[n].apply(r.toDate("s"),(e?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,x=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case p:return e?f(1,0):f(31,11);case u:return e?f(1,x):f(0,x+1);case c:var v=this.$locale().weekStart||0,b=(g<v?g+7:g)-v;return f(e?m-b:m+(6-b),x);case s:case d:return h(y+"Hours",0);case a:return h(y+"Minutes",1);case o:return h(y+"Seconds",2);case i:return h(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(n){return this.startOf(n,!1)},m.$set=function(n,t){var r,c=S.p(n),l="set"+(this.$u?"UTC":""),f=(r={},r[s]=l+"Date",r[d]=l+"Date",r[u]=l+"Month",r[p]=l+"FullYear",r[a]=l+"Hours",r[o]=l+"Minutes",r[i]=l+"Seconds",r[e]=l+"Milliseconds",r)[c],h=c===s?this.$D+(t-this.$W):t;if(c===u||c===p){var g=this.clone().set(d,1);g.$d[f](h),g.init(),this.$d=g.set(d,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},m.set=function(n,t){return this.clone().$set(n,t)},m.get=function(n){return this[S.p(n)]()},m.add=function(e,l){var d,f=this;e=Number(e);var h=S.p(l),g=function(n){var t=O(f);return S.w(t.date(t.date()+Math.round(n*e)),f)};if(h===u)return this.set(u,this.$M+e);if(h===p)return this.set(p,this.$y+e);if(h===s)return g(1);if(h===c)return g(7);var x=(d={},d[o]=t,d[a]=r,d[i]=n,d)[h]||1,m=this.$d.getTime()+e*x;return S.w(m,this)},m.subtract=function(n,t){return this.add(-1*n,t)},m.format=function(n){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var e=n||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),o=this.$H,a=this.$m,s=this.$M,c=r.weekdays,u=r.months,l=function(n,r,i,o){return n&&(n[r]||n(t,e))||i[r].substr(0,o)},p=function(n){return S.s(o%12||12,n,"0")},d=r.meridiem||function(n,t,r){var e=n<12?"AM":"PM";return r?e.toLowerCase():e},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:S.s(s+1,2,"0"),MMM:l(r.monthsShort,s,u,3),MMMM:l(u,s),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,c,2),ddd:l(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:S.s(o,2,"0"),h:p(1),hh:p(2),a:d(o,a,!0),A:d(o,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return e.replace(g,(function(n,t){return t||h[n]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(e,d,f){var h,g=S.p(d),x=O(e),m=(x.utcOffset()-this.utcOffset())*t,y=this-x,v=S.m(this,x);return v=(h={},h[p]=v/12,h[u]=v,h[l]=v/3,h[c]=(y-m)/6048e5,h[s]=(y-m)/864e5,h[a]=y/r,h[o]=y/t,h[i]=y/n,h)[g]||y,f?v:S.a(v)},m.daysInMonth=function(){return this.endOf(u).$D},m.$locale=function(){return b[this.$L]},m.locale=function(n,t){if(!n)return this.$L;var r=this.clone(),e=w(n,t,!0);return e&&(r.$L=e),r},m.clone=function(){return S.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},x}(),M=k.prototype;return O.prototype=M,[["$ms",e],["$s",i],["$m",o],["$H",a],["$W",s],["$M",u],["$y",p],["$D",d]].forEach((function(n){M[n[1]]=function(t){return this.$g(t,n[0],n[1])}})),O.extend=function(n,t){return n.$i||(n(t,k,O),n.$i=!0),O},O.locale=w,O.isDayjs=$,O.unix=function(n){return O(1e3*n)},O.en=b[v],O.Ls=b,O.p={},O}()},4020:function(n){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),e=new RegExp("("+t+")+","gi");function i(n,t){try{return decodeURIComponent(n.join(""))}catch(o){}if(1===n.length)return n;t=t||1;var r=n.slice(0,t),e=n.slice(t);return Array.prototype.concat.call([],i(r),i(e))}function o(n){try{return decodeURIComponent(n)}catch(o){for(var t=n.match(r),e=1;e<t.length;e++)t=(n=i(t,e).join("")).match(r);return n}}n.exports=function(n){if("string"!=typeof n)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof n+"`");try{return n=n.replace(/\+/g," "),decodeURIComponent(n)}catch(t){return function(n){for(var r={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},i=e.exec(n);i;){try{r[i[0]]=decodeURIComponent(i[0])}catch(t){var a=o(i[0]);a!==i[0]&&(r[i[0]]=a)}i=e.exec(n)}r["%C2"]="\ufffd";for(var s=Object.keys(r),c=0;c<s.length;c++){var u=s[c];n=n.replace(new RegExp(u,"g"),r[u])}return n}(n)}}},5623:function(n,t,r){"use strict";r.d(t,{__:function(){return U},pJ:function(){return B}});r(7484);var e=r(1826),i=r.n(e);r(7294);var o,a,s,c,u,l,p,d,f,h,g,x,m,y,v,b,$,w,O,S,k,M,_,j,F,D,P,C=r(3852),Z=r(5949),z=r(9163),A=r(131),I=r.n(A),E=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},W=I()(z.ZP.div)(o||(o=E(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0 ","px ","px;\n\n  > a, button {\n    flex: 1;\n    padding: 4px 15px;\n\n    i {\n      font-size: 12px;\n      line-height: 16px;\n    }\n  }\n\n  > div {\n    margin-left: 10px;\n  }\n\n  .dropdown {\n    display: ",";\n  }\n"],["\n  display: flex;\n  justify-content: space-between;\n  padding: 0 ","px ","px;\n\n  > a, button {\n    flex: 1;\n    padding: 4px 15px;\n\n    i {\n      font-size: 12px;\n      line-height: 16px;\n    }\n  }\n\n  > div {\n    margin-left: 10px;\n  }\n\n  .dropdown {\n    display: ",";\n  }\n"])),C.MB.coreSpacing,C.MB.unitSpacing,(function(n){return n.isSmall?"inline-block":"block"})),N=(z.ZP.div(a||(a=E(["\n  display: inline-block;\n  position: relative;\n\n  > * {\n    display: inline-block;\n  }\n\n  > i {\n    margin-left: 3px;\n    margin-right: -4px;\n    transition: all ease 0.3s;\n    color: ",";\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n"],["\n  display: inline-block;\n  position: relative;\n\n  > * {\n    display: inline-block;\n  }\n\n  > i {\n    margin-left: 3px;\n    margin-right: -4px;\n    transition: all ease 0.3s;\n    color: ",";\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n"])),C.O9.colorCoreGray),I()(z.ZP.div)(s||(s=E(["\n  flex: 1;\n  display: flex;\n  min-height: 100%;\n  justify-content: ",";\n  align-items: ",";\n"],["\n  flex: 1;\n  display: flex;\n  min-height: 100%;\n  justify-content: ",";\n  align-items: ",";\n"])),(function(n){return n.center&&"center"}),(function(n){return n.align?"flex-start":"center"})),I()(z.ZP.div)(u||(u=E(["\n  width: 900px;\n\n  background: ",";\n  margin: 10px 0;\n\n  ",";\n\n  @media (max-width: 900px) {\n    width: 100%;\n  }\n"],["\n  width: 900px;\n\n  background: ",";\n  margin: 10px 0;\n\n  ",";\n\n  @media (max-width: 900px) {\n    width: 100%;\n  }\n"])),(function(n){return!n.transparent&&C.O9.colorWhite}),(function(n){return!n.shrink&&(0,z.iv)(c||(c=E(["\n      height: 100%;\n      height: calc(100% - 20px);\n    "],["\n      height: 100%;\n      height: calc(100% - 20px);\n    "])))})),I()(z.ZP.div)(l||(l=E(["\n  text-align: center;\n  float: left;\n  background: ",";\n  box-shadow: "," ;\n  margin-right: ","px;\n  margin-bottom: ","px;\n  border-radius: ","px;\n  transition: all 0.25s ease;\n  border: 1px solid\n    ",";\n\n  > a {\n    display: block;\n    padding: ","px;\n    text-decoration: none;\n\n    &:focus {\n      text-decoration: none;\n    }\n  }\n\n  img {\n    width: 83px;\n    transition: all 0.5s ease;\n  }\n\n  span {\n    color: ",";\n    display: block;\n    margin-top: ","px;\n  }\n\n  &:hover {\n    cursor: pointer;\n    box-shadow: 0 10px 20px ",";\n\n    span {\n      font-weight: 500;\n    }\n\n    img {\n      transform: scale(1.1);\n    }\n  }\n\n  @media (max-width: 780px) {\n    width: 100%;\n  }\n"],["\n  text-align: center;\n  float: left;\n  background: ",";\n  box-shadow: "," ;\n  margin-right: ","px;\n  margin-bottom: ","px;\n  border-radius: ","px;\n  transition: all 0.25s ease;\n  border: 1px solid\n    ",";\n\n  > a {\n    display: block;\n    padding: ","px;\n    text-decoration: none;\n\n    &:focus {\n      text-decoration: none;\n    }\n  }\n\n  img {\n    width: 83px;\n    transition: all 0.5s ease;\n  }\n\n  span {\n    color: ",";\n    display: block;\n    margin-top: ","px;\n  }\n\n  &:hover {\n    cursor: pointer;\n    box-shadow: 0 10px 20px ",";\n\n    span {\n      font-weight: 500;\n    }\n\n    img {\n      transform: scale(1.1);\n    }\n  }\n\n  @media (max-width: 780px) {\n    width: 100%;\n  }\n"])),C.O9.colorLightBlue,(function(n){return n.selected?"0 10px 20px "+(0,Z.m4)(C.O9.colorCoreDarkGray,.12):"0 6px 10px 1px "+(0,Z.m4)(C.O9.colorCoreGray,.08)}),C.MB.coreSpacing,C.MB.coreSpacing,C.MB.unitSpacing/2-1,(function(n){return n.selected?C.O9.colorSecondary:C.O9.borderPrimary}),C.MB.coreSpacing,C.O9.colorCoreGray,C.MB.unitSpacing,(0,Z.m4)(C.O9.colorCoreDarkGray,.12)),z.ZP.div(p||(p=E(["\n  padding: 20px 20px 30px 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  "," {\n    padding: 0;\n  }\n"],["\n  padding: 20px 20px 30px 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  "," {\n    padding: 0;\n  }\n"])),W),z.ZP.div(d||(d=E(["\n  margin-top: 5px;\n\n  a {\n    color: ",";\n    margin-right: 10px;\n\n    &:hover {\n      color: ",";\n    }\n\n    i {\n      font-size: 14px;\n    }\n  }\n"],["\n  margin-top: 5px;\n\n  a {\n    color: ",";\n    margin-right: 10px;\n\n    &:hover {\n      color: ",";\n    }\n\n    i {\n      font-size: 14px;\n    }\n  }\n"])),C.O9.colorCoreLightGray,C.O9.colorCoreGray),z.ZP.div(f||(f=E(["\n  display: flex;\n\n  img {\n    display: block;\n    width: 100px;\n    height: 100px;\n    border-radius: 50px;\n    background-color: ",";\n  }\n"],["\n  display: flex;\n\n  img {\n    display: block;\n    width: 100px;\n    height: 100px;\n    border-radius: 50px;\n    background-color: ",";\n  }\n"])),C.O9.colorCoreGray),z.ZP.div(h||(h=E(["\n  flex: 1;\n  padding-right: 40px;\n\n  &:last-of-type {\n    padding: 0;\n  }\n"],["\n  flex: 1;\n  padding-right: 40px;\n\n  &:last-of-type {\n    padding: 0;\n  }\n"]))),z.ZP.div(g||(g=E(["\n  text-align: right;\n  margin-top: 30px;\n"],["\n  text-align: right;\n  margin-top: 30px;\n"]))),z.ZP.div(x||(x=E(["\n  text-align: center;\n  margin-top: 10px;\n"],["\n  text-align: center;\n  margin-top: 10px;\n"]))),I()(z.ZP.div)(m||(m=E(["\n  position: relative;\n  height: ",";\n"],["\n  position: relative;\n  height: ",";\n"])),(function(n){return n.isEmpty&&"360px"})),I()(z.ZP.span)(y||(y=E(["\n  font-size: 18px;\n  line-height: 22px;\n\n  &:after {\n    cursor: pointer;\n    content: '\\e9a6';\n    font-family: 'erxes';\n    float: right;\n    transition: all ease 0.3s;\n    margin-left: ","px;\n    transform: ",";\n  }\n"],["\n  font-size: 18px;\n  line-height: 22px;\n\n  &:after {\n    cursor: pointer;\n    content: '\\\\e9a6';\n    font-family: 'erxes';\n    float: right;\n    transition: all ease 0.3s;\n    margin-left: ","px;\n    transform: ",";\n  }\n"])),C.MB.unitSpacing-2,(function(n){return n.isOpen&&"rotate(180deg)"})),z.ZP.div(v||(v=E(["\n  width: 320px;\n"],["\n  width: 320px;\n"]))),z.ZP.div(b||(b=E(["\n  position: absolute;\n  right: -40px;\n  width: 30px;\n  height: 30px;\n  background: ",";\n  line-height: 30px;\n  border-radius: 15px;\n  text-align: center;\n  color: ",";\n\n  &:hover {\n    background: ",";\n    cursor: pointer;\n  }\n\n  @media screen and (max-width: 1092px) {\n    right: 10px;\n    top: 10px;\n  }\n"],["\n  position: absolute;\n  right: -40px;\n  width: 30px;\n  height: 30px;\n  background: ",";\n  line-height: 30px;\n  border-radius: 15px;\n  text-align: center;\n  color: ",";\n\n  &:hover {\n    background: ",";\n    cursor: pointer;\n  }\n\n  @media screen and (max-width: 1092px) {\n    right: 10px;\n    top: 10px;\n  }\n"])),(0,Z.m4)(C.O9.colorBlack,.3),C.O9.colorWhite,(0,Z.m4)(C.O9.colorBlack,.4)),z.ZP.time($||($=E(["\n  font-size: 12px;\n"],["\n  font-size: 12px;\n"]))),I()(z.ZP.div)(w||(w=E(["\n  height: 50vh;\n  height: ",";\n  overflow: auto;\n  padding: 5px 10px 0 20px;\n  margin-left: -20px;\n  margin-right: -10px;\n  margin-top: -5px;\n"],["\n  height: 50vh;\n  height: ",";\n  overflow: auto;\n  padding: 5px 10px 0 20px;\n  margin-left: -20px;\n  margin-right: -10px;\n  margin-top: -5px;\n"])),(function(n){return n.calcHeight?"calc(100vh - "+n.calcHeight+"px)":"calc(100vh - 280px)"})),z.ZP.div(O||(O=E(["\n  .form-control {\n    box-shadow: none;\n    border-radius: 0;\n    border: none;\n    background: none;\n    border-bottom: 1px solid ",";\n    padding: 5px 0;\n    font-size: ","px;\n\n    &:focus {\n      box-shadow: none;\n      border-color: ",";\n    }\n  }\n"],["\n  .form-control {\n    box-shadow: none;\n    border-radius: 0;\n    border: none;\n    background: none;\n    border-bottom: 1px solid ",";\n    padding: 5px 0;\n    font-size: ","px;\n\n    &:focus {\n      box-shadow: none;\n      border-color: ",";\n    }\n  }\n"])),C.O9.colorShadowGray,C.cp.fontSizeBody,C.O9.colorSecondary),z.ZP.div(S||(S=E(["\n  margin-top: ","px;\n"],["\n  margin-top: ","px;\n"])),C.MB.coreSpacing),z.ZP.div(k||(k=E(["\n  text-align: center;\n  padding: 16px 0;\n  font-size: 12px;\n\n  span {\n    background: rgba(0, 0, 0, 0.06);\n    padding: 4px 16px;\n    color: ",";\n    border-radius: 25px;\n    transition: all 0.3s ease;\n\n    &:hover {\n      cursor: pointer;\n      background: rgba(0, 0, 0, 0.1);\n      color: ",";\n    }\n  }\n"],["\n  text-align: center;\n  padding: 16px 0;\n  font-size: 12px;\n\n  span {\n    background: rgba(0, 0, 0, 0.06);\n    padding: 4px 16px;\n    color: ",";\n    border-radius: 25px;\n    transition: all 0.3s ease;\n\n    &:hover {\n      cursor: pointer;\n      background: rgba(0, 0, 0, 0.1);\n      color: ",";\n    }\n  }\n"])),C.O9.colorCoreGray,C.O9.textSecondary),I()(z.ZP.div)(M||(M=E(["\n  font-size: 15px;\n  background: ",";\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  border-radius: 2px;\n  transition: background ease 0.3s;\n\n  &:hover {\n    background: ",";\n    cursor: pointer;\n  }\n"],["\n  font-size: 15px;\n  background: ",";\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  border-radius: 2px;\n  transition: background ease 0.3s;\n\n  &:hover {\n    background: ",";\n    cursor: pointer;\n  }\n"])),(function(n){return n.isActive&&C.O9.bgGray}),C.O9.bgActive),z.ZP.div(_||(_=E(["\n  padding: 18px 20px;\n"],["\n  padding: 18px 20px;\n"]))),I()(z.ZP.div)(j||(j=E(["\n  font-size: 24px;\n  margin: 20px 0;\n  display: flex;\n  line-height: 30px;\n  text-transform: ",";\n\n  > span {\n    font-size: 75%;\n    color: #666;\n    margin-left: 10px;\n    margin-top: 2px;\n  }\n"],["\n  font-size: 24px;\n  margin: 20px 0;\n  display: flex;\n  line-height: 30px;\n  text-transform: ",";\n\n  > span {\n    font-size: 75%;\n    color: #666;\n    margin-left: 10px;\n    margin-top: 2px;\n  }\n"])),(function(n){return n.capitalize&&"capitalize"})),z.ZP.div(F||(F=E(["\n  font-size: 15px;\n  font-weight: bold;\n  margin: 10px 20px;\n  color: #666;\n"],["\n  font-size: 15px;\n  font-weight: bold;\n  margin: 10px 20px;\n  color: #666;\n"]))),z.ZP.div(D||(D=E(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 200px;\n"],["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 200px;\n"]))),r(7563),function(n){try{return Boolean(new URL(n))}catch(t){return!1}}),U=(P=function(n,t){return(P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])})(n,t)},function(n,t){var r=i().translate(n,t);return r?r.toString():""}),B=function(n){return!n||N(n)||n.includes("/")?n:T().REACT_APP_API_URL+"/read-file?key="+n};var T=function(){for(var n={},t=0,r=window.envMaps;t<r.length;t++){var e=r[t];n[e.name]=localStorage.getItem("erxes_env_"+e.name)}return n}},2806:function(n){"use strict";n.exports=function(n,t){for(var r={},e=Object.keys(n),i=Array.isArray(t),o=0;o<e.length;o++){var a=e[o],s=n[a];(i?-1!==t.indexOf(a):t(a,s,n))&&(r[a]=s)}return r}},1826:function(n,t,r){"use strict";var e=this&&this.__rest||function(n,t){var r={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(r[e]=n[e]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(e=Object.getOwnPropertySymbols(n);i<e.length;i++)t.indexOf(e[i])<0&&(r[e[i]]=n[e[i]])}return r};t.__esModule=!0;var i=r(7294),o=r(288);function a(n){return"string"==typeof n||n instanceof String}function s(n){return"object"==typeof n}function c(n){return"function"==typeof n}function u(n,t){for(var r=t.split("."),e=0,i=r.length;e<i;e++){if(!n||!s(n))return;n=n[r[e]]}return n}var l=function(){function n(n,t,r){this.mdFlavor=n,this.inter=t,this.self=r}return n.prototype.M=function(n){if(!n)return null;var t=o.mdMatch(this.mdFlavor,n);if(!t)return n;var r=null;switch(t.tag){case"inter":r=this.inter&&this.inter(t.body);break;case"self":r=this.self&&this.self(t.body);break;case"literals":case"literal":r=t.body;break;default:r=i.createElement(t.tag,{key:t.tag+t.body},this.M(t.body))}return function(n){for(var t=[],r="",e=function(){return r&&(t.push(r),r="")},i=0,o=n;i<o.length;i++){var s=o[i];null!=s&&(a(s)?r+=s:(e(),t.push(s)))}return e(),t.length>1?t:t.length?t[0]:null}([this.M(t.head),r,this.M(t.tail)])},n}();function p(n,t,r,e){var i,o=r[t];return null!=o&&null!=e[o]&&null==(i=u(n,e[o].toString()))&&+e[o]===e[o]&&(i=function(n,t){for(var r in n)if(n.hasOwnProperty(r)){var e=r.match(/^(-?\d+)\.\.(-?\d+)$/);if(e&&+e[1]<=t&&t<=+e[2])return n[r]}}(n,+e[o])),null==i&&(i=n._),null==i&&(i=function(n){for(var t in n)if("__"!=t)return n[t]}(n)),null==i||a(i)?i:p(i,t+1,r,e)}var d=function(){function n(n,t){this.texts=n,this.MDFlavor=0,this.notFound=void 0,this.p=this.factory("p"),this.span=this.factory("span"),this.li=this.factory("li"),this.div=this.factory("div"),this.button=this.factory("button"),this.a=this.factory("a"),this.text=this.factory(null),this.setOpts(t)}return n.prototype.setTexts=function(n,t){this.texts=n,this.setOpts(t)},n.prototype.setOpts=function(n){n&&(void 0!==n.notFound&&(this.notFound=n.notFound),void 0!==n.MDFlavor&&(this.MDFlavor=n.MDFlavor))},n.prototype.interpolate=function(n,t){var r=n.split(","),e=r[0],o=r[1],a=u(t,e);return null==a?null:i.isValidElement(a)?i.cloneElement(a,{key:"r"}):o&&o.match(/l/)?a.toLocaleString():a.toString()},n.prototype.format=function(n,t){var r=this;return n?new l(o.mdFlavors[this.MDFlavor],(function(n){return r.interpolate(n,t)}),(function(n){return r.translate(n,t)})).M(n):n},n.prototype.translate=function(n,t){if(!n)return n;var r=u(this.texts,n),e=t&&t.context;return null==r||a(r)||c(r)||(r=function(n,t){if(null==t)return p(n,0,[],null);if(s(t)){var r=[];if(n.__)r=n.__.split(".");else for(var e in t)t.hasOwnProperty(e)&&r.push(e);return p(n,0,r,t)}return p(n,0,["_"],{_:t})}(r,e)),null==r&&(r=t&&void 0!==t.notFound?t.notFound:void 0!==this.notFound?this.notFound:n),c(r)&&(r=r(n,e)),this.format(r,t)},n.prototype.factory=function(n){var t=this;return function(r){var o,s,c=r.text,u=r.tag,l=e(r,["text","tag"]);if(null==c||a(c)){o=c,s=r;l.notFound,l.context;l=e(l,["notFound","context"])}else o=c.key,s=c;var p=n||u,d=t.translate(o,s);return p?i.createElement(p,l,d):d}},n}();t.MDText=d;var f=new d(null);t.default=f},288:function(n,t){"use strict";t.__esModule=!0;var r={"`` ":[/^(.*?(?:(?!`).|^))(``+)\s(.*?)\s\2(?!`)(.*)$/,[1,3,4]],"``":[/^(.*?(?:(?!`).|^))(``+)(?!`)(.*?(?!`).)\2(?!`)(.*)$/,[1,3,4]],"*":/^(|.*?\W)\*(\S.*?)\*(|\W.*)$/,"**":/^(|.*?\W)\*\*(\S.*?)\*\*(|\W.*)$/,_:/^(|.*?\W)_(\S.*?)_(|\W.*)$/,__:/^(|.*?\W)__(\S.*?)__(|\W.*)$/,"~":/^(|.*?\W)~(\S.*?)~(|\W.*)$/,"~~":/^(|.*?\W)~~(\S.*?)~~(|\W.*)$/,"[]":/^(.*?)\[(.*?)\](.*)$/,"#":/^(|.*?(?=\n))\n*\s*#([^#].*?)#*\s*\n+([\S\s]*)$/,"##":/^(|.*?(?=\n))\n*\s*##([^#].*?)#*\s*\n+([\S\s]*)$/,"###":/^(|.*?(?=\n))\n*\s*###([^#].*?)#*\s*\n+([\S\s]*)$/,"####":/^(|.*?(?=\n))\n*\s*####([^#].*?)#*\s*\n+([\S\s]*)$/,"\n":/^(.*?)[^\S\n]*\n()[^\S\n]*([\s\S]*)$/,"{{}}":/^(.*?)\{\{(.*?)\}\}(.*)$/,"{}":/^(.*?)\{(.*?)\}(.*)$/};t.mdFlavors=[{maybe:/[\*_\{\[\n]/,tags:{strong:r["*"],em:r._,p:r["[]"],h1:r["#"],h2:r["##"],h3:r["###"],h4:r["####"],br:r["\n"],self:r["{{}}"],inter:r["{}"]}},{maybe:/[`\*_~\{\[\n]/,tags:{literals:r["`` "],literal:r["``"],strong:r["**"],em:r["*"],b:r.__,i:r._,strike:r["~~"],u:r["~"],p:r["[]"],h1:r["#"],h2:r["##"],h3:r["###"],h4:r["####"],br:r["\n"],self:r["{{}}"],inter:r["{}"]}}],t.mdMatch=function(n,t){if(!t.match(n.maybe))return null;var r=n.tags,e=null;for(var i in r)if(r.hasOwnProperty(i)){var o=r[i],a=o instanceof RegExp?[o,[1,2,3]]:o,s=a[0],c=a[1],u=s.exec(t);u&&(null==e||u[c[0]].length<e.head.length)&&(e={tag:i,head:u[c[0]],body:u[c[1]],tail:u[c[2]]})}return e}},7563:function(n,t,r){"use strict";const e=r(610),i=r(4020),o=r(500),a=r(2806),s=Symbol("encodeFragmentIdentifier");function c(n){if("string"!=typeof n||1!==n.length)throw new TypeError("arrayFormatSeparator must be single character string")}function u(n,t){return t.encode?t.strict?e(n):encodeURIComponent(n):n}function l(n,t){return t.decode?i(n):n}function p(n){return Array.isArray(n)?n.sort():"object"==typeof n?p(Object.keys(n)).sort(((n,t)=>Number(n)-Number(t))).map((t=>n[t])):n}function d(n){const t=n.indexOf("#");return-1!==t&&(n=n.slice(0,t)),n}function f(n){const t=(n=d(n)).indexOf("?");return-1===t?"":n.slice(t+1)}function h(n,t){return t.parseNumbers&&!Number.isNaN(Number(n))&&"string"==typeof n&&""!==n.trim()?n=Number(n):!t.parseBooleans||null===n||"true"!==n.toLowerCase()&&"false"!==n.toLowerCase()||(n="true"===n.toLowerCase()),n}function g(n,t){c((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(n){let t;switch(n.arrayFormat){case"index":return(n,r,e)=>{t=/\[(\d*)\]$/.exec(n),n=n.replace(/\[\d*\]$/,""),t?(void 0===e[n]&&(e[n]={}),e[n][t[1]]=r):e[n]=r};case"bracket":return(n,r,e)=>{t=/(\[\])$/.exec(n),n=n.replace(/\[\]$/,""),t?void 0!==e[n]?e[n]=[].concat(e[n],r):e[n]=[r]:e[n]=r};case"comma":case"separator":return(t,r,e)=>{const i="string"==typeof r&&r.includes(n.arrayFormatSeparator),o="string"==typeof r&&!i&&l(r,n).includes(n.arrayFormatSeparator);r=o?l(r,n):r;const a=i||o?r.split(n.arrayFormatSeparator).map((t=>l(t,n))):null===r?r:l(r,n);e[t]=a};case"bracket-separator":return(t,r,e)=>{const i=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!i)return void(e[t]=r?l(r,n):r);const o=null===r?[]:r.split(n.arrayFormatSeparator).map((t=>l(t,n)));void 0!==e[t]?e[t]=[].concat(e[t],o):e[t]=o};default:return(n,t,r)=>{void 0!==r[n]?r[n]=[].concat(r[n],t):r[n]=t}}}(t),e=Object.create(null);if("string"!=typeof n)return e;if(!(n=n.trim().replace(/^[?#&]/,"")))return e;for(const i of n.split("&")){if(""===i)continue;let[n,a]=o(t.decode?i.replace(/\+/g," "):i,"=");a=void 0===a?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:l(a,t),r(l(n,t),a,e)}for(const i of Object.keys(e)){const n=e[i];if("object"==typeof n&&null!==n)for(const r of Object.keys(n))n[r]=h(n[r],t);else e[i]=h(n,t)}return!1===t.sort?e:(!0===t.sort?Object.keys(e).sort():Object.keys(e).sort(t.sort)).reduce(((n,t)=>{const r=e[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?n[t]=p(r):n[t]=r,n}),Object.create(null))}t.extract=f,t.parse=g,t.stringify=(n,t)=>{if(!n)return"";c((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==n[r]||t.skipEmptyString&&""===n[r],e=function(n){switch(n.arrayFormat){case"index":return t=>(r,e)=>{const i=r.length;return void 0===e||n.skipNull&&null===e||n.skipEmptyString&&""===e?r:null===e?[...r,[u(t,n),"[",i,"]"].join("")]:[...r,[u(t,n),"[",u(i,n),"]=",u(e,n)].join("")]};case"bracket":return t=>(r,e)=>void 0===e||n.skipNull&&null===e||n.skipEmptyString&&""===e?r:null===e?[...r,[u(t,n),"[]"].join("")]:[...r,[u(t,n),"[]=",u(e,n)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===n.arrayFormat?"[]=":"=";return r=>(e,i)=>void 0===i||n.skipNull&&null===i||n.skipEmptyString&&""===i?e:(i=null===i?"":i,0===e.length?[[u(r,n),t,u(i,n)].join("")]:[[e,u(i,n)].join(n.arrayFormatSeparator)])}default:return t=>(r,e)=>void 0===e||n.skipNull&&null===e||n.skipEmptyString&&""===e?r:null===e?[...r,u(t,n)]:[...r,[u(t,n),"=",u(e,n)].join("")]}}(t),i={};for(const a of Object.keys(n))r(a)||(i[a]=n[a]);const o=Object.keys(i);return!1!==t.sort&&o.sort(t.sort),o.map((r=>{const i=n[r];return void 0===i?"":null===i?u(r,t):Array.isArray(i)?0===i.length&&"bracket-separator"===t.arrayFormat?u(r,t)+"[]":i.reduce(e(r),[]).join("&"):u(r,t)+"="+u(i,t)})).filter((n=>n.length>0)).join("&")},t.parseUrl=(n,t)=>{t=Object.assign({decode:!0},t);const[r,e]=o(n,"#");return Object.assign({url:r.split("?")[0]||"",query:g(f(n),t)},t&&t.parseFragmentIdentifier&&e?{fragmentIdentifier:l(e,t)}:{})},t.stringifyUrl=(n,r)=>{r=Object.assign({encode:!0,strict:!0,[s]:!0},r);const e=d(n.url).split("?")[0]||"",i=t.extract(n.url),o=t.parse(i,{sort:!1}),a=Object.assign(o,n.query);let c=t.stringify(a,r);c&&(c=`?${c}`);let l=function(n){let t="";const r=n.indexOf("#");return-1!==r&&(t=n.slice(r)),t}(n.url);return n.fragmentIdentifier&&(l=`#${r[s]?u(n.fragmentIdentifier,r):n.fragmentIdentifier}`),`${e}${c}${l}`},t.pick=(n,r,e)=>{e=Object.assign({parseFragmentIdentifier:!0,[s]:!1},e);const{url:i,query:o,fragmentIdentifier:c}=t.parseUrl(n,e);return t.stringifyUrl({url:i,query:a(o,r),fragmentIdentifier:c},e)},t.exclude=(n,r,e)=>{const i=Array.isArray(r)?n=>!r.includes(n):(n,t)=>!r(n,t);return t.pick(n,i,e)}},500:function(n){"use strict";n.exports=(n,t)=>{if("string"!=typeof n||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[n];const r=n.indexOf(t);return-1===r?[n]:[n.slice(0,r),n.slice(r+t.length)]}},610:function(n){"use strict";n.exports=n=>encodeURIComponent(n).replace(/[!'()*]/g,(n=>`%${n.charCodeAt(0).toString(16).toUpperCase()}`))}}]);