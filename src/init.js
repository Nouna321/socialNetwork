const firebase = require('firebase')
const config = require('./config')
const fire = firebase.default.initializeApp(config)
const auth = firebase.default.auth()

module.exports = { fire, auth }
