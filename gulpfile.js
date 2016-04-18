var gulp    = require('gulp');
var path    = require('path');
var webpack = require('webpack-stream');
var minify  = require('gulp-minify');
var jsdoc   = require('gulp-jsdoc3');
var karma   = require('karma');

//////////////////////////////////////

gulp.task('default', ['build', 'doc']);

gulp.task('build', function() {
    return gulp.src(
        'src/entry.js'
    ).pipe(
        webpack({
            output: {
                filename: 'upa.models.js',
                library: ['UPA', 'models']
            },
            module: {
                loaders: [
                    {test: /\.js$/, loader: 'babel'}
                ]
            }
        })
    )
    .pipe(
        minify()
    )
    .pipe(
        gulp.dest('dist/')
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
