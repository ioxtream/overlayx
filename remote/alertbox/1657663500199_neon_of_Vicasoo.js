(()=>{"use strict";var e={605:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,'.ewI7g53_nxU1rbHcORgW{\n    font-family: \'Poppins\', sans-serif;\n    width: 50%;\n    margin-left: 25%;\n    margin-right: 25%;\n    margin-top: 40px;\n    padding: 15px;\n    border-radius: 10px;\n    background-color: rgba(0,0,0,0.2);\n    position: relative;\n    -webkit-backdrop-filter: blur(10px);\n\tbackdrop-filter: blur(10px);\n    color: #fff;\n    max-width: 500px;\n    border: 0.2rem solid #fff;\n    box-shadow: 0 0 .2rem #fff,\n                0 0 .2rem #fff,\n                0 0 2rem #bc13fe,\n                0 0 .8rem #bc13fe,\n                0 0 .8rem #bc13fe,\n                inset 0 0 .3rem #bc13fe;\n}\n\n.YUuybfnXS2ysu4Pb20fv {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n}\n\n.aEXqdCMfuaLXF5TL6w9g {\n    width: 25%;\n    border-radius: 10px;\n}\n\n.S95Y0o5hOhzPZfcDjbri{\n    background: rgb(255,0,232);\n    background: -moz-linear-gradient(90deg, rgba(255,0,232,1) 0%, rgba(127,0,162,1) 100%);\n    background: -webkit-linear-gradient(90deg, rgba(255,0,232,1) 0%, rgba(127,0,162,1) 100%);\n    background: linear-gradient(90deg, rgba(255,0,232,1) 0%, rgba(127,0,162,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff00e8",endColorstr="#7f00a2",GradientType=1);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n\n._TH9KjhbuLs0vWCCr125 {\n    width: 70%;\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    flex-direction: column;\n    font-size: 2vw;\n    word-wrap: break-word;\n}\n.ewI7g53_nxU1rbHcORgW  h2 {\n    width: 100%;\n    text-align: left;\n    box-sizing: border-box;\n    font-size: 3vw;\n}\n\n.ewI7g53_nxU1rbHcORgW  h3 {\n    display: block;\n    width: 100%;\n    margin-top: 20px;\n    word-wrap: break-word;\n    font-size: 2vw;\n}\n\n.YystkRKUoQvjPkcRAT7a{\n    position: absolute;\n    height: 80px;\n    width: 80px;\n    transform: rotate(90deg);\n    right: -40px;\n    top: 40px;\n    animation: YystkRKUoQvjPkcRAT7a 3s linear;\n    opacity: 0;\n}\n\n.fR7DA9J0AoySwOJRkqss {\n    position: absolute;\n    width: 20%;\n    bottom: -60px;\n    right: 0;\n    z-index: 1;\n    padding: 4px 10px;\n    border-radius: 7px;\n    max-width: 260px;\n}\n\n@keyframes YystkRKUoQvjPkcRAT7a {\n    0%, 100%{\n        opacity: 0;\n        right: -60px\n    }\n\n    50% {\n        opacity: 1;\n        right: -80px\n    }\n}\n',""]),i.locals={container:"ewI7g53_nxU1rbHcORgW",profile:"YUuybfnXS2ysu4Pb20fv",GIF:"aEXqdCMfuaLXF5TL6w9g",highlight:"S95Y0o5hOhzPZfcDjbri",informations:"_TH9KjhbuLs0vWCCr125",IO:"YystkRKUoQvjPkcRAT7a",logo:"fR7DA9J0AoySwOJRkqss"};const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,f="".concat(l," ").concat(d);o[l]=d+1;var p=t(f),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(u);else{var m=a(u,r);r.byIndex=s,n.splice(s,0,{identifier:f,updater:m,references:1})}i.push(f)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var c=r(e,a),l=0;l<o.length;l++){var d=t(o[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{t.r(r),t.d(r,{default:()=>y});const e=require("react");var n=t.n(e),a=t(379),o=t.n(a),i=t(795),s=t.n(i),c=t(569),l=t.n(c),d=t(565),f=t.n(d),p=t(216),u=t.n(p),m=t(589),g=t.n(m),b=t(605),h={};h.styleTagTransform=g(),h.setAttributes=f(),h.insert=l().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=u(),o()(b.Z,h);const v=b.Z&&b.Z.locals?b.Z.locals:void 0;function y(e){return n().createElement(n().Fragment,null,n().createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),n().createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),n().createElement("link",{href:"https://fonts.googleapis.com/css2?family=Poppins&display=swap",rel:"stylesheet"}),n().createElement("div",{className:v.container},n().createElement("div",{className:v.profile},n().createElement("img",{alt:"",className:v.GIF,src:e.donate.animated_gif}),n().createElement("div",{className:v.informations},n().createElement("h2",null,n().createElement("span",{className:v.highlight},e.donate.username)),n().createElement("span",null,"enviou ",n().createElement("b",null,e.donate.amount," ",e.donate.currency)))),n().createElement("h3",null,e.donate.message),n().createElement("div",{className:v.logo},n().createElement("img",{alt:"",src:"https://ioxtream.io/images/logo/ioxtream-beta.svg"})),n().createElement("img",{alt:"",className:v.IO,src:"https://user-images.githubusercontent.com/98370909/171199876-b93f7ea9-f7fd-4320-9a44-091c78009c90.gif",width:"100%"})))}})();var a=exports;for(var o in r)a[o]=r[o];r.__esModule&&Object.defineProperty(a,"__esModule",{value:!0})})();