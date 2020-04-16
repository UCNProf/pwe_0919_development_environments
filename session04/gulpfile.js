const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const spritesmith = require('gulp.spritesmith');

gulp.task('sprite1', function () {
	return gulp.src('./src/images/*.png')
		.pipe(spritesmith({
			imgName: 'images/sprite1.png',
			cssName: 'css/sprite1.css'
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('sprite2', function () {
	return gulp.src('./src/images/*.png')
		.pipe(spritesmith({
			imgName: 'images/sprite2.png',
			cssName: 'css/sprite2.css',
			cssTemplate: 'src/csstemplate.handelbars'
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('spritecss', function () {
	return gulp.src('./src/images/*.png')
		.pipe(spritesmith({
			imgName: 'images/sprite1.png',
			cssName: 'css/sprite.min.css'
		}))
		.css
		.pipe(cleanCSS(
			{compatibility: '*'} // https://github.com/jakubpawlowicz/clean-css#compatibility-modes
		)) 
		.pipe(gulp.dest('dist'));
});
