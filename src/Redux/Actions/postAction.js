import { GET_POST, SUBMIT_POST, DELETE_POST, SUBMIT_COMMENT } from '../types'
import axios from 'axios'

export const getPosts = (dispatch, postId) => {
    axios
        .get(`/data/getUserPost/${postId}`)
        .then((res) => {
            dispatch({ type: GET_POST, payload: res.data })
        })
        .catch((err) => console.log(err))
}

export const submitPost = (post, dispatch) => {
    axios
        .post('/data/postUserPost', post)
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
        username: 'Nouna',
        userImage: 'no',
    }
    axios
        .post(`/data/commentOnPost/${postId}`, user)
        .then((res) => {
            dispatch({ type: SUBMIT_COMMENT, payload: res.data })
        })
        .catch((err) => console.log(err))
}
