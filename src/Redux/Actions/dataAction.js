import { UPLOADING_IMAGE, UPLOADING_IMAGE_SUCESS, DELETE_IMAGE,SUGGEST_USERS } from '../types'
import axios from 'axios'

export const UploadImagePost = (dispatch, image) => {
    dispatch({ type: UPLOADING_IMAGE })
    axios
        .post('/uploadImage', image)
        .then((res) => {
            console.log(res.data)
            dispatch({ type: UPLOADING_IMAGE_SUCESS, payload: res.data })
        })
        .catch((err) => console.log(err))
}

export const DeleteImagePost = (dispatch) => {

    axios
        .post('/deleteImage')
        .then(() => {
            dispatch({ type: DELETE_IMAGE })
        })
        .catch((err) => console.log(err))
}

export const getSuggestedUsers=(dispatch,user) => {
   console.log("test")
    axios.post("/users/getSuggestedUsers",user).then((res) => {
        console.log(res.data)
        dispatch({type:SUGGEST_USERS ,payload:res.data})
    })
}

