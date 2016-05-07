var apis = require('../../apis');
var mock = require('../../mock');
var configs = require('../../configs/config'),
	env = configs.env;
	config = configs[env];

module.exports = function *index(next) {
	//debug模式下，可以本地mock数据
	if(env == 'debug'){
		return yield this.render('index/page', {
			title: '首页',
			data: mock.indexData
		});	
	}
	
	var data  = yield apis.get({ url: '/home' });
	yield this.render('index/page', {
		title: '首页',
		data: data
	});
}
