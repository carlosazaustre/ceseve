[![Build Status](https://travis-ci.org/carlosazaustre/ceseve.svg?branch=master)](https://travis-ci.org/carlosazaustre/ceseve)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://carlosazaustre.es/"><img src="https://avatars2.githubusercontent.com/u/650752?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Carlos Azaustre</b></sub></a><br /><a href="https://github.com/carlosazaustre/ceseve/commits?author=carlosazaustre" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/sebas095"><img src="https://avatars0.githubusercontent.com/u/8863503?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sebastian Duque Restrepo</b></sub></a><br /><a href="https://github.com/carlosazaustre/ceseve/commits?author=sebas095" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!