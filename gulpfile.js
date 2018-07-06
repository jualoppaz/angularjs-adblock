var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var strip = require('gulp-strip-comments');


gulp.task('js', function () {
   return gulp.src('./src/detect-adblock.js')
   .pipe(strip())
   .pipe(gulp.dest('./dist/'));

});

gulp.task('less', function () {
    return gulp.src('./src/*.less')
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(gulp.dest('./dist/'));
  });