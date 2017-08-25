	var gulp = require("gulp"),
		ugligfy = require("gulp-uglify"),
		minifyCss = require("gulp-clean-css");
	
	gulp.task("uglify",function(){
		gulp.src("js/*.js")
			.pipe(uglify())
			.pipe(gulp.dest("dist/js"));
	});
