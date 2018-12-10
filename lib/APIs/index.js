'use strict';

var axios = require('../utils/axios');
var sc2 = require('./sc2');

var configs = {};

var initModules = function initModules(ax) {
	sc2.init(ax);
};

module.exports = {
	init: function init(API_KEY) {
		var LOCALE = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en_GB';

		configs = {
			apikey: API_KEY,
			locale: LOCALE
		};

		axios.setDefaultParams(configs);

		initModules(axios);

		return {
			sc2: sc2
		};
	}
};