import { GET_POST, SUBMIT_POST, DELETE_POST, SUBMIT_COMMENT, COMMENT_POST } from '../types'
import axios from 'axios'

export const getPosts = (dispatch, user) => {
    axios
        .post(`/data/getAllPosts`, user)
        .then((res) => {
            dispatch({ type: GET_POST, payload: res.data })
        })
        .catch((err) => console.log(err))
}

export const submitPost = (post, user, dispatch) => {
    const Post = {
        username: user.credentials.username,

        body: post.body,
        image: post.image != '' ? post.image : '',
    }
    axios
        .post('/data/postUserPost', Post)
        .then((res) => {
            dispatch({ type: SUBMIT_POST, payload: res.data })
        })
        .catch((err) => console.log(err))
}

export const suppPost = (dispatch, postId) => {
    axios
        .post(`/data/suppUserPost/${postId}`)
        .then((res) => {
            dispatch({ type: DELETE_POST, payload: res.data })
        })
        .catch((err) => console.log(err))
}

export const commentOnPost = (dispatch, comment) => {
    let postId = comment.postId
    let user = {
        body: comment.body,
        username: comment.username,
        userImage: 'no',
    }
    axios
        .post(`/data/commentOnPost/${postId}`, user)
        .then((res) => {
            dispatch({ type: SUBMIT_COMMENT, payload: res.data })
        })
        .catch((err) => console.log(err))
}
export const getCommentOnPost = (dispatch, post) => {
    let id = { postId: post }
    axios
        .post('./data/getCommentOnPost', id)
        .then((res) => {
            let comments = res.data
            dispatch({ type: COMMENT_POST, payload: { comments, post } })
        })
        .catch((e) => {
            console.log(e)
        })
}
