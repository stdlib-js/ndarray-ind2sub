<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# ind2sub

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a linear index to an array of subscripts.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
ind2sub = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ind2sub@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/ndarray-ind2sub/tags). For example,

```javascript
ind2sub = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ind2sub@v0.1.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var ind2sub = require( 'path/to/vendor/umd/ndarray-ind2sub/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ind2sub@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.ind2sub;
})();
</script>
```

#### ind2sub( shape, idx\[, options] )

Converts a linear index to an array of subscripts.

```javascript
var shape = [ 2, 2 ];

var s = ind2sub( shape, 2 );
// returns [ 1, 0 ]
```

The function supports the following `options`:

-   `mode`: specifies how to handle a linear index which exceeds array dimensions. The following modes are supported:

    -   `throw`: specifies that the function should throw an error when a linear index exceeds array dimensions.
    -   `wrap`: specifies that the function should wrap around a linear index exceeding array dimensions using modulo arithmetic.
    -   `clamp`: specifies that the function should set a linear index exceeding array dimensions to either `0` (minimum linear index) or the maximum linear index.

-   `order`: specifies whether an array is `row-major` (C-style) or `column-major` (Fortran-style). Default: `'row-major'`.

By default, the function assumes a row-major array. To return subscripts for a column-major array, set the `order` option.

```javascript
var shape = [ 2, 2 ];
var opts = {};

opts.order = 'column-major';
var s = ind2sub( shape, 1, opts );
// returns [ 1, 0 ]
```

By default, the function throws an `error` if provided a linear index which exceeds array dimensions. To specify alternative behavior, set the `mode` option.

```javascript
var shape = [ 2, 2 ];
var opts = {};

opts.mode = 'wrap';
var s = ind2sub( shape, -5, opts );
// returns [ 1, 1 ]

opts.mode = 'clamp';
s = ind2sub( shape, 7, opts );
// returns [ 1, 1 ]
```

#### ind2sub.assign( shape, idx\[, options], out )

Converts a linear index to an array of subscripts and assigns results to a provided output array.

```javascript
var shape = [ 2, 2 ];
var out = [ 0, 0 ];

var subscripts = ind2sub.assign( shape, 1, out );
// returns [ 0, 1 ]

var bool = ( subscripts === out );
// returns true
```

The function accepts the same `options` as above.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ind2sub@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var shape = [ 3, 3, 3 ];
var len = numel( shape );

var arr = [];
var i;
for ( i = 0; i < len; i++ ) {
    arr.push( i );
}

var opts = {
    'order': 'column-major'
};

console.log( '' );
console.log( 'Dimensions: %s.', shape.join( 'x' ) );
console.log( 'View (subscripts):' );
console.log( '' );

var row;
var s;

row = '  ';
for ( i = 0; i < len; i++ ) {
    s = ind2sub( shape, i, opts );
    row += '(' + s.join( ',' ) + ')';
    if ( (i+1)%shape[0] === 0 ) {
        console.log( row );
        row = '  ';
    } else {
        row += ', ';
    }
    if ( (i+1)%(shape[0]*shape[1]) === 0 ) {
        console.log( '' );
    }
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray-array`][@stdlib/ndarray/array]</span><span class="delimiter">: </span><span class="description">multidimensional arrays.</span>
-   <span class="package-name">[`@stdlib/ndarray-ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>
-   <span class="package-name">[`@stdlib/ndarray-sub2ind`][@stdlib/ndarray/sub2ind]</span><span class="delimiter">: </span><span class="description">convert subscripts to a linear index.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-ind2sub.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-ind2sub

[test-image]: https://github.com/stdlib-js/ndarray-ind2sub/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/ndarray-ind2sub/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-ind2sub/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-ind2sub?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-ind2sub.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-ind2sub/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-ind2sub/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-ind2sub/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-ind2sub/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-ind2sub/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-ind2sub/main/LICENSE

<!-- <related-links> -->

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray-array/tree/umd

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/umd

[@stdlib/ndarray/sub2ind]: https://github.com/stdlib-js/ndarray-sub2ind/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
