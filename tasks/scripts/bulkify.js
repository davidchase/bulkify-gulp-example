'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var bulkify = require('bulkify');
var hbsfy = require('hbsfy');
var source = require('vinyl-source-stream');
var entry = './src/modules/bulk.js';
var output_filename = 'main.js';
var output_path = './dist/js';

gulp.task('bulkify', function() {
    var bundleStream = browserify({
        entries: entry
    });
    bundleStream
        .transform(hbsfy)
        .on('error', function(err) {
            console.log(err);
        })
        .transform(bulkify)
        .on('error', function(err) {
            console.log(err);
        })
        .bundle()
        .on('error', function(err) {
            console.log(err);
        })
        .pipe(source(output_filename))
        .on('error', function(err) {
            console.log(err);
        })
        .pipe(gulp.dest(output_path));
});