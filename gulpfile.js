var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
// var babel = require('gulp-babel');
var watch = require('gulp-watch');

var sourcesGlobs = ['src/**/*.ts', 'typings/index.d.ts'];
var tsProject = ts.createProject('tsconfig.json');

gulp.task('build', function() {
    return gulp.src(sourcesGlobs)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        // .pipe(babel({ presets: ['es2015', 'stage-0'] }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
    watch(sourcesGlobs, function() {
        gulp.start('build');
    });
});
