let API
let params

module.exports = {
	init: (axios, apiParams) => {
		API = axios
		params = apiParams
	},

	get: (ladderId) => {
		return API.get(`${params.baseUrl}/ladder/${ladderId}/`)
	},
}