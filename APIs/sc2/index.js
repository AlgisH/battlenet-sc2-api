const profile = require('./profile')
const ladders = require('./ladders')
const resources = require('./resources')

let configs = {}
const defaults = {
	api_base: 'api.battle.net/sc2',
	server: 'eu',
}

// Pass configs to all modules
const initModules = (axios, params) => {
	profile.init(axios, params)
	ladders.init(axios, params)
}

module.exports = {
	init: (axios, params = {}) => {
		configs = { ...defaults, ...params }
		configs.baseUrl = `https://${configs.server}.${configs.api_base}`
		initModules(axios, configs)
	},

	profile,
	ladders,
	resources,
}

