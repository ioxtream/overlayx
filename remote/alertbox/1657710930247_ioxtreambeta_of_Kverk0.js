(()=>{"use strict";var n={452:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,'.fIPf3aSpB1MU0hWtl6_Y {\n    font-family: \'Poppins\', sans-serif;\n    width: 50%;\n    margin-left: 25%;\n    margin-right: 25%;\n    margin-top: 80px;\n    color: #fff;\n    max-width: 500px;\n    position: relative;\n}\n\n.xODjpAlLK5EynwY6PcZy{\n    padding: 15px;\n    border-radius: 10px;\n    background: rgb(255,0,104);\n    background: -moz-linear-gradient(90deg, rgba(255,0,104,1) 0%, rgba(180,20,239,1) 100%);\n    background: -webkit-linear-gradient(90deg, rgba(255,0,104,1) 0%, rgba(180,20,239,1) 100%);\n    background: linear-gradient(90deg, rgba(255,0,104,1) 0%, rgba(180,20,239,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff0068",endColorstr="#b414ef",GradientType=1);\n    position: relative;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.CGs0StT3zYRl_4cfdong{\n    width: 80px;\n    height: 80px;\n    background-color: #fff;\n    background-position: center;\n    background-size: cover;\n    border-radius: 10px;\n    margin-top: -2.5vw;\n}\n\n.eRU5DLhp80PwxD2NBkQH{\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: flex-start;\n    font-size: 1.5vw;\n    word-wrap: break-word;\n    line-height: 2.2vw;\n    margin-left: 20px;\n    font-weight: 200;\n}\nh2 {\n    width: 100%;\n    text-align: left;\n    box-sizing: border-box;\n    font-size: 2.5vw;\n    font-weight: bold;\n    color: #050608;\n}\n\nh3 {\n    display: block;\n    width: 100%;\n    margin-top: 20px;\n    word-wrap: break-word;\n    font-size: 1.3vw;\n}\n\n.iPcsPOT7S3KDu2cx5SwB{\n    position: absolute;\n    height: 80px;\n    width: 80px;\n    right: 30%;\n    top: -60px;\n    animation: iPcsPOT7S3KDu2cx5SwB 3s linear;\n    opacity: 0;\n}\n\n.BLiMPDduwVku4a4djtYj {\n    position: absolute;\n    width: 20%;\n    top: -30px;\n    right: 0;\n    z-index: 1;\n    padding: 4px 10px;\n    border-radius: 7px;\n    max-width: 260px;\n}\n\n@keyframes iPcsPOT7S3KDu2cx5SwB {\n    0%, 100%{\n        opacity: 0;\n        top: -60px\n    }\n\n    50% {\n        opacity: 1;\n        top: -80px\n    }\n}\n',""]),i.locals={container:"fIPf3aSpB1MU0hWtl6_Y",donate_data:"xODjpAlLK5EynwY6PcZy",GIF_container:"CGs0StT3zYRl_4cfdong",informations:"eRU5DLhp80PwxD2NBkQH",IO:"iPcsPOT7S3KDu2cx5SwB",logo:"BLiMPDduwVku4a4djtYj"};const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=a(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=r(n,a),l=0;l<o.length;l++){var d=t(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var r={};(()=>{t.r(r),t.d(r,{default:()=>x});const n=require("react");var e=t.n(n),a=t(379),o=t.n(a),i=t(795),s=t.n(i),c=t(569),l=t.n(c),d=t(565),u=t.n(d),p=t(216),f=t.n(p),m=t(589),g=t.n(m),v=t(452),h={};h.styleTagTransform=g(),h.setAttributes=u(),h.insert=l().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=f(),o()(v.Z,h);const b=v.Z&&v.Z.locals?v.Z.locals:void 0;function x(n){return e().createElement(e().Fragment,null,e().createElement("div",{className:b.container},e().createElement("div",{className:b.donate_data},e().createElement("div",{className:b.GIF_container,style:{backgroundImage:"url(".concat(n.donate.animated_gif,")")}}),e().createElement("div",{className:b.informations},e().createElement("h2",null,n.donate.username),e().createElement("span",null,"sent you ",e().createElement("b",null,n.donate.amount," ",n.donate.currency)))),e().createElement("h3",null,n.donate.message),e().createElement("div",{className:b.logo},e().createElement("img",{alt:"",src:"https://ioxtream.io/images/logo/ioxtream-beta.svg"})),e().createElement("img",{alt:"",className:b.IO,src:"https://user-images.githubusercontent.com/98370909/171199876-b93f7ea9-f7fd-4320-9a44-091c78009c90.gif",width:"100%"})))}})();var a=exports;for(var o in r)a[o]=r[o];r.__esModule&&Object.defineProperty(a,"__esModule",{value:!0})})();