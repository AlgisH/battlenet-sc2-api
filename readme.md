# Intro
A simple wrapper for the Battle.net StarCraft 2 API.

# Setup instructions:

```sh
$ npm install battlenet-sc2-api -s
```


# Usage


```sh
const BnetApi = require('battlenet-sc2-api')
const API = new BnetApi(API_KEY)
```


# Available endpoints

**Profile API**
* API.sc2.profile.get(user_id, username [,region])
* API.sc2.profile.ladders(user_id, username [,region])
* API.sc2.profile.matchHistory(user_id, username [,region])

**Ladder API**
* API.sc2.ladders.get(ladder_id)

**Resources API**
* API.sc2.resources.achievements()
* API.sc2.resources.rewards()