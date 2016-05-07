var apis = require('../../apis');
var mock = require('../../mock');
var configs = require('../../configs/config'),
	env = configs.env;
	config = configs[env];

module.exports = {
	
	index: function *(next) {
		//debug模式下，可以本地mock数据
		if(env == 'debug'){
			return yield this.render('test/page', {
				title: '测试',
				data: mock.testIndexData
			});
		}
		
		// var data  = yield apis.get({ url: '/home' });
		// yield this.render('test/page', {'title': 'I am list of index'});
	},

	list: function *(next){
		yield this.render('test/page', {'title': 'I am list'});
	}
}
