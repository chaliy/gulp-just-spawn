# gulp-cmd

## Because there is not enough spawn/exec wrappers on the Internet

[![NPM version][npm-image]][npm-url]

Main driver is the fact that sometimes build scripts require just running commnds. This package is about to reduce boilerplate. Nothing fancy.

- Requires `Promise` to be awialable globally
- Designed to work with `gulp` `Promise` support
- Wrapper around `spawn`, all docs from `spawn` is relevant

## Usage

First, install `gulp-cmd` as a development dependency:

```shell
npm install --save-dev gulp-cmd
```
Then add use it in your gulpfile, like so (note these are only examples, please check the documentation for your functions for the correct way to use them):

```js
var gulp = require('gulp');
var cmd = require('gulp-cmd');

// Run single command

gulp.task('deploy', () => cmd('eb', ['deploy', 'production']));

// Run multiple command sequentually

gulp.task('build:client', () => cmd([
  {cmd: 'npm', args: ['install'], options: {cwd: `${__dirname}/client`}},
  {cmd: 'npm', args: ['run', 'build'], options: {cwd: `${__dirname}/client`}}  
]));
```
## LICENSE

[MIT License](http://en.wikipedia.org/wiki/MIT_License)


[npm-url]: https://npmjs.org/package/gulp-cmd
[npm-image]: https://badge.fury.io/js/gulp-cmd.png

[gratipay-url]: https://www.gratipay.com/OverZealous/
[gratipay-image]: https://img.shields.io/gratipay/OverZealous.svg