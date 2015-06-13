var gulp = require('gulp');
var awspublish = require("gulp-awspublish");
var fs = require('fs');

gulp.task('default', function() {
    var publisher = awspublish.create(JSON.parse(fs.readFileSync('.aws.json', 'utf8')));

    return gulp.src('./app/**/*')
        .pipe(publisher.publish())
        .pipe(publisher.sync())
        .pipe(awspublish.reporter());
});
