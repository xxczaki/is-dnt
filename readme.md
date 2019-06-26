# is-dnt [![Build Status](https://travis-ci.org/xxczaki/is-dnt.svg?branch=master)](https://travis-ci.org/xxczaki/is-dnt) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

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

## Notice

This package uses the solution described by [Corbin Davenport](https://github.com/corbindavenport) in his [How to correctly check for Do Not Track with JavaScript](https://dev.to/corbindavenport/how-to-correctly-check-for-do-not-track-with-javascript-135d) post.

## License

MIT © [Antoni Kepinski](https://kepinski.me)
