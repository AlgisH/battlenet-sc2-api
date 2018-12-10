const API = require('./APIs')
const ax = require('./utils/axios')
const axios = require('axios')

class BnetApi {

	constructor(apiKey) {
		if (!apiKey)
			throw new Error('No API key provided !')

		const modules = API.init(apiKey)

		// Find better way to dynamically add modules
		this.sc2 = modules.sc2
	}

}


module.exports = BnetApi