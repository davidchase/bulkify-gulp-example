'use strict';

var gulp = require('gulp');
gulp.task('default', ['bulkify'], function () {
    gulp.watch(['src/modules/bulk.js'], ['bulkify']);
});