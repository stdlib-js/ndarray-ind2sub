// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).ind2sub=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var a,l,p,s;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(r,t)||c.call(r,t)?(a=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=a):r[t]=e.value),p="get"in e,s="set"in e,l&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(r,t,e.get),s&&i&&i.call(r,t,e.set),r};var a=t;function l(r,t,e){a(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function p(r){return"number"==typeof r}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;function b(r,t){return null!=r&&m.call(r,t)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var g=y()?function(r){var t,e,n;if(null==r)return v.call(r);e=r[d],t=b(r,d);try{r[d]=void 0}catch(t){return v.call(r)}return n=v.call(r),t?r[d]=e:delete r[d],n}:function(r){return v.call(r)},h=Number,j=h.prototype.toString;var w=y();function _(r){return"object"==typeof r&&(r instanceof h||(w?function(r){try{return j.call(r),!0}catch(r){return!1}}(r):"[object Number]"===g(r)))}function O(r){return p(r)||_(r)}l(O,"isPrimitive",p),l(O,"isObject",_);var E=Number.POSITIVE_INFINITY,T=h.NEGATIVE_INFINITY,P=Math.floor;function S(r){return P(r)===r}function M(r){return r<E&&r>T&&S(r)}function x(r){return p(r)&&M(r)}function I(r){return _(r)&&M(r.valueOf())}function A(r){return x(r)||I(r)}function N(r){return x(r)&&r>=0}function V(r){return I(r)&&r.valueOf()>=0}function B(r){return N(r)||V(r)}l(A,"isPrimitive",x),l(A,"isObject",I),l(B,"isPrimitive",N),l(B,"isObject",V);function F(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&S(r.length)&&r.length>=0&&r.length<=4294967295}(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}var L=F(B.isPrimitive),C=F(B.isObject),G=F(B);function k(r,t){return"column-major"===t?function(r){var t,e,n;for(t=[],e=1,n=0;n<r.length;n++)t.push(e),e*=r[n];return t}(r):function(r){var t,e,n,o;for(t=r.length,e=[],o=0;o<t;o++)e.push(0);for(n=1,o=t-1;o>=0;o--)e[o]=n,n*=r[o];return e}(r)}l(G,"primitives",L),l(G,"objects",C),l(k,"assign",(function(r,t,e){return"column-major"===t?function(r,t){var e,n;for(e=1,n=0;n<r.length;n++)t[n]=e,e*=r[n];return t}(r,e):function(r,t){var e,n;for(e=1,n=r.length-1;n>=0;n--)t[n]=e,e*=r[n];return t}(r,e)}));var R=Math.ceil;function U(r){return r<0?R(r):P(r)}function Y(r,t,e,n,o,u,i){var f,c,a,l,p;for(f=r.length,c=1,p=0;p<f;p++)c*=r[p];if("clamp"===u)o<0?o=0:o>=c&&(o=c-1);else if("wrap"===u)o<0?(o+=c)<0&&0!==(o%=c)&&(o+=c):o>=c&&(o-=c)>=c&&(o%=c);else if(o<0||o>=c)throw new RangeError("invalid argument. Linear index must not exceed array dimensions. Number of array elements: "+c+". Value: `"+o+"`.");if(0===e){if("column-major"===n){for(p=0;p<f;p++)o-=l=o%r[p],o/=r[p],i[p]=l;return i}for(p=f-1;p>=0;p--)o-=l=o%r[p],o/=r[p],i[p]=l;return i}if("column-major"===n){for(p=f-1;p>=0;p--)(l=t[p])<0?(o-=(a=U(o/l))*l,i[p]=r[p]-1+a):(o-=(a=U(o/l))*l,i[p]=a);return i}for(p=0;p<f;p++)(l=t[p])<0?(o-=(a=U(o/l))*l,i[p]=r[p]-1+a):(o-=(a=U(o/l))*l,i[p]=a);return i}function X(r,t,e,n,o,u){var i,f;for(i=[],f=0;f<r.length;f++)i.push(0);return Y(r,t,e,n,o,u,i)}function q(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}l(X,"assign",Y);var z="throw",D="row-major";var H=Array.isArray?Array.isArray:function(r){return"[object Array]"===g(r)};var J=/./;function K(r){return"boolean"==typeof r}var Q=Boolean.prototype.toString;var W=y();function Z(r){return"object"==typeof r&&(r instanceof Boolean||(W?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===g(r)))}function $(r){return K(r)||Z(r)}function rr(){return new Function("return this;")()}l($,"isPrimitive",K),l($,"isObject",Z);var tr="object"==typeof self?self:null,er="object"==typeof window?window:null,nr="object"==typeof global?global:null;var or=function(r){if(arguments.length){if(!K(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return rr()}if(tr)return tr;if(er)return er;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),ur=or.document&&or.document.childNodes,ir=Int8Array;function fr(){return/^\s*function\s*([^(]*)/i}var cr=/^\s*function\s*([^(]*)/i;function ar(r){return null!==r&&"object"==typeof r}l(fr,"REGEXP",cr);var lr=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!H(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(ar);function pr(r){var t,e,n,o;if(("Object"===(e=g(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=cr.exec(n.toString()))return t[1]}return ar(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(ar,"isObjectLikeArray",lr);var sr="function"==typeof J||"object"==typeof ir||"function"==typeof ur?function(r){return pr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?pr(r).toLowerCase():t};function yr(r){return"function"===sr(r)}var vr,mr=Object.getPrototypeOf;vr=yr(Object.getPrototypeOf)?mr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===g(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var br=vr;var dr=Object.prototype;function gr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!H(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),br(r))}(r),!t||!b(r,"constructor")&&b(t,"constructor")&&yr(t.constructor)&&"[object Function]"===g(t.constructor)&&b(t,"isPrototypeOf")&&yr(t.isPrototypeOf)&&(t===dr||function(r){var t;for(t in r)if(!b(r,t))return!1;return!0}(r)))}var hr=["row-major","column-major"];function jr(){return hr.slice()}l(jr,"enum",(function(){return{"row-major":1,"column-major":2}}));var wr=jr(),_r=wr.length;var Or=["throw","clamp","wrap"];function Er(){return Or.slice()}l(Er,"enum",(function(){return{throw:1,clamp:2,wrap:3}}));var Tr=Er(),Pr=Tr.length;function Sr(r,t){return gr(t)?b(t,"mode")&&(r.mode=t.mode,!function(r){var t;for(t=0;t<Pr;t++)if(r===Tr[t])return!0;return!1}(r.mode))?new TypeError(q("0Mt60","mode",r.mode)):b(t,"order")&&(r.order=t.order,!function(r){var t;for(t=0;t<_r;t++)if(r===wr[t])return!0;return!1}(r.order))?new TypeError(q("0Mt61","order",r.order)):null:new TypeError(q("0Mt2h",t))}function Mr(r,t,e){var n,o;if((n={}).mode=z,n.order=D,arguments.length>2&&(o=Sr(n,e)))throw o;if(!L(r))throw new TypeError(q("0Mt5y",r));if(!x(t))throw new TypeError(q("invalid argument. Linear index must be integer valued. Value: `%s`.",t));return X(r,k(r,n.order),0,n.order,t,n.mode)}return l(Mr,"assign",(function(r,t,e,n){var o,u,i;if((o={}).mode=z,o.order=D,4===arguments.length){if(i=Sr(o,arguments[2]))throw i;if("object"!=typeof n||null===n)throw new TypeError(q("0Mt5x",n));u=n}else if("object"!=typeof(u=e)||null===u)throw new TypeError(q("0Mt5x",u));if(!L(r))throw new TypeError(q("0Mt5y",r));if(!x(t))throw new TypeError(q("invalid argument. Linear index must be integer valued. Value: `%s`.",t));return Y(r,k(r,o.order),0,o.order,t,o.mode,u)})),Mr}));
//# sourceMappingURL=index.js.map
