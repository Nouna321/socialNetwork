const firebase = require('firebase')
const config = {
    apiKey: 'AIzaSyBcqeSuB597caBtPUdC0uzYf0-Xpu0xErw',
    authDomain: 'bddsocialnetwork.firebaseapp.com',
    projectId: 'bddsocialnetwork',
    storageBucket: 'bddsocialnetwork.appspot.com',
    messagingSenderId: '1053211324822',
    appId: '1:1053211324822:web:db11d9200a7b1765632db7',
    measurementId: 'G-7L4XG2BW39',
}
const fire = firebase.default.initializeApp(config)
const auth = firebase.default.auth()

module.exports = { fire, auth }
