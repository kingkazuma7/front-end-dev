const gulp = require("gulp");
const sass = require("gulp-sass");

// style.scssの監視タスクを作成する
gulp.task("default", function () {
  // ★ style.scssファイルを監視
  return gulp.watch("./src/assets/scss/**/*.scss", function () {

    return (
      gulp
        .src("./src/assets/scss/**/*.scss")
        .pipe(
          sass({
            outputStyle: "expanded"
          })
            .on("error", sass.logError)
        )
        .pipe(gulp.dest("./src/assets/css/s"))
    );
  });
});
