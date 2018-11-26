# Dictionary.ts
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![docs][docs-image]][docs-url]


Library provides APIs to work with mutable dictionaries, where dictionary is:

```ts
type Dict <a> = {[key:string]: a}
```

Library assumeth that passed dictionaries do not have a prototype chain to be
concerned with, so either construct them with provided APIs or via
`Object.create(null)`, otherwise you may run into issues with inherited
properties like `toString` and what not.

### Warning on mutability

Library intentionally provides functional interface where it takes in
dictionary & other params and returns a dictionary. But be aware that it
actually mutates given dictionary in place and returns it back.

Recomended use as can be seen in [documentation examples][docs url] is to always
use returned dictionary as if it was different from passed in dictionary while
at the same time avoid touching a passed dictionary ever again. That would
allow you to switch between mutable & (upcoming) immutable version of this
library without breaking your code. Maybe I just really wish typescript had a
[owneship system][] :)

## Install

### yarn

    yarn add --save dictionary.ts

### npm

    npm install --save dictionary.ts


## Prior Art

API of this library mostly follows the API of the [Dict][Dict Elm] module from
[Elm][] core library.

[travis-image]: https://travis-ci.org/Gozala/dictionary.ts.svg?branch=master
[travis-url]: https://travis-ci.org/Gozala/dictionary.ts
[npm-image]: https://img.shields.io/npm/v/dictionary.ts.svg
[npm-url]: https://npmjs.org/package/dictionary.ts
[downloads-image]: https://img.shields.io/npm/dm/dictionary.ts.svg
[downloads-url]: https://npmjs.org/package/dictionary.ts
[docs-image]:https://img.shields.io/badge/typedoc-latest-ff69b4.svg?style=flat
[docs-url]:https://Gozala.github.io/dictionary.ts/
[ownership system]:https://doc.rust-lang.org/book/ownership.html
[Dict Elm]:http://package.elm-lang.org/packages/elm-lang/core/latest/Dict
[Elm]:http://elm-lang.org/