var msgs = require('../configs/config').msgs;
module.exports = {

	/**
	 ** @name cookie控制
	 ** @params
	 **		config {object}
	 **			name	{string}		cookie名称		[required]
	 **			value	{string}		cookie值
	 **			time    {int}			cookie过期时间，单位：天；默认10天
	 ** @useage
	 **		只传name参数时，视为获取对应cookie的值
	 **		即传name参数又传value参数视为设置对应的cookie
	 **		清楚cookie时，time可传-1
	*/
	cookie: function (config) {
		//cookie的名称是必选项
		if((config && !config.name) || !config) throw new Error(msgs.paramError);
        if(config.value){
        	//获取cookie
        	if (document.cookie.length > 0) {
        		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        		if (arr = document.cookie.match(reg)) {
                    return decodeURIComponent(arr[2]);
                } else {
                    return null;
                }
        	}
        }else{
        	//设置cookie
        	var time = config.time || 10;
	        var expires = new Date();
	        expires.setTime(expires.getTime() + time * 24 * 3600 * 1000);
        	document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + expires.toGMTString();
        }
    }
}