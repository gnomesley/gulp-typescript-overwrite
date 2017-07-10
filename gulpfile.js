var gulp = require("gulp");
var typescript = require("gulp-typescript");

var project = typescript.createProject("tsconfig.json", {module: "amd"});

gulp.task("default", function ()
{
    return gulp.src("src/*.ts")
               .pipe(project())
               .pipe(gulp.dest("dist"));
});