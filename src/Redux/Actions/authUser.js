import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from '../types'
import axios from 'axios'

const facebook = require('./Facebook')

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI })
    axios
        .post('/users/signIn', userData)
        .then((res) => {
            setAuthorizationHeader(res.data.token)
            dispatch({ type: CLEAR_ERRORS })
            history.push('/')
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data,
            })
        })
}

export const loginGoogle = (data) => (dispatch) => {
    axios
        .post('/signGoogle', data)
        .then((res) => {
            // setAuthorizationHeader(res.data.token);
            dispatch({ type: CLEAR_ERRORS })
        })
        .catch((err) => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data,
            })
        })
}

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`
    localStorage.setItem('FBIdToken', FBIdToken)
    axios.defaults.headers.common['Authorization'] = FBIdToken
}
