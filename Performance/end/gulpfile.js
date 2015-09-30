var gulp = require('gulp'),
	cssmin = require('gulp-cssmin'),
	jsmin = require('gulp-uglify'),
  concat = require('gulp-concat');

gulp.task('task-cssmin', function() {
  gulp.src('css/*.css')
  .pipe(cssmin())
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest("wwwroot/css"))
});

gulp.task('task-jsmin', function() {
  gulp.src('js/*.js')
  .pipe(jsmin())
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest("wwwroot/js"))
});

gulp.task("default", ['task-cssmin','task-jsmin'])