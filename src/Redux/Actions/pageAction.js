import { CREATE_PAGE, SET_PAGE, DELETE_PAGE } from '../types'
import axios from 'axios'

export const CreatePages = (Page, history, dispatch) => {
    console.log(Page)
    axios
        .post('/page/postPages', Page)
        .then((res) => {
            dispatch({ type: CREATE_PAGE })
            history.push('/page', res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const getPagedetails = (dispatch, pageId) => {
    console.log(pageId)
    axios
        .get(`/page/getPages/${pageId}`)
        .then((res) => {
            dispatch({ type: SET_PAGE, payload: res.data })
        })
        .catch((err) => {
            console.log(err)
        })
}

export const DeletePage = (dispatch, pagesId) => {
    axios
        .post(`/data/suppUserPost/${pagesId}`)
        .then((res) => {
            dispatch({ type: DELETE_PAGE, payload: pagesId })
        })
        .catch((err) => console.log(err))
}
