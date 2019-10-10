var fileinclude = require('gulp-file-include'),
  gulp = require('gulp');
 
gulp.task('include', async function() {
  gulp.src(['src/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./html'));
});

exports.default = async function() {
    gulp.src(['src/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./html'));
}