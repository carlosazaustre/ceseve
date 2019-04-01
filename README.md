[![Build Status](https://travis-ci.org/carlosazaustre/ceseve.svg?branch=master)](https://travis-ci.org/carlosazaustre/ceseve)

# ceseve
> Convert array of data to CSV file

## Install
```
$ npm install ceseve
```

## Usage
```js
const csv = require('ceseve');

const data = [
  { foo: "bar", choo: "moo" },
  { foo: "ber", choo: "muu" }
];

const csvDocument = csv(data);
// csv:
//  foo,moo
//  ber,muu
```

## License
MIT © [Carlos Azaustre](https://carlosazaustre.es)
