(()=>{"use strict";var e={40:(e,r,n)=>{n.d(r,{Z:()=>s});var t=n(81),o=n.n(t),a=n(645),i=n.n(a)()(o());i.push([e.id,".aJJiRE3TEVAfwfXlono3 {\r\n    text-align: center;\r\n    position: relative;\r\n    color: #fff;\r\n    padding: 40px;\r\n    max-width: 50%;\r\n    margin: 30px auto 0;\r\n    border-radius: 100px;\r\n    box-shadow:\r\n    inset 0 0 50px #fff,\r\n    inset 20px 0 80px #000000,\r\n    inset -20px 0 80px #000000,\r\n    inset 20px 0 300px #000000,\r\n    inset -20px 0 300px #000000,\r\n    0 0 50px #fff, /* Brilho externo*/\r\n    -10px 0 80px #fff,\r\n    10px 0 80px #fff;\r\n    font-family: Arial, sans-serif;\r\n}\r\n\r\n.aJJiRE3TEVAfwfXlono3 img {\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    height: 100px;\r\n    top: 50%;\r\n    margin-top: -50px;\r\n    left: 0;\r\n    margin-left: 20px;\r\n}\r\n\r\n.pFg6u1hOL6SWOCULH90U {\r\n    color: #FF0068;\r\n}\r\n\r\n.aJJiRE3TEVAfwfXlono3 h2 {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.sXX6HIIVLL_UQbZqFW6J {\r\n    position: absolute;\r\n    height: 100px;\r\n    margin-top: 55px;\r\n    left: 0;\r\n    margin-left: 63%;\r\n    width: 200px;\r\n    z-index: 1;\r\n}\r\n\r\n.mDJkEfTiuemejUFMOOz0 {\r\n    position: absolute;\r\n    height: 100px;\r\n    margin-top: -120px;\r\n    margin-left: 72%;\r\n    height: 100px;\r\n    width: 100px;\r\n    border-radius: 100%;\r\n    z-index: 1;\r\n    background-color: white;\r\n}\r\n",""]),i.locals={box:"aJJiRE3TEVAfwfXlono3",highlight:"pFg6u1hOL6SWOCULH90U",logo:"sXX6HIIVLL_UQbZqFW6J",io:"mDJkEfTiuemejUFMOOz0"};const s=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);t&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),r.push(p))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=t.base?c[0]+t.base:c[0],p=a[l]||0,u="".concat(l," ").concat(p);a[l]=p+1;var f=n(u),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)r[f].references++,r[f].updater(d);else{var m=o(d,t);t.byIndex=s,r.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);r[s].references--}for(var c=t(e,o),l=0;l<a.length;l++){var p=n(a[l]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}a=c}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return e[t](a,a.exports,n),a.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};(()=>{n.r(t),n.d(t,{default:()=>b});const e=require("react");var r=n.n(e),o=n(379),a=n.n(o),i=n(795),s=n.n(i),c=n(569),l=n.n(c),p=n(565),u=n.n(p),f=n(216),d=n.n(f),m=n(589),h=n.n(m),v=n(40),g={};g.styleTagTransform=h(),g.setAttributes=u(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=d(),a()(v.Z,g);const x=v.Z&&v.Z.locals?v.Z.locals:void 0;function b(e){return r().createElement(r().Fragment,null,r().createElement("div",{className:x.logo},r().createElement("img",{alt:"",src:"https://mvp.ioxtream.com/images/logo/ioxtream-beta.svg"})),r().createElement("div",{className:x.box},r().createElement("img",{alt:"",src:e.donate.animated_gif,height:100}),r().createElement("h2",null,r().createElement("span",{className:x.highlight},e.donate.username)," sent ",e.donate.amount," ",e.donate.currency),r().createElement("h3",null,e.donate.message)),r().createElement("div",{className:x.io},r().createElement("img",{alt:"",src:"https://user-images.githubusercontent.com/98370909/171199876-b93f7ea9-f7fd-4320-9a44-091c78009c90.gif",height:100})))}})();var o=exports;for(var a in t)o[a]=t[a];t.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();