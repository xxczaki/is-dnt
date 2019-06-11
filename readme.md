# is-dnt [![Build Status](https://travis-ci.org/xxczaki/is-dnt.svg?branch=master)](https://travis-ci.org/xxczaki/is-dnt)

> Check whether the Do not track (DNT) policy is enabled in user's browser or not

## Highlights

- Supports all major browsers (from Internet Explorer 6)
- 0 dependencies
- Written in TypeScript

## Install

```
$ npm install is-dnt
```


## Usage

```js
const isDnt = require('is-dnt');

isDnt(); //=> true
```


## API

### isDnt()

Returns a `boolean` of whether the Do not track policy is enabled and `undefined` if the browser does not support DNT.

## License

MIT © [Antoni Kepinski](https://kepinski.me)
