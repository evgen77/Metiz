var gulp = require('gulp'),
 browserSync = require('browser-sync');

 function sync(done){
    browserSync.init({
        server:{
            baseDir:"./"
        }
    })
    done();
 };
 gulp.task(sync);