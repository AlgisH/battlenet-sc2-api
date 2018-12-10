'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var profile = require('./profile');
var ladders = require('./ladders');
var resources = require('./resources');

var configs = {};
var defaults = {
	api_base: 'api.battle.net/sc2',
	server: 'eu'

	// Pass configs to all modules
};var initModules = function initModules(axios, params) {
	profile.init(axios, params);
	ladders.init(axios, params);
};

module.exports = {
	init: function init(axios) {
		var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		configs = _extends({}, defaults, params);
		configs.baseUrl = 'https://' + configs.server + '.' + configs.api_base;
		initModules(axios, configs);
	},

	profile: profile,
	ladders: ladders,
	resources: resources
};