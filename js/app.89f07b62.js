(function(e){function t(t){for(var a,r,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-03fabeda":"9df7b935","chunk-21bc1059":"5eca73f6","chunk-26001e90":"6e52649a","chunk-3af647d1":"8e330e35","chunk-5b5b6be4":"28961655","chunk-7dd6e52c":"a5dc8b09"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-03fabeda":1,"chunk-21bc1059":1,"chunk-26001e90":1,"chunk-3af647d1":1,"chunk-5b5b6be4":1,"chunk-7dd6e52c":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-03fabeda":"b64786d9","chunk-21bc1059":"f6c8fab4","chunk-26001e90":"b77ac004","chunk-3af647d1":"40acb24f","chunk-5b5b6be4":"0e8891cf","chunk-7dd6e52c":"729e7773"}[e]+".css",o=u.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"03f8":function(e,t,n){},"0d0a":function(e,t,n){"use strict";n("03f8")},"12d5":function(e,t,n){},"1bda":function(e,t,n){"use strict";n("8355")},"26c5":function(e,t,n){},4144:function(e,t,n){"use strict";n("26c5")},"49f4":function(e,t,n){e.exports={mainColor:"#057CFF",secondaryColor:"#4BA0FD",primaryText:"#333",regularText:"#3D3D4E"}},"4ae0":function(e,t,n){var a={"./app.js":"d9cd","./common.js":"c459"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="4ae0"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("ac1f"),n("466d");var a=n("2b0e"),r=n("5c96"),o=n.n(r),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],u={name:"App"},s=u,l=n("2877"),d=Object(l["a"])(s,c,i,!1,null,null,null),f=d.exports,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-wrapper",class:"pc"===e.device?"pc-min-width":"padding"},[n("navbar"),n("app-main"),n("Footer")],1)},m=[],b=n("5530"),v=(n("5319"),n("2f62")),g=n("bfa9"),y={lang:function(e){return e.app.lang},device:function(e){return e.app.device}},k=y,w=n("4ae0"),_=w.keys().reduce((function(e,t){var n=t.replace(/^.\/(.*)\.js/,"$1"),a=w(t);return e[n]=a.default,e}),{});a["default"].use(v["a"]);var O=new v["a"].Store({modules:_,getters:k,plugins:[(new g["a"]).plugin]}),C=O,j=document,E=j.body,x=760,A={beforeMount:function(){window.addEventListener("resize",this.$_resizeHandler)},beforeDestroy:function(){window.removeEventListener("resize",this.$_resizeHandler)},mounted:function(){C.dispatch("app/toggleDevice",this.$_isMobile()?"mobile":"pc")},methods:{$_isMobile:function(){var e=E.getBoundingClientRect();return console.log(e.width-1<x),e.width-1<x},$_resizeHandler:function(){if(!document.hidden){var e=E.getBoundingClientRect(),t=e.width,n=!1;t<x&&(n=!0),C.dispatch("app/toggleDevice",n?"mobile":"pc")}}}},T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar flex flex-x-between flex-x-center"},[n("div",{staticClass:"name text-decoration"},[e._v("Tieyong Zeng")]),e.isPc?n("el-menu",{staticClass:"menu-list",attrs:{"default-active":e.activePath,mode:"horizontal",router:""}},e._l(e.menuData,(function(t){return n("el-menu-item",{key:t.key,attrs:{index:t.path}},[e._v(" "+e._s(t.name)+" ")])})),1):n("el-dropdown",{attrs:{trigger:"click"},on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[n("i",{staticClass:"el-icon-arrow-down el-icon-s-fold"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.menuData,(function(t,a){return n("el-dropdown-item",{key:t.key,attrs:{command:t.path,divided:0!==a}},[n("p",{staticClass:"fs-20 drop-menu__item",class:{"active-path":e.activePath===t.path}},[e._v(e._s(t.name))])])})),1)],1)],1)},P=[],D={components:{},data:function(){return{url:n("cf05"),menuData:[{key:"home",name:"Home",path:"/home"},{key:"awards",name:"Awards & Grants",path:"/awards"},{key:"publications",name:"Publications",path:"/publications"},{key:"teaching",name:"Teaching",path:"/teaching"},{key:"activities",name:"Activities",path:"/activities"},{key:"about",name:"About me",path:"/about"}]}},computed:Object(b["a"])(Object(b["a"])({},Object(v["c"])(["device"])),{},{isPc:function(){return"pc"===this.device},activePath:function(){return this.$route.path}}),created:function(){},methods:{handleSelect:function(e,t){console.log(e,t)},handleCommand:function(e){e!==this.activePath&&this.$router.push({path:e})},goHome:function(){"/home/index"!==this.activePath&&this.$router.push({path:"/home/index"})}}},$=D,S=(n("1bda"),n("af99"),Object(l["a"])($,T,P,!1,null,"2e246e72",null)),L=S.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"app-main"},[n("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[n("router-view",{key:e.key})],1)],1)},M=[],N={name:"AppMain",data:function(){return{}},computed:{key:function(){return this.$route.fullPath}}},z=N,F=(n("d56b"),Object(l["a"])(z,B,M,!1,null,null,null)),I=F.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("p",{staticClass:"name"},[e._v("Tieyong Zeng")]),n("p",{staticClass:"lang-switch",on:{click:e.changeLang}},[e._v(e._s("zh"===e.lang?"English":"中文"))])])},G=[],U={data:function(){return{key:""}},computed:Object(b["a"])(Object(b["a"])(Object(b["a"])({},Object(v["c"])(["lang","device"])),Object(v["d"])("common",["companyInfo"])),{},{isPc:function(){return"pc"===this.device}}),methods:Object(b["a"])(Object(b["a"])({},Object(v["b"])("app",["setLang"])),{},{changeLang:function(){var e="zh"===this.lang?"en":"zh";this.$i18n.locale=e,this.setLang(e)},search:function(){this.$router.push({path:"/product/list",query:{key:this.key}})}})},q=U,J=(n("4144"),Object(l["a"])(q,H,G,!1,null,"e2171d90",null)),Z=(J.exports,function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),Q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("p",[e._v("Copyright © 2021 by Tieyong Zeng. All rights reserved.")])])}],R=(n("e5a6"),{}),V=Object(l["a"])(R,Z,Q,!1,null,"de6ecb48",null),W=V.exports,K={name:"Layout",components:{Navbar:L,AppMain:I,Footer:W},mixins:[A],data:function(){return{}},computed:Object(b["a"])({},Object(v["c"])(["device"]))},X=K,Y=(n("e3ed"),Object(l["a"])(X,h,m,!1,null,"1461b1bf",null)),ee=Y.exports;a["default"].use(p["a"]);var te=[{path:"/",redirect:"/home",component:ee,children:[{path:"/home",component:function(){return n.e("chunk-5b5b6be4").then(n.bind(null,"16c0"))},meta:{title:"Home"}},{path:"/awards",component:function(){return n.e("chunk-03fabeda").then(n.bind(null,"e9a0"))},meta:{title:"Awards"}},{path:"/publications",component:function(){return n.e("chunk-26001e90").then(n.bind(null,"ec80"))},meta:{title:"Publications"}},{path:"/teaching",component:function(){return n.e("chunk-21bc1059").then(n.bind(null,"cd6f"))},meta:{title:"Teaching"}},{path:"/activities",component:function(){return n.e("chunk-7dd6e52c").then(n.bind(null,"f26c"))},meta:{title:"Activities"}},{path:"/about",component:function(){return n.e("chunk-3af647d1").then(n.bind(null,"0737"))},meta:{title:"About"}}]},{path:"*",redirect:"/404",hidden:!0}],ne=function(){return new p["a"]({scrollBehavior:function(){return{y:0}},routes:te})},ae=ne();var re=ae,oe=n("b2d6"),ce=n.n(oe),ie=(n("6861"),n("49f4"),n("be35"),n("499a"),n("77ed")),ue=n.n(ie),se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"no-data"},[e._v(e._s(e.text||e.$t("common.noData")))])},le=[],de={name:"NoData",props:{text:{type:String,default:""}},data:function(){return{}}},fe=de,pe=(n("0d0a"),Object(l["a"])(fe,se,le,!1,null,"8f35ccf8",null)),he=pe.exports;a["default"].use(ue.a),a["default"].config.productionTip=!1,a["default"].use(o.a,{size:"small"}),a["default"].component("no-data",he),a["default"].use(o.a,{locale:ce.a}),a["default"].prototype.device="pc",navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)&&(a["default"].prototype.device="mobile"),new a["default"]({el:"#app",router:re,store:C,render:function(e){return e(f)}}).$mount("#app")},"63d7":function(e,t,n){},6861:function(e,t,n){e.exports={mainColor:"#057CFF",secondaryColor:"#4BA0FD",primaryText:"#333",regularText:"#3D3D4E"}},8355:function(e,t,n){},af99:function(e,t,n){"use strict";n("63d7")},be35:function(e,t,n){},c459:function(e,t,n){"use strict";n.r(t);var a={nav:[],banner:{},companyInfo:{},process:[],workshop:[]},r={SET_DATA:function(e,t){e.nav=t.nav,e.banner=t.banner,e.process=t.process,e.workshop=t.workshop,e.companyInfo=t.companyInfo}},o={setData:function(e,t){var n=e.commit;n("SET_DATA",t)}};t["default"]={namespaced:!0,state:a,mutations:r,actions:o}},cf05:function(e,t,n){e.exports=n.p+"img/logo.825fde35.png"},d56b:function(e,t,n){"use strict";n("e579")},d9cd:function(e,t,n){"use strict";n.r(t);var a={lang:"zh-CN"===navigator.language?"zh":"en",device:"pc"},r={SET_LANG:function(e,t){e.lang=t},SET_DEVICE:function(e,t){e.device=t}},o={setLang:function(e,t){var n=e.commit;n("SET_LANG",t)},toggleDevice:function(e,t){var n=e.commit;n("SET_DEVICE",t)}};t["default"]={namespaced:!0,state:a,mutations:r,actions:o}},e3ed:function(e,t,n){"use strict";n("12d5")},e579:function(e,t,n){},e5a6:function(e,t,n){"use strict";n("f4a2")},f4a2:function(e,t,n){}});
//# sourceMappingURL=app.89f07b62.js.map