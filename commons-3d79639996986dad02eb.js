/*! For license information please see commons-3d79639996986dad02eb.js.LICENSE.txt */
"use strict";(self.webpackChunkjotterbach_github_io=self.webpackChunkjotterbach_github_io||[]).push([[351],{7791:function(n,t,e){e.d(t,{Z:function(){return ut}});var r=e(7294),a=e(4160);function i(n){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i(n)}function o(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function l(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){l(n,t,e[t])}))}return n}function c(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,a=!1,i=void 0;try{for(var o,l=n[Symbol.iterator]();!(r=(o=l.next()).done)&&(e.push(o.value),!t||e.length!==t);r=!0);}catch(s){a=!0,i=s}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=function(){},u={},m={},d={mark:f,measure:f};try{"undefined"!=typeof window&&(u=window),"undefined"!=typeof document&&(m=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(d=performance)}catch(mt){}var p=(u.navigator||{}).userAgent,h=void 0===p?"":p,y=u,g=m,b=d,v=(y.document,!!g.documentElement&&!!g.head&&"function"==typeof g.addEventListener&&"function"==typeof g.createElement),w=(~h.indexOf("MSIE")||h.indexOf("Trident/"),"___FONT_AWESOME___"),k="fa",x="svg-inline--fa",O="data-fa-i2svg",j=(function(){try{return!0}catch(mt){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),E=j.concat([11,12,13,14,15,16,17,18,19,20]),z={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},P=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",z.GROUP,z.SWAP_OPACITY,z.PRIMARY,z.SECONDARY].concat(j.map((function(n){return"".concat(n,"x")}))).concat(E.map((function(n){return"w-".concat(n)}))),y.FontAwesomeConfig||{});if(g&&"function"==typeof g.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(n){var t=c(n,2),e=t[0],r=t[1],a=function(n){return""===n||"false"!==n&&("true"===n||n)}(function(n){var t=g.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}(e));null!=a&&(P[r]=a)}))}var I=s({},{familyPrefix:k,replacementClass:x,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},P);I.autoReplaceSvg||(I.observeMutations=!1);var C=s({},I);y.FontAwesomeConfig=C;var A=y||{};A[w]||(A[w]={}),A[w].styles||(A[w].styles={}),A[w].hooks||(A[w].hooks={}),A[w].shims||(A[w].shims=[]);var _=A[w],M=[];v&&((g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState)||g.addEventListener("DOMContentLoaded",(function n(){g.removeEventListener("DOMContentLoaded",n),1,M.map((function(n){return n()}))})));var S,N="pending",L="settled",T="fulfilled",R="rejected",D=function(){},Y=void 0!==e.g&&void 0!==e.g.process&&"function"==typeof e.g.process.emit,U="undefined"==typeof setImmediate?setTimeout:setImmediate,W=[];function X(){for(var n=0;n<W.length;n++)W[n][0](W[n][1]);W=[],S=!1}function F(n,t){W.push([n,t]),S||(S=!0,U(X,0))}function B(n){var t=n.owner,e=t._state,r=t._data,a=n[e],i=n.then;if("function"==typeof a){e=T;try{r=a(r)}catch(mt){V(i,mt)}}H(i,r)||(e===T&&q(i,r),e===R&&V(i,r))}function H(n,t){var e;try{if(n===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"==typeof t||"object"===i(t))){var r=t.then;if("function"==typeof r)return r.call(t,(function(r){e||(e=!0,t===r?G(n,r):q(n,r))}),(function(t){e||(e=!0,V(n,t))})),!0}}catch(mt){return e||V(n,mt),!0}return!1}function q(n,t){n!==t&&H(n,t)||G(n,t)}function G(n,t){n._state===N&&(n._state=L,n._data=t,F(K,n))}function V(n,t){n._state===N&&(n._state=L,n._data=t,F(Z,n))}function J(n){n._then=n._then.forEach(B)}function K(n){n._state=T,J(n)}function Z(n){n._state=R,J(n),!n._handled&&Y&&e.g.process.emit("unhandledRejection",n._data,n)}function Q(n){e.g.process.emit("rejectionHandled",n)}function $(n){if("function"!=typeof n)throw new TypeError("Promise resolver "+n+" is not a function");if(this instanceof $==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(n,t){function e(n){V(t,n)}try{n((function(n){q(t,n)}),e)}catch(mt){e(mt)}}(n,this)}$.prototype={constructor:$,_state:N,_then:null,_data:void 0,_handled:!1,then:function(n,t){var e={owner:this,then:new this.constructor(D),fulfilled:n,rejected:t};return!t&&!n||this._handled||(this._handled=!0,this._state===R&&Y&&F(Q,this)),this._state===T||this._state===R?F(B,e):this._then.push(e),e.then},catch:function(n){return this.then(null,n)}},$.all=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.all().");return new $((function(t,e){var r=[],a=0;function i(n){return a++,function(e){r[n]=e,--a||t(r)}}for(var o,l=0;l<n.length;l++)(o=n[l])&&"function"==typeof o.then?o.then(i(l),e):r[l]=o;a||t(r)}))},$.race=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.race().");return new $((function(t,e){for(var r,a=0;a<n.length;a++)(r=n[a])&&"function"==typeof r.then?r.then(t,e):t(r)}))},$.resolve=function(n){return n&&"object"===i(n)&&n.constructor===$?n:new $((function(t){t(n)}))},$.reject=function(n){return new $((function(t,e){e(n)}))};var nn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function tn(n){if(n&&v){var t=g.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var e=g.head.childNodes,r=null,a=e.length-1;a>-1;a--){var i=e[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return g.head.insertBefore(t,r),n}}var en="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function rn(){for(var n=12,t="";n-- >0;)t+=en[62*Math.random()|0];return t}function an(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function on(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,": ").concat(n[e],";")}),"")}function ln(n){return n.size!==nn.size||n.x!==nn.x||n.y!==nn.y||n.rotate!==nn.rotate||n.flipX||n.flipY}function sn(n){var t=n.transform,e=n.containerWidth,r=n.iconWidth,a={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(i," ").concat(o," ").concat(l)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var cn={x:0,y:0,width:"100%",height:"100%"};function fn(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function un(n){var t=n.icons,e=t.main,r=t.mask,a=n.prefix,i=n.iconName,o=n.transform,l=n.symbol,c=n.title,f=n.maskId,u=n.titleId,m=n.extra,d=n.watchable,p=void 0!==d&&d,h=r.found?r:e,y=h.width,g=h.height,b="fak"===a,v=b?"":"fa-w-".concat(Math.ceil(y/g*16)),w=[C.replacementClass,i?"".concat(C.familyPrefix,"-").concat(i):"",v].filter((function(n){return-1===m.classes.indexOf(n)})).filter((function(n){return""!==n||!!n})).concat(m.classes).join(" "),k={children:[],attributes:s({},m.attributes,{"data-prefix":a,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(g)})},x=b&&!~m.classes.indexOf("fa-fw")?{width:"".concat(y/g*16*.0625,"em")}:{};p&&(k.attributes[O]=""),c&&k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||rn())},children:[c]});var j=s({},k,{prefix:a,iconName:i,main:e,mask:r,maskId:f,transform:o,symbol:l,styles:s({},x,m.styles)}),E=r.found&&e.found?function(n){var t,e=n.children,r=n.attributes,a=n.main,i=n.mask,o=n.maskId,l=n.transform,c=a.width,f=a.icon,u=i.width,m=i.icon,d=sn({transform:l,containerWidth:u,iconWidth:c}),p={tag:"rect",attributes:s({},cn,{fill:"white"})},h=f.children?{children:f.children.map(fn)}:{},y={tag:"g",attributes:s({},d.inner),children:[fn(s({tag:f.tag,attributes:s({},f.attributes,d.path)},h))]},g={tag:"g",attributes:s({},d.outer),children:[y]},b="mask-".concat(o||rn()),v="clip-".concat(o||rn()),w={tag:"mask",attributes:s({},cn,{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,g]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(t=m,"g"===t.tag?t.children:[t])},w]};return e.push(k,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(b,")")},cn)}),{children:e,attributes:r}}(j):function(n){var t=n.children,e=n.attributes,r=n.main,a=n.transform,i=on(n.styles);if(i.length>0&&(e.style=i),ln(a)){var o=sn({transform:a,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:s({},o.outer),children:[{tag:"g",attributes:s({},o.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:s({},r.icon.attributes,o.path)}]}]})}else t.push(r.icon);return{children:t,attributes:e}}(j),z=E.children,P=E.attributes;return j.children=z,j.attributes=P,l?function(n){var t=n.prefix,e=n.iconName,r=n.children,a=n.attributes,i=n.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:s({},a,{id:!0===i?"".concat(t,"-").concat(C.familyPrefix,"-").concat(e):i}),children:r}]}]}(j):function(n){var t=n.children,e=n.main,r=n.mask,a=n.attributes,i=n.styles,o=n.transform;if(ln(o)&&e.found&&!r.found){var l={x:e.width/e.height/2,y:.5};a.style=on(s({},i,{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}(j)}var mn=function(){},dn=(C.measurePerformance&&b&&b.mark&&b.measure,function(n,t,e,r){var a,i,o,l=Object.keys(n),s=l.length,c=void 0!==r?function(n,t){return function(e,r,a,i){return n.call(t,e,r,a,i)}}(t,r):t;for(void 0===e?(a=1,o=n[l[0]]):(a=0,o=e);a<s;a++)o=c(o,n[i=l[a]],i,n);return o});function pn(n,t){var e=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,r=void 0!==e&&e,a=Object.keys(t).reduce((function(n,e){var r=t[e];return!!r.icon?n[r.iconName]=r.icon:n[e]=r,n}),{});"function"!=typeof _.hooks.addPack||r?_.styles[n]=s({},_.styles[n]||{},a):_.hooks.addPack(n,a),"fas"===n&&pn("fa",t)}var hn=_.styles,yn=_.shims,gn=function(){var n=function(n){return dn(hn,(function(t,e,r){return t[r]=dn(e,n,{}),t}),{})};n((function(n,t,e){return t[3]&&(n[t[3]]=e),n})),n((function(n,t,e){var r=t[2];return n[e]=e,r.forEach((function(t){n[t]=e})),n}));var t="far"in hn;dn(yn,(function(n,e){var r=e[0],a=e[1],i=e[2];return"far"!==a||t||(a="fas"),n[r]={prefix:a,iconName:i},n}),{})};gn();_.styles;function bn(n,t,e){if(n&&n[t]&&n[t][e])return{prefix:t,iconName:e,icon:n[t][e]}}function vn(n){var t=n.tag,e=n.attributes,r=void 0===e?{}:e,a=n.children,i=void 0===a?[]:a;return"string"==typeof n?an(n):"<".concat(t," ").concat(function(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,'="').concat(an(n[e]),'" ')}),"").trim()}(r),">").concat(i.map(vn).join(""),"</").concat(t,">")}var wn=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n?n.toLowerCase().split(" ").reduce((function(n,t){var e=t.toLowerCase().split("-"),r=e[0],a=e.slice(1).join("-");if(r&&"h"===a)return n.flipX=!0,n;if(r&&"v"===a)return n.flipY=!0,n;if(a=parseFloat(a),isNaN(a))return n;switch(r){case"grow":n.size=n.size+a;break;case"shrink":n.size=n.size-a;break;case"left":n.x=n.x-a;break;case"right":n.x=n.x+a;break;case"up":n.y=n.y-a;break;case"down":n.y=n.y+a;break;case"rotate":n.rotate=n.rotate+a}return n}),t):t};function kn(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=(new Error).stack}kn.prototype=Object.create(Error.prototype),kn.prototype.constructor=kn;var xn={fill:"currentColor"},On={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},jn={tag:"path",attributes:s({},xn,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},En=s({},On,{attributeName:"opacity"});s({},xn,{cx:"256",cy:"364",r:"28"}),s({},On,{attributeName:"r",values:"28;14;28;28;14;28;"}),s({},En,{values:"1;0;1;1;0;1;"}),s({},xn,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),s({},En,{values:"1;0;0;0;0;1;"}),s({},xn,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),s({},En,{values:"0;0;1;1;0;0;"}),_.styles;function zn(n){var t=n[0],e=n[1],r=c(n.slice(4),1)[0];return{found:!0,width:t,height:e,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(C.familyPrefix,"-").concat(z.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.familyPrefix,"-").concat(z.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(C.familyPrefix,"-").concat(z.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}_.styles;var Pn='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';function In(){var n=k,t=x,e=C.familyPrefix,r=C.replacementClass,a=Pn;if(e!==n||r!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(l,".".concat(r))}return a}var Cn=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.definitions={}}var t,e,r;return t=n,e=[{key:"add",value:function(){for(var n=this,t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var a=e.reduce(this._pullDefinitions,{});Object.keys(a).forEach((function(t){n.definitions[t]=s({},n.definitions[t]||{},a[t]),pn(t,a[t]),gn()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,t){var e=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(e).map((function(t){var r=e[t],a=r.prefix,i=r.iconName,o=r.icon;n[a]||(n[a]={}),n[a][i]=o})),n}}],e&&o(t.prototype,e),r&&o(t,r),n}();function An(){C.autoAddCss&&!Ln&&(tn(In()),Ln=!0)}function _n(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map((function(n){return vn(n)}))}}),Object.defineProperty(n,"node",{get:function(){if(v){var t=g.createElement("div");return t.innerHTML=n.html,t.children}}}),n}function Mn(n){var t=n.prefix,e=void 0===t?"fa":t,r=n.iconName;if(r)return bn(Nn.definitions,e,r)||bn(_.styles,e,r)}var Sn,Nn=new Cn,Ln=!1,Tn={transform:function(n){return wn(n)}},Rn=(Sn=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.transform,r=void 0===e?nn:e,a=t.symbol,i=void 0!==a&&a,o=t.mask,l=void 0===o?null:o,c=t.maskId,f=void 0===c?null:c,u=t.title,m=void 0===u?null:u,d=t.titleId,p=void 0===d?null:d,h=t.classes,y=void 0===h?[]:h,g=t.attributes,b=void 0===g?{}:g,v=t.styles,w=void 0===v?{}:v;if(n){var k=n.prefix,x=n.iconName,O=n.icon;return _n(s({type:"icon"},n),(function(){return An(),C.autoA11y&&(m?b["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(p||rn()):(b["aria-hidden"]="true",b.focusable="false")),un({icons:{main:zn(O),mask:l?zn(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:x,transform:s({},nn,r),symbol:i,title:m,maskId:f,titleId:p,extra:{attributes:b,styles:w,classes:y}})}))}},function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=(n||{}).icon?n:Mn(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Mn(r||{})),Sn(e,s({},t,{mask:r}))}),Dn=e(5697),Yn=e.n(Dn);function Un(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function Wn(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?Un(Object(e),!0).forEach((function(t){Fn(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):Un(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function Xn(n){return Xn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Xn(n)}function Fn(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Bn(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}function Hn(n){return function(n){if(Array.isArray(n))return qn(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return qn(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return qn(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function qn(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function Gn(n){return t=n,(t-=0)==t?n:(n=n.replace(/[\-_\s]+(.)?/g,(function(n,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+n.substr(1);var t}var Vn=["style"];var Jn=!1;try{Jn=!0}catch(mt){}function Kn(n){return n&&"object"===Xn(n)&&n.prefix&&n.iconName&&n.icon?n:Tn.icon?Tn.icon(n):null===n?null:n&&"object"===Xn(n)&&n.prefix&&n.iconName?n:Array.isArray(n)&&2===n.length?{prefix:n[0],iconName:n[1]}:"string"==typeof n?{prefix:"fas",iconName:n}:void 0}function Zn(n,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Fn({},n,t):{}}var Qn=["forwardedRef"];function $n(n){var t=n.forwardedRef,e=Bn(n,Qn),r=e.icon,a=e.mask,i=e.symbol,o=e.className,l=e.title,s=e.titleId,c=e.maskId,f=Kn(r),u=Zn("classes",[].concat(Hn(function(n){var t,e=n.beat,r=n.fade,a=n.beatFade,i=n.bounce,o=n.shake,l=n.flash,s=n.spin,c=n.spinPulse,f=n.spinReverse,u=n.pulse,m=n.fixedWidth,d=n.inverse,p=n.border,h=n.listItem,y=n.flip,g=n.size,b=n.rotation,v=n.pull,w=(Fn(t={"fa-beat":e,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":m,"fa-inverse":d,"fa-border":p,"fa-li":h,"fa-flip":!0===y,"fa-flip-horizontal":"horizontal"===y||"both"===y,"fa-flip-vertical":"vertical"===y||"both"===y},"fa-".concat(g),null!=g),Fn(t,"fa-rotate-".concat(b),null!=b&&0!==b),Fn(t,"fa-pull-".concat(v),null!=v),Fn(t,"fa-swap-opacity",n.swapOpacity),t);return Object.keys(w).map((function(n){return w[n]?n:null})).filter((function(n){return n}))}(e)),Hn(o.split(" ")))),m=Zn("transform","string"==typeof e.transform?Tn.transform(e.transform):e.transform),d=Zn("mask",Kn(a)),p=Rn(f,Wn(Wn(Wn(Wn({},u),m),d),{},{symbol:i,title:l,titleId:s,maskId:c}));if(!p)return function(){var n;!Jn&&console&&"function"==typeof console.error&&(n=console).error.apply(n,arguments)}("Could not find icon",f),null;var h=p.abstract,y={ref:t};return Object.keys(e).forEach((function(n){$n.defaultProps.hasOwnProperty(n)||(y[n]=e[n])})),nt(h[0],y)}$n.displayName="FontAwesomeIcon",$n.propTypes={beat:Yn().bool,border:Yn().bool,beatFade:Yn().bool,bounce:Yn().bool,className:Yn().string,fade:Yn().bool,flash:Yn().bool,mask:Yn().oneOfType([Yn().object,Yn().array,Yn().string]),maskId:Yn().string,fixedWidth:Yn().bool,inverse:Yn().bool,flip:Yn().oneOf([!0,!1,"horizontal","vertical","both"]),icon:Yn().oneOfType([Yn().object,Yn().array,Yn().string]),listItem:Yn().bool,pull:Yn().oneOf(["right","left"]),pulse:Yn().bool,rotation:Yn().oneOf([0,90,180,270]),shake:Yn().bool,size:Yn().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Yn().bool,spinPulse:Yn().bool,spinReverse:Yn().bool,symbol:Yn().oneOfType([Yn().bool,Yn().string]),title:Yn().string,titleId:Yn().string,transform:Yn().oneOfType([Yn().string,Yn().object]),swapOpacity:Yn().bool},$n.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var nt=function n(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e)return e;var a=(e.children||[]).map((function(e){return n(t,e)})),i=Object.keys(e.attributes||{}).reduce((function(n,t){var r=e.attributes[t];switch(t){case"class":n.attrs.className=r,delete e.attributes.class;break;case"style":n.attrs.style=r.split(";").map((function(n){return n.trim()})).filter((function(n){return n})).reduce((function(n,t){var e,r=t.indexOf(":"),a=Gn(t.slice(0,r)),i=t.slice(r+1).trim();return a.startsWith("webkit")?n[(e=a,e.charAt(0).toUpperCase()+e.slice(1))]=i:n[a]=i,n}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?n.attrs[t.toLowerCase()]=r:n.attrs[Gn(t)]=r}return n}),{attrs:{}}),o=r.style,l=void 0===o?{}:o,s=Bn(r,Vn);return i.attrs.style=Wn(Wn({},i.attrs.style),l),t.apply(void 0,[e.tag,Wn(Wn({},i.attrs),s)].concat(Hn(a)))}.bind(null,r.createElement),tt=e(1417),et=e(5086);const rt=et.default.div.withConfig({displayName:"layout__Layout",componentId:"sc-ylvf7j-0"})(["margin:3rem auto;max-width:900px;padding:0 1rem;display:flex;min-height:0vh;flex-direction:column;flex-wrap:nowrap;justify-content:center;a{color:darkblue;text-decoration:none;}"]),at=et.default.header.withConfig({displayName:"layout__Head",componentId:"sc-ylvf7j-1"})(["margin-bottom:1.5rem;display:flex;flex-direction:row;justify-content:space-between;flex-wrap:wrap;justify-items:center;"]),it=et.default.li.withConfig({displayName:"layout__NavBarLink",componentId:"sc-ylvf7j-2"})(["display:inline-block;margin-right:1rem;"]),ot=et.default.div.withConfig({displayName:"layout__FooterLink",componentId:"sc-ylvf7j-3"})(['margin-left:5px;margin-right:5px;text-align:"center";']),lt=et.default.footer.withConfig({displayName:"layout__Foot",componentId:"sc-ylvf7j-4"})(["margin-top:2.5rem;display:flex;flex-direction:row;justify-content:space-evenly;justify-items:center;flex-wrap:wrap;"]),st=n=>r.createElement(it,null,r.createElement(a.rU,{to:n.to},n.children)),ct=()=>r.createElement(at,null,r.createElement("div",null,r.createElement(a.rU,{to:"/",style:{textShadow:"none",backgroundImage:"none"}},r.createElement("h3",{style:{display:"inline-block"}},"Johannes Otterbach"))),r.createElement("div",null,r.createElement("ul",{style:{listStyle:"none",float:"right"}},r.createElement(st,{to:"/blogs"},"Archive"),r.createElement(st,{to:"/professional/"},"Professional"),r.createElement(st,{to:"/contact/"},"Contact")))),ft=()=>r.createElement(lt,null,r.createElement(ot,null,r.createElement("a",{href:"https://linkedin.com/in/jotterbach",alt:"linkedin"},r.createElement($n,{icon:tt.hwn,size:"2x",color:"#606060"}))),r.createElement(ot,null,r.createElement("a",{href:"https://www.github.com/jotterbach",alt:"github"},r.createElement($n,{icon:tt.zhw,size:"2x",color:"#606060"}))),r.createElement(ot,null,r.createElement("a",{href:"https://www.twitter.com/jsotterbach",alt:"twitter"},r.createElement($n,{icon:tt.mdU,size:"2x",color:"#606060"}))));var ut=n=>{let{children:t}=n;return r.createElement(rt,null,r.createElement("div",null,r.createElement(ct,null)),r.createElement("div",{className:"Content"},t),r.createElement("div",null,r.createElement(ft,null)))}}}]);
//# sourceMappingURL=commons-3d79639996986dad02eb.js.map