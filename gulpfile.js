var gulp = require('gulp');
var path = require('path');
var jsdoc = require('gulp-jsdoc3');
var babel = require('gulp-babel');

var karma = require('karma');

//////////////////////////////////////

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

gulp.task('doc', function (done) {
    gulp.src(
        ['README.md', './src/**/*.js'], {read: false}
    )
    .pipe(
        jsdoc(done)
    );
});

gulp.task('test', function (done) {
    new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('lint', function () {
    // TODO lint
});
