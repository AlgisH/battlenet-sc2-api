const API = require('./APIs')
const ax = require('./utils/axios')
const axios = require('axios')

let API_KEY

module.exports = {
	init: (apiKey) => {
		API_KEY = apiKey
		API.init(API_KEY)
	},

	...API
}