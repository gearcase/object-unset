# object-unset

> Removes the property at path of object. 



[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/object-unset/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/object-unset/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/object-unset)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/object-unset/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/object-unset)


## Install

```
$ npm install --save object-unset 
```

## Usage

> For more use-cases see the [tests](https://github.com/bubkoo/object-unset/blob/master/test/spec/index.js)

```js
var unset = require('object-unset');

unset({ a: { b: { c: 7 } } }, 'a');
// => {}

unset({ a: [{ b: { c: 7 } }] }, 'a[0]');
// => {a: [] }

unset({ a: [{ b: { c: 7 } }] }, 'a.0');
// => {a: [] }

unset({ a: { b: { c: 7 } } }, 'a.b.c');
// => { a: { b: {} } }

{ a: [{ b: { c: 7 } }] }, 'a[0].b.c');
// => { a: [{ b: {} }] }

unset({ a: [{ b: { c: 7 } }] }, 'a[0].d.c');
// => { a: [{ b: { c: 7 } }] }

unset(null, 'a.b.c');
// => null

unset({ a: 1 }, 'a.b.c.d');
// => { a: 1 }


```

## Related

- [object-set](https://github.com/bubkoo/object-set) - Sets the value at path of object.
- [to-path](https://github.com/bubkoo/to-path) - Converts string to a property path array. 
- [object-at](https://github.com/bubkoo/object-at) - Get object's property according to the path.
- [object-has](https://github.com/bubkoo/object-has) - Checks if path is a direct property of object.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/object-unset/issues/new).
