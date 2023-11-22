const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");

gulp.task("taskCSS", async () => {
  return gulp.src("./scss/main.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(rename("main.css"))
    .pipe(gulp.dest("./dist/css/"))
});

gulp.task("taskJS", async () => {
  return gulp.src("./js/**/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js/"))
})

gulp.task("watch", async () => {
  gulp.watch("./scss/**/*.scss", gulp.series("taskCSS"));
  gulp.watch("./js/**/*.js", gulp.series("taskJS"));
})