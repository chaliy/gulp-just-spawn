# gulp-just-spawn

## Because there is not enough spawn/exec wrappers on the Internet

[![NPM version][npm-image]][npm-url]

Main driver is the fact that sometimes build scripts require just running commnds. This package is about to reduce boilerplate. Nothing fancy.

- Requires `Promise` to be awialable globally
- Designed to work with `gulp` `Promise` support
- Wrapper around `spawn`, all docs from `spawn` is relevant

## Usage

First, install `gulp-just-spawn` as a development dependency:

```shell
npm install --save-dev gulp-just-spawn
```
Then add use it in your gulpfile, like so (note these are only examples, please check the documentation for your functions for the correct way to use them):

```js
var gulp = require('gulp');
var spawn = require('gulp-just-spawn');

// Run single command

gulp.task('deploy', () => spawn('eb', ['deploy', 'production']));

// Run multiple command sequentually

gulp.task('build:client', () => spawn([
  {cmd: 'npm', args: ['install'], options: {cwd: `${__dirname}/client`}},
  {cmd: 'npm', args: ['run', 'build'], options: {cwd: `${__dirname}/client`}}  
]));
```
## LICENSE

[MIT License](http://en.wikipedia.org/wiki/MIT_License)


[npm-url]: https://npmjs.org/package/gulp-just-spawn
[npm-image]: https://badge.fury.io/js/gulp-just-spawn.png