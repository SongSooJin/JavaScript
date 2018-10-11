const gulp = require("gulp");
const babel = require("gulp-babel");
// require("gulp-babel");
// "gulp-babel" 이라는 문자열로 노드가 서비스를 제공하거나 (노드는 지원하지 않음)
// node_modules 폴더 밑에 해당 프로그램이 존재해야 한다.
// npm i gulp-babel --save-dev 설치 
gulp.task("default", function() {
  
  // /** 하부폴더 /* .js의 폴더 모두다 
  gulp.src("es6/**/*.js").pipe(babel()).pipe(gulp.dest("dist"));
  
  gulp.src("public/es6/**/*.js").pipe(babel()).pipe(gulp.dest("dist"));
});