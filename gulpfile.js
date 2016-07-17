var gulp     = require('gulp');
var path     = require('path');
var webpack  = require('webpack-stream');
var minify   = require('gulp-minify');
var jsdoc    = require('gulp-jsdoc3');

var Utils = require('playerme-core-utils');
Utils.Gulp.setupNotifier(require('node-notifier'));

//////////////////////////////////////

gulp.task('default', ['lint', 'test', 'build', 'doc']);

gulp.task('build', function() {
    return gulp.src(
        'src/entry.js'
    ).pipe(
        webpack({
            output: {
                filename: 'playerme.models.js',
                library: ['PlayerMe', 'models']
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
    var config = {
        "tags": {
            "allowUnknownTags": true
        },
        "source": {
            "excludePattern": "(^|\\/|\\\\)_"
        },
        "opts": {
            "destination": "./docs/models"
        },
        "plugins": [
            "plugins/markdown"
        ],
        "templates": {
            "cleverLinks": false,
            "monospaceLinks": false,
            "default": {
                "outputSourceFiles": true
            },
            "path": "ink-docstrap",
            "theme": "cerulean",
            "navType": "vertical",
            "linenums": true,
            "dateFormat": "MMMM Do YYYY, h:mm:ss a"
        }
    };
    gulp.src(
        ['README.md', './src/**/*.js'], {read: false}
    )
    .pipe(
        jsdoc(config, done)
    );
});

gulp.task('test', function (done) {
    Utils.Gulp.setupKarma(require('karma'));
    Utils.Gulp.runKarma(done, true);
});
gulp.task('tdd', function (done) {
    Utils.Gulp.setupKarma(require('karma'));
    Utils.Gulp.runKarma(done, false);
});

gulp.task('lint', function () {
    // TODO lint
});
