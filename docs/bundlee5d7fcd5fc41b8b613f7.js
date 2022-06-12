(()=>{"use strict";var e={331:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(537),o=r.n(n),A=r(645),i=r.n(A),a=r(667),s=r.n(a),c=new URL(r(259),r.b),l=new URL(r(387),r.b),d=new URL(r(853),r.b),p=new URL(r(44),r.b),u=i()(o()),C=s()(c),f=s()(l),m=s()(d),g=s()(p);u.push([e.id,"::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:#fff}::-webkit-scrollbar-thumb{background:var(--btn_main)}:root{--seperator_color: #ddd;--text_color: #444;--text_color_completed: #666;--btn_main: #7f7f7f;--btn_hover: #4c4c4c;--field_focus: #f5ffe9}::-webkit-scrollbar-thumb:hover{background:var(--btn_hover)}*{margin:0;padding:0;box-sizing:border-box;font-family:serif,monospace}body{background:linear-gradient(-45deg, #ee7752, #e73c7c, #23a6d5, #23d5ab);background-size:400% 400%;position:relative;animation:changeBg 20s ease-in-out infinite}@keyframes changeBg{0%{background-position:0 50%}50%{background-position:100% 50%}100%{background-position:0 50%}}main{display:flex;height:85vh}input{background-color:inherit}.container{display:flex;flex-direction:column;justify-content:space-between;margin:auto;width:40%;min-width:500px;min-height:500px;background-color:#fff;box-shadow:0 0 20px #666;border-radius:2px;position:absolute;top:20vh;left:30vw}.app-header{display:flex;flex-direction:column;overflow-y:hidden;cursor:move}.heading{padding:15px 10px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--seperator_color);user-select:none}.heading p{font-size:1.25rem;color:var(--text_color);text-shadow:-1px 0 5px #d1cece}.heading i{background:url("+C+") no-repeat center center/cover;width:16px;height:16px;filter:invert(0.35)}.add-item{padding:15px 10px;border-bottom:1px solid var(--seperator_color);display:flex;justify-content:space-between;align-items:center}.add-item input{border:none;cursor:default;font-size:1.2rem;font-style:italic;flex:1}.task input{font-family:sans-serif,monospace;border:none;cursor:default;text-shadow:-1px 0 5px #d1cece}.add-item input:focus{outline:none}.add-item i{background:url("+f+") no-repeat center center;width:7px;height:12px;padding:10px 12px;cursor:pointer}.add-item i:active{filter:invert(0.7)}.to-do-list{display:flex;flex-direction:column;overflow-y:scroll}.list-item{padding:15px 10px;font-size:1.1rem;color:var(--text_color);display:flex;justify-content:space-between;border-bottom:1px solid var(--seperator_color)}.list-item:active{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.task{flex:1;display:flex;align-items:center;gap:1rem}.task-description{flex:1}.completed .task-description{text-decoration:line-through;color:var(--text_color_completed)}.task input:focus{outline:none}.list-item .drag-btn{display:block;background:url("+m+") no-repeat center center/cover;height:20px;width:20px;filter:invert(0.5);cursor:move}.list-item .del-btn{background:url("+g+") no-repeat center center/cover;height:20px;width:20px;filter:invert(0.5);cursor:pointer}.del-btn:hover{filter:invert(0.3)}.app-footer{padding:15px 10px;text-align:center;background-color:#f6f6f6}.app-footer a{text-decoration:none;color:#777}.app-footer a:hover{color:var(--text_color)}.field-focus{background-color:var(--field_focus)}","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"AAEA,oBACE,SAAA,CAGF,0BACE,eAAA,CAGF,0BACE,0BAAA,CAGF,MACE,uBAAA,CACA,kBAAA,CACA,4BAAA,CACA,mBAAA,CACA,oBAAA,CACA,sBAAA,CAGF,gCACE,2BAAA,CAGF,EACE,QAAA,CACA,SAAA,CACA,qBAAA,CACA,2BAAA,CAGF,KACE,sEAAA,CACA,yBAAA,CACA,iBAAA,CACA,2CAAA,CAGF,oBACE,GACE,yBAAA,CAGF,IACE,4BAAA,CAGF,KACE,yBAAA,CAAA,CAIJ,KACE,YAAA,CACA,WAAA,CAGF,MACE,wBAAA,CAGF,WACE,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,WAAA,CACA,SAAA,CACA,eAAA,CACA,gBAAA,CACA,qBAAA,CACA,wBAAA,CACA,iBAAA,CACA,iBAAA,CACA,QAAA,CACA,SAAA,CAGF,YACE,YAAA,CACA,qBAAA,CACA,iBAAA,CACA,WAAA,CAKF,SACE,iBAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,8CAAA,CACA,gBAAA,CAGF,WACE,iBAAA,CACA,uBAAA,CACA,8BAAA,CAGF,WACE,gFAAA,CACA,UAAA,CACA,WAAA,CACA,mBAAA,CAGF,UACE,iBAAA,CACA,8CAAA,CACA,YAAA,CACA,6BAAA,CACA,kBAAA,CAGF,gBACE,WAAA,CACA,cAAA,CACA,gBAAA,CACA,iBAAA,CACA,MAAA,CAGF,YACE,gCAAA,CACA,WAAA,CACA,cAAA,CACA,8BAAA,CAGF,sBACE,YAAA,CAGF,YACE,0EAAA,CACA,SAAA,CACA,WAAA,CACA,iBAAA,CACA,cAAA,CAGF,mBACE,kBAAA,CAKF,YACE,YAAA,CACA,qBAAA,CACA,iBAAA,CAGF,WACE,iBAAA,CACA,gBAAA,CACA,uBAAA,CACA,YAAA,CACA,6BAAA,CACA,8CAAA,CAGF,kBACE,eAAA,CACA,oBAAA,CACA,uBAAA,CAGF,MACE,MAAA,CACA,YAAA,CACA,kBAAA,CACA,QAAA,CAGF,kBACE,MAAA,CAGF,6BACE,4BAAA,CACA,iCAAA,CAGF,kBACE,YAAA,CAGF,qBACE,aAAA,CACA,gFAAA,CACA,WAAA,CACA,UAAA,CACA,kBAAA,CACA,WAAA,CAGF,oBACE,gFAAA,CACA,WAAA,CACA,UAAA,CACA,kBAAA,CACA,cAAA,CAGF,eACE,kBAAA,CAKF,YACE,iBAAA,CACA,iBAAA,CACA,wBAAA,CAGF,cACE,oBAAA,CACA,UAAA,CAGF,oBACE,uBAAA,CAKF,aACE,mCAAA",sourcesContent:["/* Scroll  bar */\r\n\r\n::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: #fff;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: var(--btn_main);\r\n}\r\n\r\n:root {\r\n  --seperator_color: #ddd;\r\n  --text_color: #444;\r\n  --text_color_completed: #666;\r\n  --btn_main: #7f7f7f;\r\n  --btn_hover: #4c4c4c;\r\n  --field_focus: #f5ffe9;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: var(--btn_hover);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: serif, monospace;\r\n}\r\n\r\nbody {\r\n  background: linear-gradient(-45deg, #ee7752, #e73c7c, #23a6d5, #23d5ab);\r\n  background-size: 400% 400%;\r\n  position: relative;\r\n  animation: changeBg 20s ease-in-out infinite;\r\n}\r\n\r\n@keyframes changeBg {\r\n  0% {\r\n    background-position: 0 50%;\r\n  }\r\n\r\n  50% {\r\n    background-position: 100% 50%;\r\n  }\r\n\r\n  100% {\r\n    background-position: 0 50%;\r\n  }\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  height: 85vh;\r\n}\r\n\r\ninput {\r\n  background-color: inherit;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  margin: auto;\r\n  width: 40%;\r\n  min-width: 500px;\r\n  min-height: 500px;\r\n  background-color: #fff;\r\n  box-shadow: 0 0 20px #666;\r\n  border-radius: 2px;\r\n  position: absolute;\r\n  top: 20vh;\r\n  left: 30vw;\r\n}\r\n\r\n.app-header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: hidden;\r\n  cursor: move;\r\n}\r\n\r\n/* App Header */\r\n\r\n.heading {\r\n  padding: 15px 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid var(--seperator_color);\r\n  user-select: none;\r\n}\r\n\r\n.heading p {\r\n  font-size: 1.25rem;\r\n  color: var(--text_color);\r\n  text-shadow: -1px 0 5px #d1cece;\r\n}\r\n\r\n.heading i {\r\n  background: url(../assets/drag-icon.png) no-repeat center center/cover;\r\n  width: 16px;\r\n  height: 16px;\r\n  filter: invert(0.35);\r\n}\r\n\r\n.add-item {\r\n  padding: 15px 10px;\r\n  border-bottom: 1px solid var(--seperator_color);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.add-item input {\r\n  border: none;\r\n  cursor: default;\r\n  font-size: 1.2rem;\r\n  font-style: italic;\r\n  flex: 1;\r\n}\r\n\r\n.task input {\r\n  font-family: sans-serif, monospace;\r\n  border: none;\r\n  cursor: default;\r\n  text-shadow: -1px 0 5px #d1cece;\r\n}\r\n\r\n.add-item input:focus {\r\n  outline: none;\r\n}\r\n\r\n.add-item i {\r\n  background: url(../assets/return-icon.png) no-repeat center center;\r\n  width: 7px;\r\n  height: 12px;\r\n  padding: 10px 12px;\r\n  cursor: pointer;\r\n}\r\n\r\n.add-item i:active {\r\n  filter: invert(0.7);\r\n}\r\n\r\n/* The List */\r\n\r\n.to-do-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.list-item {\r\n  padding: 15px 10px;\r\n  font-size: 1.1rem;\r\n  color: var(--text_color);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid var(--seperator_color);\r\n}\r\n\r\n.list-item:active {\r\n  cursor: grabbing;\r\n  cursor: -moz-grabbing;\r\n  cursor: -webkit-grabbing;\r\n}\r\n\r\n.task {\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.task-description {\r\n  flex: 1;\r\n}\r\n\r\n.completed .task-description {\r\n  text-decoration: line-through;\r\n  color: var(--text_color_completed);\r\n}\r\n\r\n.task input:focus {\r\n  outline: none;\r\n}\r\n\r\n.list-item .drag-btn {\r\n  display: block;\r\n  background: url(../assets/verticle-menu.png) no-repeat center center/cover;\r\n  height: 20px;\r\n  width: 20px;\r\n  filter: invert(0.5);\r\n  cursor: move;\r\n}\r\n\r\n.list-item .del-btn {\r\n  background: url(../assets/delete.png) no-repeat center center/cover;\r\n  height: 20px;\r\n  width: 20px;\r\n  filter: invert(0.5);\r\n  cursor: pointer;\r\n}\r\n\r\n.del-btn:hover {\r\n  filter: invert(0.3);\r\n}\r\n\r\n/* App Footer */\r\n\r\n.app-footer {\r\n  padding: 15px 10px;\r\n  text-align: center;\r\n  background-color: #f6f6f6;\r\n}\r\n\r\n.app-footer a {\r\n  text-decoration: none;\r\n  color: #777;\r\n}\r\n\r\n.app-footer a:hover {\r\n  color: var(--text_color);\r\n}\r\n\r\n/* Utility Class */\r\n\r\n.field-focus {\r\n  background-color: var(--field_focus);\r\n}\r\n"],sourceRoot:""}]);const b=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,A){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);n&&i[l[0]]||(void 0!==A&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=A),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},537:e=>{e.exports=function(e){var t=e[1],r=e[3];if(!r)return t;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),A="/*# ".concat(o," */"),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([A]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var A={},i=[],a=0;a<e.length;a++){var s=e[a],c=n.base?s[0]+n.base:s[0],l=A[c]||0,d="".concat(c," ").concat(l);A[c]=l+1;var p=r(d),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var C=o(u,n);n.byIndex=a,t.splice(a,0,{identifier:d,updater:C,references:1})}i.push(d)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var A=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<A.length;i++){var a=r(A[i]);t[a].references--}for(var s=n(e,o),c=0;c<A.length;c++){var l=r(A[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}A=s}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var A=r.sourceMap;A&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},44:(e,t,r)=>{e.exports=r.p+"adc38f9229d4e1221b10.png"},259:(e,t,r)=>{e.exports=r.p+"ff661f83b72199aa577e.png"},387:(e,t,r)=>{e.exports=r.p+"fa544f635765db738d2e.png"},853:(e,t,r)=>{e.exports=r.p+"5503806f9a9cffbe0dae.png"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var A=t[n]={id:n,exports:{}};return e[n](A,A.exports,r),A.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,(()=>{var e=r(379),t=r.n(e),n=r(795),o=r.n(n),A=r(569),i=r.n(A),a=r(565),s=r.n(a),c=r(216),l=r.n(c),d=r(589),p=r.n(d),u=r(331),C={};C.styleTagTransform=p(),C.setAttributes=s(),C.insert=i().bind(null,"head"),C.domAPI=o(),C.insertStyleElement=l(),t()(u.Z,C),u.Z&&u.Z.locals&&u.Z.locals;class f{constructor(e,t,r){this.task=e,this.index=t,this.isCompleted=r}static taskList=[];toggleCompleted(){!1===this.isCompleted?this.isCompleted=!0:this.isCompleted=!1}updateTask(e){this.task=e}static reindex(){for(let e=0;e<f.taskList.length;e+=1)f.taskList[e].index=e+1}static deleteTask(e){f.taskList=f.taskList.filter((t=>t.index!==e)),f.reindex()}static deleteCompleted(){f.taskList=f.taskList.filter((e=>!0!==e.isCompleted)),f.reindex()}}const m=()=>{localStorage.setItem("tasks",JSON.stringify(f.taskList))};function g(e,t,r){if(e){const n=document.querySelector(".to-do-list"),o=document.createElement("div");o.classList.add("list-item"),o.setAttribute("draggable","true"),o.setAttribute("id",t);const A=document.createElement("div");A.classList.add("task");const i=document.createElement("input");i.setAttribute("type","checkbox"),r&&(i.setAttribute("checked",""),o.classList.toggle("completed"));const a=document.createElement("input");a.setAttribute("type","text"),a.classList.add("task-description"),a.value=e,a.addEventListener("input",(e=>{const t=e.target;f.taskList[+(t.parentElement.parentElement.getAttribute("id")-1)].updateTask(t.value),m()}));const s=document.createElement("div"),c=document.createElement("i");c.classList.add("drag-btn");const l=document.createElement("i");l.classList.add("del-btn"),l.addEventListener("click",(()=>{const e=l.parentElement.parentElement;f.deleteTask(+e.getAttribute("id")),e.remove(),m()})),l.addEventListener("click",(()=>{const e=document.querySelectorAll(".list-item");for(let t=0;t<e.length;t+=1)e[t].setAttribute("id",t+1)})),a.addEventListener("focus",(()=>{o.classList.toggle("field-focus"),l.style.display="block",c.style.display="none"})),a.addEventListener("blur",(()=>{setTimeout((()=>{o.classList.toggle("field-focus"),l.style.display="none",c.style.display="block"}),100)})),i.addEventListener("change",(e=>{const t=e.target.parentElement.parentElement,r=+t.getAttribute("id")-1;f.taskList[r].toggleCompleted(),t.classList.toggle("completed"),m()})),s.appendChild(c),s.appendChild(l),A.appendChild(i),A.appendChild(a),o.appendChild(A),o.appendChild(s),n.appendChild(o)}}const b=document.querySelector(".add-item input"),h=document.querySelector(".return-button"),v=document.getElementById("clearCompleted"),x=document.querySelector("#create-task");localStorage.tasks&&JSON.parse(localStorage.tasks).forEach((e=>{f.taskList.push(new f(e.task,e.index,e.isCompleted)),g(e.task,e.index,e.isCompleted)}));const k=e=>{f.taskList.push(new f(e,f.taskList.length+1,!1))};h.addEventListener("click",(()=>{g(b.value,f.taskList.length+1,!1),k(b.value),m(),b.value=""})),x.addEventListener("keypress",(e=>{"Enter"===e.key&&(g(b.value,f.taskList.length+1,!1),k(b.value),m(),b.value="")})),v.addEventListener("click",(e=>{e.preventDefault(),document.querySelectorAll(".list-item").forEach((e=>{e.classList.value.includes("completed")&&(e.remove(),f.deleteCompleted())})),m();const t=document.querySelectorAll(".list-item");for(let e=0;e<t.length;e+=1)t[e].setAttribute("id",e+1)})),(()=>{const e=document.querySelector(".container"),t=e.querySelector(".heading"),r=({movementX:t,movementY:r})=>{const n=window.getComputedStyle(e),o=parseInt(n.left,10),A=parseInt(n.top,10);e.style.left=`${o+t}px`,e.style.top=`${A+r}px`};t.addEventListener("mousedown",(()=>{t.addEventListener("mousemove",r)})),t.addEventListener("mouseup",(()=>{t.removeEventListener("mousemove",r)})),e.addEventListener("mouseleave",(()=>{t.removeEventListener("mousemove",r)}))})()})()})();
//# sourceMappingURL=bundlee5d7fcd5fc41b8b613f7.js.map