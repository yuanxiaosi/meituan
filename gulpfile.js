var gulp = require('gulp')
var shell = require('gulp-shell')
var sequence = require('run-sequence')

require('./task/clean');
require('./task/webpack');
require('./task/rev');
require('./task/minify');
require('./task/copy');

gulp.task('default', () => {
	return sequence('clean', 'copy-img', 'webpack-dev');
});
gulp.task('build', () => {
	return sequence('clean', 'copy-img', 'webpack', 'minify');
});


gulp.task('test', () => {
  return sequence('minify');
});

gulp.task('deve', shell.task(['node-dev index']))