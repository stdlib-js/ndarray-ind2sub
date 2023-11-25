// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,b,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,y,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,x=isNaN,O=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,i,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,x(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,o;for(t=[],o=0,n=k.exec(r);n;)(e=r.slice(o,k.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),o=k.lastIndex,n=k.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function V(r){return"string"==typeof r}function A(r){var e,t,n;if(!V(r))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=P(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return S.apply(null,t)}var L,F=Object.prototype,N=F.toString,C=F.__defineGetter__,$=F.__defineSetter__,R=F.__lookupGetter__,B=F.__lookupSetter__;L=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(R.call(r,e)||B.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,e,t.get),a&&$&&$.call(r,e,t.set),r};var M=L;function G(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(r){return"number"==typeof r}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return U&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&Y.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,q="function"==typeof D?D.toStringTag:"";var H=W()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[q],e=z(r,q);try{r[q]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[q]=t:delete r[q],n}:function(r){return X.call(r)},J=Number,K=J.prototype.toString;var Q=W();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===H(r)))}function er(r){return Z(r)||rr(r)}G(er,"isPrimitive",Z),G(er,"isObject",rr);var tr=Number.POSITIVE_INFINITY,nr=J.NEGATIVE_INFINITY,or=Math.floor;function ir(r){return or(r)===r}function ar(r){return r<tr&&r>nr&&ir(r)}function ur(r){return Z(r)&&ar(r)}function cr(r){return rr(r)&&ar(r.valueOf())}function fr(r){return ur(r)||cr(r)}function lr(r){return ur(r)&&r>=0}function sr(r){return cr(r)&&r.valueOf()>=0}function pr(r){return lr(r)||sr(r)}G(fr,"isPrimitive",ur),G(fr,"isObject",cr),G(pr,"isPrimitive",lr),G(pr,"isObject",sr);function gr(r){if("function"!=typeof r)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&ir(r.length)&&r.length>=0&&r.length<=4294967295}(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}var dr=gr(pr.isPrimitive),hr=gr(pr.isObject),yr=gr(pr);function vr(r,e){return"column-major"===e?function(r){var e,t,n;for(e=[],t=1,n=0;n<r.length;n++)e.push(t),t*=r[n];return e}(r):function(r){var e,t,n,o;for(e=r.length,t=[],o=0;o<e;o++)t.push(0);for(n=1,o=e-1;o>=0;o--)t[o]=n,n*=r[o];return t}(r)}G(yr,"primitives",dr),G(yr,"objects",hr),G(vr,"assign",(function(r,e,t){return"column-major"===e?function(r,e){var t,n;for(t=1,n=0;n<r.length;n++)e[n]=t,t*=r[n];return e}(r,t):function(r,e){var t,n;for(t=1,n=r.length-1;n>=0;n--)e[n]=t,t*=r[n];return e}(r,t)}));var br=Math.ceil;function wr(r){return r<0?br(r):or(r)}function mr(r,e,t,n,o,i,a){var u,c,f,l,s;for(u=r.length,c=1,s=0;s<u;s++)c*=r[s];if("clamp"===i)o<0?o=0:o>=c&&(o=c-1);else if("wrap"===i)o<0?(o+=c)<0&&0!==(o%=c)&&(o+=c):o>=c&&(o-=c)>=c&&(o%=c);else if(o<0||o>=c)throw new RangeError(A("invalid argument. Linear index must not exceed array dimensions. Number of array elements: `%u`. Value: `%d`.",c,o));if(0===t){if("column-major"===n){for(s=0;s<u;s++)o-=l=o%r[s],o/=r[s],a[s]=l;return a}for(s=u-1;s>=0;s--)o-=l=o%r[s],o/=r[s],a[s]=l;return a}if("column-major"===n){for(s=u-1;s>=0;s--)(l=e[s])<0?(o-=(f=wr(o/l))*l,a[s]=r[s]-1+f):(o-=(f=wr(o/l))*l,a[s]=f);return a}for(s=0;s<u;s++)(l=e[s])<0?(o-=(f=wr(o/l))*l,a[s]=r[s]-1+f):(o-=(f=wr(o/l))*l,a[s]=f);return a}function jr(r,e,t,n,o,i){var a,u;for(a=[],u=0;u<r.length;u++)a.push(0);return mr(r,e,t,n,o,i,a)}function Er(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}G(jr,"assign",mr);var _r="throw",xr="row-major";var Or=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var Tr=/./;function Sr(r){return"boolean"==typeof r}var kr=Boolean,Ir=Boolean.prototype.toString;var Pr=W();function Vr(r){return"object"==typeof r&&(r instanceof kr||(Pr?function(r){try{return Ir.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===H(r)))}function Ar(r){return Sr(r)||Vr(r)}function Lr(){return new Function("return this;")()}G(Ar,"isPrimitive",Sr),G(Ar,"isObject",Vr);var Fr="object"==typeof self?self:null,Nr="object"==typeof window?window:null,Cr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},$r="object"==typeof Cr?Cr:null,Rr="object"==typeof globalThis?globalThis:null;var Br=function(r){if(arguments.length){if(!Sr(r))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Lr()}if(Rr)return Rr;if(Fr)return Fr;if(Nr)return Nr;if($r)return $r;throw new Error("unexpected error. Unable to resolve global object.")}(),Mr=Br.document&&Br.document.childNodes,Gr=Int8Array;function Zr(){return/^\s*function\s*([^(]*)/i}var Ur=/^\s*function\s*([^(]*)/i;function Wr(r){return null!==r&&"object"==typeof r}G(Zr,"REGEXP",Ur);var Xr=function(r){if("function"!=typeof r)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Or(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Wr);function Yr(r){var e,t,n,o;if(("Object"===(t=H(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ur.exec(n.toString()))return e[1]}return Wr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}G(Wr,"isObjectLikeArray",Xr);var zr="function"==typeof Tr||"object"==typeof Gr||"function"==typeof Mr?function(r){return Yr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Yr(r).toLowerCase():e};function Dr(r){return"function"===zr(r)}var qr,Hr=Object,Jr=Object.getPrototypeOf;qr=Dr(Object.getPrototypeOf)?Jr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===H(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Kr=qr;var Qr=Object.prototype;function re(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Or(r)}(r)&&(e=function(r){return null==r?null:(r=Hr(r),Kr(r))}(r),!e||!z(r,"constructor")&&z(e,"constructor")&&Dr(e.constructor)&&"[object Function]"===H(e.constructor)&&z(e,"isPrototypeOf")&&Dr(e.isPrototypeOf)&&(e===Qr||function(r){var e;for(e in r)if(!z(r,e))return!1;return!0}(r)))}var ee=["row-major","column-major"];function te(){return ee.slice()}G(te,"enum",(function(){return{"row-major":1,"column-major":2}}));var ne=te(),oe=ne.length;var ie=["throw","clamp","wrap"];function ae(){return ie.slice()}G(ae,"enum",(function(){return{throw:1,clamp:2,wrap:3}}));var ue=ae(),ce=ue.length;function fe(r,e){return re(e)?z(e,"mode")&&(r.mode=e.mode,!function(r){var e;for(e=0;e<ce;e++)if(r===ue[e])return!0;return!1}(r.mode))?new TypeError(Er("0jx5m,LL","mode",r.mode)):z(e,"order")&&(r.order=e.order,!function(r){var e;for(e=0;e<oe;e++)if(r===ne[e])return!0;return!1}(r.order))?new TypeError(Er("0jx5n,LM","order",r.order)):null:new TypeError(Er("0jx2V,FD",e))}function le(r,e,t){var n,o;if((n={}).mode=_r,n.order=xr,arguments.length>2&&(o=fe(n,t)))throw o;if(!dr(r))throw new TypeError(Er("0jx5k,LN",r));if(!ur(e))throw new TypeError(Er("0jx5l,LO",e));return jr(r,vr(r,n.order),0,n.order,e,n.mode)}function se(r,e,t,n){var o,i,a;if((o={}).mode=_r,o.order=xr,4===arguments.length){if(a=fe(o,arguments[2]))throw a;if("object"!=typeof n||null===n)throw new TypeError(Er("0jx5j,LP",n));i=n}else if("object"!=typeof(i=t)||null===i)throw new TypeError(Er("0jx5j,LP",i));if(!dr(r))throw new TypeError(Er("0jx5k,LN",r));if(!ur(e))throw new TypeError(Er("0jx5l,LO",e));return mr(r,vr(r,o.order),0,o.order,e,o.mode,i)}G(le,"assign",se);export{se as assign,le as default};
//# sourceMappingURL=mod.js.map
