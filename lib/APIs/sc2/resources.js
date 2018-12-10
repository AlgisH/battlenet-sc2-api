"use strict";

var API = void 0;
var params = void 0;

module.exports = {
	init: function init(axios, apiParams) {
		API = axios;
		params = apiParams;
	},

	achievements: function achievements() {
		return new Promise(function (resolve, reject) {
			API.get(params.baseUrl + "/data/achievements/").then(function (result) {
				return resolve(result.data);
			}).catch(function (error) {
				return reject(error);
			});
		});
	},

	rewards: function rewards() {
		return new Promise(function (resolve, reject) {
			API.get(params.baseUrl + "/data/rewards/").then(function (result) {
				return resolve(result.data);
			}).catch(function (error) {
				return reject(error);
			});
		});
	}
};