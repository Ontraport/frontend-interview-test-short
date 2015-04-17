'use strict'

var path = require('path');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var concatCSS = require('gulp-concat-css');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var gzip = require('gulp-gzip');
var imageminOptipng = require('imagemin-optipng');

gulp.task('default');
gulp.task('build--clean', [
    'build--clean-dist'
]);
gulp.task('build--concat', [
    'build--concat-css'
]);
gulp.task('build--compress', [], function(cb) {
    runSequence(
        [
            'build--compress-html',
            'build--compress-css',
            'build--compress-js'
        ],
        'build--compress-gzip',
        'build--compress-images',
        cb
    );
});
gulp.task('build', [], function(cb) {
    runSequence(
        'build--clean',
        'build--concat',
        'build--compress',
        cb
    );
});

var dist = 'dist';
var bundles = 'bundles';
var images = 'images';

// Clear the distribution directory in case files/folders were removed from last build.
gulp.task('build--clean-dist', [], function() {
    return gulp.src([
            dist
        ], {
            read: false
        })
        .pipe(clean())
        .pipe(gulp.dest('./'));
});

// Minify JS with source maps and generate source maps.
gulp.task('build--compress-js', [], function() {
    return gulp.src([
            './app.js'
        ])
        .pipe(uglify())
        .pipe(gulp.dest(dist));
});

// Minify CSS.
gulp.task('build--compress-css', [], function() {
    return gulp.src([
            path.join(bundles, '**', '*.css')
        ])
        .pipe(minifyCSS())
        .pipe(gulp.dest(path.join(dist, bundles)));
});

// Minify HTML
gulp.task('build--compress-html', [], function() {
    return gulp.src([
            './index.html'
        ])
        .pipe(minifyHTML({
            conditionals: true,
            spare: true
        }))
        .pipe(gulp.dest(dist));
});

// Concat CSS
gulp.task('build--concat-css', [], function() {
    return gulp.src([
            './normalize.css',
            './styles.css'
        ])
        .pipe(concatCSS('bundle.css'))
        .pipe(gulp.dest(bundles));
});

// Image compression. 
// TODO: Need to revisit this due to error on file blob.
// Tried with imagemin and the optipng plugin
gulp.task('build--compress-images', [], function() {
    return gulp.src([
            path.join(images, '**', '*.{png,jpg,jpeg,gif,svg}')
        ])
        .pipe(imageminOptipng({
            optimizationLevel: 2
        })())
        .pipe(gulp.dest(path.join(dist, images)));
});

gulp.task('build--compress-gzip', [], function() {
    return gulp.src(
            path.join(dist, '**', '*.{html,xml,json,css,js}')
        )
        .pipe(gzip({
            append: true,
            threshold: false
        }))
        .pipe(gulp.dest(dist));
});
