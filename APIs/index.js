const axios = require('../utils/axios')
const sc2 = require('./sc2')

let configs = {}

const initModules = (ax) => {
	sc2.init(ax)
}

module.exports = {
	init: (API_KEY, LOCALE='en_GB') => {
		configs = {
			apikey: API_KEY,
			locale: LOCALE,
		}

		axios.setDefaultParams(configs)

		initModules(axios)

		return {
			sc2
		}
	},
}

