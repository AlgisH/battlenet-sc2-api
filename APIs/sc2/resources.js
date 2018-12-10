let API
let params

module.exports = {
	init: (axios, apiParams) => {
		API = axios
		params = apiParams
	},

	achievements: () => {
		return new Promise((resolve, reject) => {
			API.get(`${params.baseUrl}/data/achievements/`)
				.then(result => resolve(result.data))
				.catch(error => reject(error))
		})
	},

	rewards: () => {
		return new Promise((resolve, reject) => {
			API.get(`${params.baseUrl}/data/rewards/`)
				.then(result => resolve(result.data))
				.catch(error => reject(error))
		})
	},
}