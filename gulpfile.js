var gulp = require('gulp');
var gulp_jspm = require('gulp-jspm');


gulp.task('default', function(){
    return gulp.src('src/main.ts')
        .pipe(gulp_jspm())
        .pipe(gulp.dest('build/'));
});


gulp.task('sourcemap', function(){
    var sourcemaps = require('gulp-sourcemaps');

    return gulp.src('src/main.ts')
        .pipe(sourcemaps.init())
        .pipe(gulp_jspm())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/'));
});