'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var bulkify = require('bulkify');
var hbsfy = require('hbsfy');
var source = require('vinyl-source-stream');
var entry = './src/modules/bulk.js';
var output_filename = 'main.js';
var output_path = './dist/js';
var buffer = require('vinyl-buffer');
var ugilfy = require('gulp-uglify');
var Combine = require('stream-combiner');

gulp.task('bulkify', function() {
    var bundleStream = browserify({
        entries: entry
    });
    var combined = new Combine(
        bundleStream
        .bundle()
        .pipe(source(output_filename))
        .pipe(buffer())
        .pipe(ugilfy())
        .pipe(gulp.dest(output_path)));

    combined.on('error', function(err) {
        console.error(err.message)
    });

    return combined;
});