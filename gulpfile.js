var gulp = require('gulp');
var jsdoc = require('gulp-jsdoc3');

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('doc', function (cb) {
    gulp.src(['README.md', './src/**/*.js'], {read: false})
        .pipe(jsdoc(cb));
});
