'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var bulkify = require('bulkify');
var entry = './src/main.js';

gulp.task('bulkify', function() {
    var bundleStream = browserify({
        entries: entry
    });
    bundleStream
        .transform(bulkify)
        .on('error', function(err) {
            console.log(err);
        })
});