let API
let params

module.exports = {
	init: (axios, apiParams) => {
		API = axios
		params = apiParams
	},

	get: (userId, username, region = 1) => {
		return new Promise((resolve, reject) => {
			API.get(`${params.baseUrl}/profile/${userId}/${region}/${username}/`)
				.then(result => resolve(result.data))
				.catch(error => reject(error))
		})
	},

	ladders: (userId, username, region = 1) => {
		return new Promise((resolve, reject) => {
			API.get(`${params.baseUrl}/profile/${userId}/${region}/${username}/ladders`)
				.then(result => resolve(result.data))
				.catch(error => reject(error))
		})
	},

	matchHistory: (userId, username, region = 1) => {
		return new Promise((resolve, reject) => {
			API.get(`${params.baseUrl}/profile/${userId}/${region}/${username}/matches`)
				.then(result => resolve(result.data))
				.catch(error => reject(error))
		})
	},
}