"use strict";

var API = void 0;
var params = void 0;

module.exports = {
	init: function init(axios, apiParams) {
		API = axios;
		params = apiParams;
	},

	get: function get(userId, username) {
		var region = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

		return new Promise(function (resolve, reject) {
			API.get(params.baseUrl + "/profile/" + userId + "/" + region + "/" + username + "/").then(function (result) {
				return resolve(result.data);
			}).catch(function (error) {
				return reject(error);
			});
		});
	},

	ladders: function ladders(userId, username) {
		var region = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

		return new Promise(function (resolve, reject) {
			API.get(params.baseUrl + "/profile/" + userId + "/" + region + "/" + username + "/ladders").then(function (result) {
				return resolve(result.data);
			}).catch(function (error) {
				return reject(error);
			});
		});
	},

	matchHistory: function matchHistory(userId, username) {
		var region = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

		return new Promise(function (resolve, reject) {
			API.get(params.baseUrl + "/profile/" + userId + "/" + region + "/" + username + "/matches").then(function (result) {
				return resolve(result.data);
			}).catch(function (error) {
				return reject(error);
			});
		});
	}
};