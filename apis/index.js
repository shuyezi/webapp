var request = require('koa-request');
var path = require('path');
var configs = require('../configs/config'),
	config = configs[configs.env];
var domain = configs.domain;
domain = 'http://www.dingzhanghe.com';

module.exports = {

	get: function *(opts){
		var opt = {
	    	url: domain + config.url,
	    	data: opts && opts.data || {},
		    headers: { 'User-Agent': 'request' },
		    json: true,
	        timeout: 3000
		};
		var response = yield request(opt);
		if (response.body.ok == 1) return response.body.obj;
		console.log(response.body.msg);
		return false;
	},

	users: require('./users')

}
