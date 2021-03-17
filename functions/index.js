const functions = require('firebase-functions')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

//CORS request

app.use(
    cors({
        origin: true,
    })
)

<<<<<<< HEAD
const { signUp, signIn, followUser, unFollow, getfollowingUsers } = require('./Handlers/users')
const { NotifLikeData, getUserDetails, postUserPost, suppUserPost, getUserPost, getUserPosts, getAuthenticatedUser } = require('./Handlers/data')
=======
const { signUp, signIn, followUser, unFollow, getfollowingUsers, forgotPassword } = require('./Handlers/users')
const { NotifLikeData, getUserDetails, postUserPost, suppUserPost, getUserPost, commentOnPost } = require('./Handlers/data')
>>>>>>> 58e15b8a7b774741c50a2a4ae2cd83958e01086d

const { isAuth } = require('./Util/isAuth')

//BodyParser

app.use(bodyParser.json())
var port = process.env.PORT || 5000

// API endpoints

app.post('/users/signUp', signUp)

// app.post('/users/signIn', signIn)
app.post('/users/forgotPassword', forgotPassword)

// app.post('/users/signGoogle', signGoogle)
app.post('/users/followUser', followUser) //en cours
app.post('/users/unFollow', unFollow) //en cours
app.post('/users/getFollowingUsers', getfollowingUsers) //en cours
app.get('/users/NotifLikeData', NotifLikeData)
app.get('/users/getUserDetails/:username', getUserDetails)


// app.get('/data/getUserPosts', getUserPosts)
app.post('/data/commentOnPost/:postId', commentOnPost)

app.get('/data/getUserPost/:postId', getUserPost)
app.post('/data/postUserPost', postUserPost)
app.post('/data/suppUserPost/:postId', suppUserPost)
exports.app = functions.https.onRequest(app)
