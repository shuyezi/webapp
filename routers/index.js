var path = require('path');
var routers = require('koa-router')();
var controllers = require(path.join(__dirname, '../controllers'));

module.exports = routers
	.get('/', controllers.index)
	.get('/test', controllers.test.index)
	.get('/test/list', controllers.test.list);