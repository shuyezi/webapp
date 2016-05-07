module.exports = {
	copy1: [
		'./configs/**/*', 
		'./routers/**/*', 
		'./apis/**/*', 
		'./servers/**/*', 
		'./controllers/**/*', 
		'./mock/**/*', 
		'./app.js',
		'!./configs/gulpfile.config.js'
	],
	copy2: ['./src/pages/**/*.xtpl', './src/layouts/**.xtpl'],
	src: {
		libsJs: './src/libs/**/*.js',
		libsStyle: './src/libs/**/*.less',
		pagesJs: './src/pages/**/page.js',
		pagesStyle: './src/pages/**/page.less'
	},
	debug: {
		releaseDir: 'release_debug/',
		assets: 'release_debug/assets/'
	},
	test: {
		releaseDir: 'release_test/',
		assets: 'release_test/assets/'
	},
	production: {
		releaseDir: 'release/',
		assets: 'release/assets/'
	}
}