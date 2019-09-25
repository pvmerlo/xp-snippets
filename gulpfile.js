const del = require("del"),
  gulp = require("gulp"),
  merge = require("gulp-merge-json"),
  gulpSequence = require("gulp-sequence");

function clean() {
  return del("snippets/snippets.json");
}

function combine() {
  return gulp
    .src("src/**/*.json")
    .pipe(
      merge({
        fileName: "snippets.json"
      })
    )
    .pipe(gulp.dest("./snippets"));
}

gulp.task(
  "default",
  gulp.series(clean, gulp.parallel(combine), function(done) {
    done();
  })
);
