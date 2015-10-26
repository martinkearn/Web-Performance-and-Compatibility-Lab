var gulp = require('gulp'),
	cssmin = require('gulp-minify-css'),
	jsmin = require('gulp-uglify');

gulp.task('task-cssmin', function() {
  gulp.src('css/*.css')
  .pipe(cssmin())
  .pipe(gulp.dest("wwwroot/css"))
});

gulp.task('task-jsmin', function() {
  gulp.src('js/*.js')
  .pipe(jsmin())
  .pipe(gulp.dest("wwwroot/js"))
});

gulp.task("default", ['task-cssmin','task-jsmin'])