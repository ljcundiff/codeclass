var gulp = require('gulp');
var awspublish = require("gulp-awspublish");

gulp.task('default', function() {
    var publisher = awspublish.create({
        accessKeyId: "",
        secretAccessKey: "",
        region: "",
        params: {
            Bucket: ''
        }
    });

    return gulp.src('./src/**/*')
        .pipe(publisher.publish())
        .pipe(publisher.sync())
        .pipe(awspublish.reporter());
});
