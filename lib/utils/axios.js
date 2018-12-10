'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var axios = require('axios');
var configs = {};

var buildQueryString = function buildQueryString() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	var obj = _extends({}, configs, params);
	var keyValue = Object.keys(obj).map(function (key) {
		return key + '=' + obj[key];
	});
	return keyValue.join('&');
};

module.exports = {
	setDefaultParams: function setDefaultParams(params) {
		configs = _extends({}, params);
	},

	get: function get(url) {
		var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		var query = params != {} ? '?' + buildQueryString(params) : '';
		return axios.get('' + url + query);
	}
};