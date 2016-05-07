module.exports = {
	env: 'debug',
	msgs: {
		systemError: '系统错误，请稍后重试！',
		paramError: '参数错误...'
	},
	debug: {
		domain: 'localhost:8000',
		prefix: {
			js: '',
			css: ''
		}
	},
	test: {
		domain: '',
		prefix: {
			js: '',
			css: ''
		}
	},
	production: {
		domain: '',
		prefix: {
			js: '',
			css: ''
		}
	}
}
