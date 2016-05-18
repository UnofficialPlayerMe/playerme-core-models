var gulp     = require('gulp');
var path     = require('path');
var webpack  = require('webpack-stream');
var minify   = require('gulp-minify');
var jsdoc    = require('gulp-jsdoc3');
var notifier = require('node-notifier');
var karma    = require('karma');

//////////////////////////////////////

function notify(message, title, icon){
    notifier.notify({
        title: title || '',
        message: message || '',
        icon: icon  || '',
        sound: false,
        wait: false // Wait with callback, until user action is taken against notification
    });
}

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
            "destination": "./docs/api"
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

function runKarma(callback, singleRun){
    if (!callback) throw "runKarma wasn't passed a callback";

    var karmaServer = new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: singleRun
    }, callback);

    // karmaServer.on('browser_register', function (browser)           { console.log('browser_register', { browser: browser                   }); });
    // karmaServer.on('browser_error',    function (browser, error)    { console.log('browser_error',    { browser: browser,  error: error    }); });
    // karmaServer.on('browser_start',    function (browser, info)     { console.log('browser_start',    { browser: browser,  info:  info     }); });
    // karmaServer.on('browser_complete', function (browser, result)   { console.log('browser_complete', { browser: browser,  result:result   }); });
    // karmaServer.on('browsers_change',  function (browsers)          { console.log('browsers_change',  { browsers:browsers                  }); });
    // karmaServer.on('run_start',        function (browsers)          { console.log('run_start',        { browsers:browsers                  }); });
    // karmaServer.on('run_complete',     function (browsers, results) { console.log('run_complete',     { browsers:browsers, results:results }); });

    var karmaIcon = path.join(__dirname, 'node_modules', 'karma/static', 'favicon.ico');

    if (singleRun) {
        karmaServer.on('run_start', function (browsers) {
            notify("Running...", "Karma", karmaIcon);
        });
    }
    karmaServer.on('run_complete', function (browsers, results) {
        var numSuccess   = results.success;
        var numFailed    = results.failed;
        var numTotal     = numSuccess + numFailed;
        var error        = results.error;
        var disconnected = results.disconnected;
        var exitCode     = results.exitCode;

        if (error)        return notify("Error", "Karma", karmaIcon);
        if (disconnected) return notify("Disconnected", "Karma", karmaIcon);
        if (numFailed)    return notify("Failed "+numFailed+"/"+numTotal, "Karma", karmaIcon);
        if (numSuccess)   return notify("Success "+numSuccess+"/"+numTotal, "Karma", karmaIcon);
        if (!numTotal)    return notify("No tests ran", "Karma", karmaIcon);
                          return notify("Unhandled ending with exit code "+exitCode, "Karma", karmaIcon);
    });

    karmaServer.start();
}

gulp.task('test', function (done) {
    runKarma(done, true);
});
gulp.task('tdd', function (done) {
    runKarma(done, false);
});

gulp.task('lint', function () {
    // TODO lint

});
