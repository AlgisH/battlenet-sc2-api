const axios = require('axios')
let configs = {}

const buildQueryString = (params = {}) => {
	const obj = { ...configs, ...params }
	const keyValue = Object.keys(obj).map(key => {
		return `${key}=${obj[key]}`
	})
	return keyValue.join('&')
}

module.exports = {
	setDefaultParams: (params) => {
		configs = { ...params }
	},

	get: (url, params = {}) => {
		const query = params != {} ? `?${buildQueryString(params)}` : ''
		return axios.get(`${url}${query}`)
	}
}