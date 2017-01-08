'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('test', function(){
  console.log('lets make this work huzzah');
});

gulp.task('test', function(){
  gulp.src('test/**/*.js' , {read: false})
  .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('lint', function(){
  return gulp.src(['**/*.js','!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('dev', function(){
  gulp.watch(['**/*.js','!node_modules/**'], ['test', 'lint']);
});

gulp.task('default', ['dev']);
