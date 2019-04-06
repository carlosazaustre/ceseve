[![Build Status](https://travis-ci.org/carlosazaustre/ceseve.svg?branch=master)](https://travis-ci.org/carlosazaustre/ceseve)
[![install size](https://packagephobia.now.sh/badge?p=ceseve)](https://packagephobia.now.sh/result?p=ceseve)

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
  { title: "foo", property: "bar" },
  { title: "foo_2", property: "bar_2" }
];

const csvDocument = csv(data);
// csv:
//  title,property
//  foo,bar
//  foo_2,bar_2
```

> You can specify options object:
```js
const csvDocument = csv(data, {
  separator: ';',
});
// csv:
//  title;property
//  foo;bar
//  foo_2;bar_2

```

## License
MIT © [Carlos Azaustre](https://carlosazaustre.es)
