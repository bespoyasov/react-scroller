var gulp = require('gulp'),
	rename = require('gulp-rename'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	minify = require('gulp-minify'),
	jshint = require('gulp-jshint'),
	source = require('vinyl-source-stream'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	fs = require('fs');


gulp.task('scripts', function() {
	browserify('src/react-scroller.js', {
		entries: ['src/react-scroller.js'], 
		debug: false
	})
		.transform(babelify, {
			presets: ['es2015', 'react', 'stage-2'],
			plugins: ['transform-class-properties', "transform-object-rest-spread"]
		})
		.bundle()
        .pipe(source('react-scroller.js'))
        .pipe(jshint())
        .pipe(gulp.dest('dist/'))
		.pipe(notify('Scripts task completed'));
});


gulp.task('scripts-minify', function() {
	return gulp.src('dist/react-scroller.js')
		.pipe(minify())
        .pipe(gulp.dest('dist/react-scroller-min.js'))
		.pipe(notify('Scripts-minify task completed'));
});


gulp.task('default', ['scripts'], function(){
	gulp.watch('./src/**/*.js', ['scripts']);
});

gulp.task('build', ['scripts', 'scripts-minify']);
