// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).ind2sub={})}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,a=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,p,s;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(r,t)||a.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),p="get"in e,s="set"in e,l&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(r,t,e.get),s&&f&&f.call(r,t,e.set),r};var l=e;function p(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function s(r){return"number"==typeof r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function m(r,t){return null!=r&&b.call(r,t)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var w=d()?function(r){var t,e,n;if(null==r)return v.call(r);e=r[g],t=m(r,g);try{r[g]=void 0}catch(t){return v.call(r)}return n=v.call(r),t?r[g]=e:delete r[g],n}:function(r){return v.call(r)},h=Number,j=h.prototype.toString;var _=d();function O(r){return"object"==typeof r&&(r instanceof h||(_?function(r){try{return j.call(r),!0}catch(r){return!1}}(r):"[object Number]"===w(r)))}function E(r){return s(r)||O(r)}p(E,"isPrimitive",s),p(E,"isObject",O);var T=Number.POSITIVE_INFINITY,P=h.NEGATIVE_INFINITY,S=Math.floor;function M(r){return S(r)===r}function x(r){return r<T&&r>P&&M(r)}function I(r){return s(r)&&x(r)}function A(r){return O(r)&&x(r.valueOf())}function N(r){return I(r)||A(r)}function V(r){return I(r)&&r>=0}function B(r){return A(r)&&r.valueOf()>=0}function F(r){return V(r)||B(r)}p(N,"isPrimitive",I),p(N,"isObject",A),p(F,"isPrimitive",V),p(F,"isObject",B);function L(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&M(r.length)&&r.length>=0&&r.length<=4294967295}(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}var C=L(F.isPrimitive),G=L(F.isObject),k=L(F);function R(r,t){return"column-major"===t?function(r){var t,e,n;for(t=[],e=1,n=0;n<r.length;n++)t.push(e),e*=r[n];return t}(r):function(r){var t,e,n,o;for(t=r.length,e=[],o=0;o<t;o++)e.push(0);for(n=1,o=t-1;o>=0;o--)e[o]=n,n*=r[o];return e}(r)}p(k,"primitives",C),p(k,"objects",G),p(R,"assign",(function(r,t,e){return"column-major"===t?function(r,t){var e,n;for(e=1,n=0;n<r.length;n++)t[n]=e,e*=r[n];return t}(r,e):function(r,t){var e,n;for(e=1,n=r.length-1;n>=0;n--)t[n]=e,e*=r[n];return t}(r,e)}));var U=Math.ceil;function Y(r){return r<0?U(r):S(r)}function X(r,t,e,n,o,u,i){var f,c,a,l,p;for(f=r.length,c=1,p=0;p<f;p++)c*=r[p];if("clamp"===u)o<0?o=0:o>=c&&(o=c-1);else if("wrap"===u)o<0?(o+=c)<0&&0!==(o%=c)&&(o+=c):o>=c&&(o-=c)>=c&&(o%=c);else if(o<0||o>=c)throw new RangeError("invalid argument. Linear index must not exceed array dimensions. Number of array elements: "+c+". Value: `"+o+"`.");if(0===e){if("column-major"===n){for(p=0;p<f;p++)o-=l=o%r[p],o/=r[p],i[p]=l;return i}for(p=f-1;p>=0;p--)o-=l=o%r[p],o/=r[p],i[p]=l;return i}if("column-major"===n){for(p=f-1;p>=0;p--)(l=t[p])<0?(o-=(a=Y(o/l))*l,i[p]=r[p]-1+a):(o-=(a=Y(o/l))*l,i[p]=a);return i}for(p=0;p<f;p++)(l=t[p])<0?(o-=(a=Y(o/l))*l,i[p]=r[p]-1+a):(o-=(a=Y(o/l))*l,i[p]=a);return i}function q(r,t,e,n,o,u){var i,f;for(i=[],f=0;f<r.length;f++)i.push(0);return X(r,t,e,n,o,u,i)}function z(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}p(q,"assign",X);var D="throw",H="row-major";var J=Array.isArray?Array.isArray:function(r){return"[object Array]"===w(r)};var K=/./;function Q(r){return"boolean"==typeof r}var W=Boolean.prototype.toString;var Z=d();function $(r){return"object"==typeof r&&(r instanceof Boolean||(Z?function(r){try{return W.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===w(r)))}function rr(r){return Q(r)||$(r)}function tr(){return new Function("return this;")()}p(rr,"isPrimitive",Q),p(rr,"isObject",$);var er="object"==typeof self?self:null,nr="object"==typeof window?window:null,or="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ur="object"==typeof or?or:null;var ir=function(r){if(arguments.length){if(!Q(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return tr()}if(er)return er;if(nr)return nr;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=ir.document&&ir.document.childNodes,cr=Int8Array;function ar(){return/^\s*function\s*([^(]*)/i}var lr=/^\s*function\s*([^(]*)/i;function pr(r){return null!==r&&"object"==typeof r}p(ar,"REGEXP",lr);var sr=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!J(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(pr);function yr(r){var t,e,n,o;if(("Object"===(e=w(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=lr.exec(n.toString()))return t[1]}return pr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(pr,"isObjectLikeArray",sr);var dr="function"==typeof K||"object"==typeof cr||"function"==typeof fr?function(r){return yr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?yr(r).toLowerCase():t};function vr(r){return"function"===dr(r)}var br,mr=Object.getPrototypeOf;br=vr(Object.getPrototypeOf)?mr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===w(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var gr=br;var wr=Object.prototype;function hr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!J(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),gr(r))}(r),!t||!m(r,"constructor")&&m(t,"constructor")&&vr(t.constructor)&&"[object Function]"===w(t.constructor)&&m(t,"isPrototypeOf")&&vr(t.isPrototypeOf)&&(t===wr||function(r){var t;for(t in r)if(!m(r,t))return!1;return!0}(r)))}var jr=["row-major","column-major"];function _r(){return jr.slice()}p(_r,"enum",(function(){return{"row-major":1,"column-major":2}}));var Or=_r(),Er=Or.length;var Tr=["throw","clamp","wrap"];function Pr(){return Tr.slice()}p(Pr,"enum",(function(){return{throw:1,clamp:2,wrap:3}}));var Sr=Pr(),Mr=Sr.length;function xr(r,t){return hr(t)?m(t,"mode")&&(r.mode=t.mode,!function(r){var t;for(t=0;t<Mr;t++)if(r===Sr[t])return!0;return!1}(r.mode))?new TypeError(z("0Mt60","mode",r.mode)):m(t,"order")&&(r.order=t.order,!function(r){var t;for(t=0;t<Er;t++)if(r===Or[t])return!0;return!1}(r.order))?new TypeError(z("0Mt61","order",r.order)):null:new TypeError(z("0Mt2h",t))}function Ir(r,t,e){var n,o;if((n={}).mode=D,n.order=H,arguments.length>2&&(o=xr(n,e)))throw o;if(!C(r))throw new TypeError(z("0Mt5y",r));if(!I(t))throw new TypeError(z("invalid argument. Linear index must be integer valued. Value: `%s`.",t));return q(r,R(r,n.order),0,n.order,t,n.mode)}function Ar(r,t,e,n){var o,u,i;if((o={}).mode=D,o.order=H,4===arguments.length){if(i=xr(o,arguments[2]))throw i;if("object"!=typeof n||null===n)throw new TypeError(z("0Mt5x",n));u=n}else if("object"!=typeof(u=e)||null===u)throw new TypeError(z("0Mt5x",u));if(!C(r))throw new TypeError(z("0Mt5y",r));if(!I(t))throw new TypeError(z("invalid argument. Linear index must be integer valued. Value: `%s`.",t));return X(r,R(r,o.order),0,o.order,t,o.mode,u)}p(Ir,"assign",Ar),r.assign=Ar,r.default=Ir,Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=browser.js.map
