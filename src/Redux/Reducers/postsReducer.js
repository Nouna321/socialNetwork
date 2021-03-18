import { GET_POST, SUBMIT_POST, DELETE_POST, SUBMIT_COMMENT } from '../types'

const initialState = {
    posts: [],
}

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_POST:
            state.posts.unshift(action.payload)
            return { ...state }
        case GET_POST:
            return { ...state,
            posts:action.payload }
        case DELETE_POST:
            state.posts.push(action.payload)
            return { ...state }
        case SUBMIT_COMMENT:
            let index = state.posts.findIndex((post) => post.postId === action.payload.postId)
            state.posts[index].comments.unshift(action.payload)
            state.posts[index].commentCount = state.posts[index].commentCount + 1
            return { ...state }

        default:
            return state
    }
}
