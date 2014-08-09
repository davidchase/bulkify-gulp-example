'use strict';

var gulp = require('gulp');
gulp.task('default', ['browserify'], function () {
    gulp.watch(['src/main.js'], ['bulkify']);
    gulp.watch(['src/**/*.js'], ['browserify']);
});