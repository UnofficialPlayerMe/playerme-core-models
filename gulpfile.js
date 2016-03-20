var gulp = require('gulp');
var path = require('path');
var jsdoc = require('gulp-jsdoc3');
var babel = require('gulp-babel');

gulp.task('default', function() {
    return gulp.src(
        path.join('src/**/*.js')
    )
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(
        gulp.dest('dist')
    );
});

gulp.task('doc', function (cb) {
    gulp.src(['README.md', './src/**/*.js'], {read: false})
        .pipe(jsdoc(cb));
});
