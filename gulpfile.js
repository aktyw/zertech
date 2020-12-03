const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const cssnano = require('cssnano');
const imagemin = require('gulp-imagemin');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require ('gulp-sourcemaps');
const terser = require('gulp-terser');

function style() {
    return gulp.src('./src/styles/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/styles/css'))
        .pipe(browserSync.stream())
}

function copyHtml() {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'))
}

function copyStyle() {
    return gulp.src('./src/styles/css/*')
        .pipe(gulp.dest('./dist/css'))
}

function imgTask() {
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/js'))
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });

    gulp.watch('./src/styles/scss/**/*.scss', style);
    gulp.watch('./src/*.html').on('change', browserSync.reload);
    gulp.watch('./src/scripts/**/*.js').on('change', browserSync.reload);
    gulp.watch('./src/*.html', copyHtml);
    gulp.watch('./src/img/*', imgTask);
    gulp.watch('./src/styles/css/*', copyStyle);
}

exports.style = style;
exports.watch = watch;
exports.imgTask = imgTask;
exports.copyHtml = copyHtml;
exports.copyStyle = copyStyle;
exports.scripts = scripts;

exports.default = gulp.series(gulp.parallel(copyHtml, style, copyStyle, imgTask, scripts), watch);