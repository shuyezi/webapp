## 文档说明

	# 数据接口文件

	./index.js：主入口文件，通过require引入定义好的接口文件/目录。如：
	module.exports = {
		demo: require('./demo')
	}

	./demo/index.js：接口定义文件，exports定义的接口。如：
	module.exports = {
		demo: "demo文案"
	}

	#不建议超过2层的文件（夹）嵌套。这样子比较好："./demo/index.js"