var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var streamify = require('gulp-streamify');
var globify = require('require-globify');

var paths = {
    OUT: '../dist/bundle.js',
    DEST_SRC: 'public/js',
    ENTRY_POINT: 'public/app.js',
};

gulp.task('build', function() {
    return browserify({
        entries: [paths.ENTRY_POINT],
        transform: [babelify, globify]
    })
    .bundle()
    .on('error', function(err) {
        console.log(err.stack);
        this.emit('end');
    })
    .pipe(source(paths.OUT))
    .pipe(gulp.dest(paths.DEST_SRC));
});

gulp.task('default', ['build']);