var gulp = require('gulp');
gulp.task('build', ['bulkify', 'browserify', 'uglify']);