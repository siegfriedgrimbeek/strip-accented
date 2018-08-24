
# strip accented

  Useful for stripping out accented characters.

[![Build Status](https://travis-ci.org/siegfriedgrimbeek/strip-accented.svg?branch=master)](https://travis-ci.org/siegfriedgrimbeek/strip-accented)
[![Coverage Status](https://coveralls.io/repos/github/siegfriedgrimbeek/strip-accented/badge.svg?branch=master)](https://coveralls.io/github/siegfriedgrimbeek/strip-accented?branch=master)

## Installation

  In node:

    $ npm install strip-accented

## Usage

```js
const stripAccented = require('stripAccented')
let cleanString = stripAccented('èàáâę')

// cleanString = eaaae

```

## Tests

  `npm test`


## API

#### stripAccented(string)


  Function.

## License

  MIT
