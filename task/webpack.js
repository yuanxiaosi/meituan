var _ = require('lodash');
var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('webpack-dev', function () {
	return gulp.src('../package.json') // whatever sources
		.pipe(webpack(_.defaultsDeep({
			watch: true
		}, require('./webpack.config.js')({
			ENV: "dev"
		}))))
		.pipe(gulp.dest('./src/build/static'));
});

gulp.task('webpack', function () {
	return gulp.src('../package.json') // whatever sources
		.pipe(webpack(_.defaultsDeep({
			watch: false
		}, require('./webpack.config.js')({
			ENV: "prod"
		}))))
		.pipe(gulp.dest('./src/build/static'));
});
