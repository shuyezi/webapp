## 文档说明
	
	# 页面开发目录


	# components 组件目录
		# 每个页面单独一个文件夹：page.js，page.less，page.xtpl
		# 可以随意引用沉淀的模块或者被其他模块引入

	# layouts 头部尾部目录
		# header.html/header.xtpl
		# footer.html/footer.xtpl

	# libs 库目录
		# 一般第三方的类库

	# modules 模块目录
		# js模块目录
			每个模块都会对外提供接口，如：
			module.exports = { demo: function(a){ return a*a; } }
		# less模块目录

	# pages 页面层目录
		# 每个页面单独一个文件夹：page.js，page.less，page.html；
		# 可以随意引用沉淀的模块或者被其他模块引入