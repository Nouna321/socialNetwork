import { GET_POST, SUBMIT_POST, DELETE_POST } from '../types'

const initialState = {
    posts: [],
}

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_POST:
            state.posts.push(action.payload)
            return { ...state }
        case GET_POST:
            state.posts.push(action.payload)
            return { ...state }
        case DELETE_POST:
            state.posts.push(action.payload)
            return { ...state }
        default:
            return state
    }
}
