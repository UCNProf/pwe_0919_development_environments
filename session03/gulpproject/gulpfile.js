const gulp = require('gulp');
const scss = require("gulp-scss");
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');

gulp.task("scss", () => {
  return gulp.src("./src/scss/*.scss")
    .pipe(scss({"bundleExec": false}))
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("concat", () => {
  return gulp.src('./src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('eslint', () => {
  return gulp.src(['./src/**/*.js'])
    .pipe(eslint({
      "parserOptions": { "ecmaVersion": "2018" }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

exports.build = gulp.series('eslint', 'concat', 'scss');