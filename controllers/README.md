## 文档说明

	# 控制器文件

	./index.js：主入口文件，通过require引入定义好的接口文件/目录。如：
	module.exports = {
		index: require('./IndexCtrl'),
		test: require('./TestCtrl')
	}

	./DemoCtrl/index.js：接口定义文件，exports定义的接口。如：
	module.exports = function *index(next) {
		var data  = yield apis.get({ url: '/demo' });
		yield this.render('demo/page', {
			title: '标题',
			data: data
		});
	}


	#不建议超过2层的文件（夹）嵌套。这样子比较好："./DemoCtrl/index.js"