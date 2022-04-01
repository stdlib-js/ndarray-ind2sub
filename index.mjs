// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ind2sub@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-order@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-index-mode@esm/index.mjs";var p={mode:"throw",order:"row-major"},l=o,u=d,g=a,j=m,h=s;var v=function(e,r){return l(r)?u(r,"mode")&&(e.mode=r.mode,!j(e.mode))?new TypeError(h("invalid option. `%s` option must be a supported/recognized mode. Option: `%s`.","mode",e.mode)):u(r,"order")&&(e.order=r.order,!g(e.order))?new TypeError(h("invalid option. `%s` option must be a supported/recognized order. Option: `%s`.","order",e.order)):null:new TypeError(h("invalid argument. Options argument must be an object. Value: `%s`.",r))},b=r.primitives,f=t.isPrimitive,y=n,c=i,w=s,x=p,E=v;var T=function(e,r,t){var n,i;if((n={}).mode=x.mode,n.order=x.order,arguments.length>2&&(i=E(n,t)))throw i;if(!b(e))throw new TypeError(w("invalid argument. Shape argument must be an array-like object containing nonnegative integers. Value: `%s`.",e));if(!f(r))throw new TypeError(w("invalid argument. Linear index argument must be integer valued. Value: `%s`.",r));return c(e,y(e,n.order),0,n.order,r,n.mode)},V=r.primitives,O=t.isPrimitive,k=n,z=i.assign,L=s,P=p,S=v;var q=T,A=function(e,r,t,n){var i,s,o;if((i={}).mode=P.mode,i.order=P.order,4===arguments.length){if(o=S(i,arguments[2]))throw o;if("object"!=typeof n||null===n)throw new TypeError(L("invalid argument. Output argument must be either an array, typed array, or object. Value: `%s`.",n));s=n}else if("object"!=typeof(s=t)||null===s)throw new TypeError(L("invalid argument. Output argument must be either an array, typed array, or object. Value: `%s`.",s));if(!V(e))throw new TypeError(L("invalid argument. Shape argument must be an array-like object containing nonnegative integers. Value: `%s`.",e));if(!O(r))throw new TypeError(L("invalid argument. Linear index argument must be integer valued. Value: `%s`.",r));return z(e,k(e,i.order),0,i.order,r,i.mode,s)};e(q,"assign",A);var B=q;export{A as assign,B as default};
//# sourceMappingURL=index.mjs.map