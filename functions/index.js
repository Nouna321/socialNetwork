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

const { signUp, signIn, followUser, unFollow, getfollowingUsers, forgotPassword } = require('./Handlers/users')
const {
    NotifLikeData,
    getUserDetails,
    postUserPost,
    suppUserPost,
    getUserPosts,
    getUserPost,
    commentOnPost,
    getAuthenticatedUser,
    getAllPosts,
    getCommentOnPost,
    uploadImage,
    deleteImage,
    likePostUser,
} = require('./Handlers/data')

const { isAuth } = require('./Util/isAuth')

//BodyParser

app.use(bodyParser.json())
var port = process.env.PORT || 5000

// API endpoints

app.post('/users/signUp', signUp)

// app.post('/users/signIn', signIn)
//app.post('/users/forgotPassword', forgotPassword)

// app.post('/users/signGoogle', signGoogle)
app.post('/users/followUser', followUser) //en cours
app.post('/users/unFollow', unFollow) //en cours
app.post('/users/getFollowingUsers', getfollowingUsers) //en cours
app.get('/likePostUser', likePostUser)
app.get('/users/getUserDetails/:username', getUserDetails)

app.post('/data/getUserPosts', getUserPosts)
app.post('/data/getCommentOnPost', getCommentOnPost)
app.post('/data/getAllPosts', getAllPosts)
app.post('/data/commentOnPost/:postId', commentOnPost)
app.post('/data/getAuthenticatedUser', getAuthenticatedUser)

app.get('/data/getUserPost/:postId', getUserPost)
app.post('/data/postUserPost', postUserPost)
app.post('/data/suppUserPost/:postId', suppUserPost)

app.post('/uploadImage', uploadImage)
app.post('/deleteImage', deleteImage)
exports.app = functions.https.onRequest(app)
