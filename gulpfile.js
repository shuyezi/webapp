function getArg(key) {
	var index = process.argv.indexOf(key);
	var next = process.argv[index + 1];
	return (index < 0) ? null : (!next || next[0] === "-") ? true : next;
}

var gulp = require('gulp');
var concat = require("gulp-concat");
var clean = require("gulp-clean");
var sequence = require('gulp-run-sequence');
var less = require('gulp-less');
var gIf = require('gulp-if');
var uglify = require('gulp-uglify');
var sequence = require('gulp-run-sequence');
var livereload = require('gulp-livereload');
var stripDebug = require('gulp-strip-debug');
var csso = require('gulp-csso');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var glob = require('glob');

var configs = require('./configs/gulpfile.config.js');
var env = getArg('--env');

gulp.task('clean', function(){
	return gulp.src(configs[env].releaseDir, {read:false})
		.pipe(clean({force: true}));
});

gulp.task('copy1', function(){
	return gulp.src(configs.copy1, {base: './'})
		.pipe(gulp.dest(configs[env].releaseDir));
});

gulp.task('copy2', function(){
	return gulp.src(configs.copy2, {base: './src/'})
		.pipe(gulp.dest(configs[env].releaseDir));
});

gulp.task('libsJs', function(){
	return gulp.src(configs.src.libsJs, {base: './src/'})
		.pipe(concat("libs/app.js"))
		.pipe(gIf(env == 'production', uglify()))
		.pipe(gIf(env == 'production', stripDebug()))
		.pipe(gulp.dest(configs[env].assets))
		.pipe(livereload());
});

gulp.task('libsStyle', function(){
	return gulp.src(configs.src.libsStyle, {base: './src/'})
		.pipe(less())
		.pipe(gIf(env == 'production', csso(true)))
		.pipe(gulp.dest(configs[env].assets))
		.pipe(livereload());
});

gulp.task('pagesJs', function(){
	var entrys = {};
	var _pagesJs = glob.sync(configs.src.pagesJs);
	for(var i in _pagesJs){
		var _cur = _pagesJs[i];
		entrys[_cur.substring(6, _cur.length-3)] = _cur;
	}
	return gulp.src(configs.src.pagesJs, {base: './src/'})
		.pipe(webpackStream({
			entry: entrys,
			output: {
			    filename: '[name].js'
			},
			module: {
                loaders:[{test: /\.js$/, loader:"babel-loader?presets[]=es2015"}]
            }
		}))
		.pipe(gIf(env == 'production', uglify()))
		.pipe(gIf(env == 'production', stripDebug()))
		.pipe(gulp.dest(configs[env].assets))
		.pipe(livereload());
});

gulp.task('pagesStyle', function(){
	return gulp.src(configs.src.pagesStyle, {base: './src/'})
		.pipe(less())
		.pipe(gIf(env == 'production', csso(true)))
		.pipe(gulp.dest(configs[env].assets))
		.pipe(livereload());
});

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch(configs.src.pagesJs, [ 'pagesJs' ]);
	gulp.watch(configs.src.pagesStyle, [ 'pagesStyle' ]);
	gulp.watch(configs.src.libsJs, [ 'libsJs' ]);
	gulp.watch(configs.src.libsStyle, [ 'libsStyle' ]);
});

gulp.task('build', function(cb){
	sequence('clean', ['copy1', 'copy2', 'libsStyle', 'libsJs', 'pagesStyle', 'pagesJs'], cb);
});