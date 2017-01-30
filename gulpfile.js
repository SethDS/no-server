var gulp = require('gulp')
    , concat = require('gulp-concat')
    , sass = require('gulp-sass')
    , sourcemaps = require('gulp-sourcemaps')
    , print = require('gulp-print')
    , babel = require('gulp-babel');

var Cachebuster = require('gulp-cachebust');
var cachebust = new Cachebuster();

gulp.task('build-css', function(){
   return gulp.src('./css/*') //grab every file in the folder with *
       .pipe(sourcemaps.init()) //take sourcefiles as is, create a map for the browser
       .pipe(sass()) //pipe means take the results of the previous lines and feed it into the next line
       .pipe(cachebust.resources()) //
       .pipe(concat('styles.css')) //mash the cache into one css file
       .pipe(sourcemaps.write('/'))
       .pipe(gulp.dest('./dist/css'))
});

  gulp.task('build-js', function() {
   return gulp.src('js/**/*.js')
  .pipe(sourcemaps.init())
  .pipe(print())
  .pipe(babel({ presets: ['es2015'] }))
  .pipe(concat('bundle.js'))
  //.pipe(uglify())
  .pipe(sourcemaps.write('/'))
  .pipe(gulp.dest('./dist/js'));
});

gulp.task('build', [ 'build-css', 'build-js'], function() {
    return gulp.src('./html/index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./html/**/*.html', './css/*.*css', './js/**/*.js'], ['build']);
});