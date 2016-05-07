var path = require('path'),
	app = require('koa')(),
	routers = require('./routers'),
	staticServer = require('koa-static'),
	xtpl = require('xtpl/lib/koa');
	// views = require('koa-views'),
app.use(routers.routes());
xtpl(app, {
    //配置模板目录，指向工程的view目录
    views: path.join(__dirname, '/pages')
});

app.use(staticServer(__dirname + '/assets/pages/'));

app.listen(1111, function(){
	console.log("App is running: http://localhost:1111");
});