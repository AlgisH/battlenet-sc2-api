let API
let params

module.exports = {
	init: (axios, apiParams) => {
		API = axios
		params = apiParams
	},

	get: (ladderId) => {
		return new Promise((resolve, reject) => {
			API.get(`${params.baseUrl}/ladder/${ladderId}/`)
				.then(result => resolve(result.data))
				.catch(error => reject(error))
		})
	},
}