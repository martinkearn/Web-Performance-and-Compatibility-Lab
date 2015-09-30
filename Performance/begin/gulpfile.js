var gulp = require('gulp'), 
min = require('gulp-cssmin') ; 

gulp.task('hello', function() { 
	console.log("Hello World"); 
}); 

gulp.task("default", ['hello'])