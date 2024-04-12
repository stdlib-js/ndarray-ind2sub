// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{primitives as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@v0.2.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@v0.2.1-esm/index.mjs";import o,{assign as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ind2sub@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-order@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-index-mode@v0.2.1-esm/index.mjs";var l="throw",a="row-major";function h(r,e){return i(e)?m(e,"mode")&&(r.mode=e.mode,!p(r.mode))?new TypeError(n("0jx5m","mode",r.mode)):m(e,"order")&&(r.order=e.order,!j(r.order))?new TypeError(n("0jx5n","order",r.order)):null:new TypeError(n("0jx2V",e))}function f(r,d,i){var m,j;if((m={}).mode=l,m.order=a,arguments.length>2&&(j=h(m,i)))throw j;if(!e(r))throw new TypeError(n("0jx5k",r));if(!s(d))throw new TypeError(n("0jx5l",d));return o(r,t(r,m.order),0,m.order,d,m.mode)}function v(r,o,i,m){var j,p,f;if((j={}).mode=l,j.order=a,4===arguments.length){if(f=h(j,arguments[2]))throw f;if("object"!=typeof m||null===m)throw new TypeError(n("0jx5j",m));p=m}else if("object"!=typeof(p=i)||null===p)throw new TypeError(n("0jx5j",p));if(!e(r))throw new TypeError(n("0jx5k",r));if(!s(o))throw new TypeError(n("0jx5l",o));return d(r,t(r,j.order),0,j.order,o,j.mode,p)}r(f,"assign",v);export{v as assign,f as default};
//# sourceMappingURL=index.mjs.map
