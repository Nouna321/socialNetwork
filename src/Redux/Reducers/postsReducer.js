import { GET_POST, SUBMIT_POST, DELETE_POST, SUBMIT_COMMENT, CLEAN_POSTS, COMMENT_POST, UPLOADING_IMAGE_SUCESS, UPLOADING_IMAGE } from '../types'

const initialState = {
    posts: [],
    image: '',
}

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_POST:
            console.log(state.posts)
            state.posts.unshift(action.payload)
            return { ...state }
        case CLEAN_POSTS:
            return { ...initialState }
        case GET_POST:
            console.log(action.payload)
            return { ...state, posts: action.payload }
        case DELETE_POST:
            state.posts.push(action.payload)
            return { ...state }
        case SUBMIT_COMMENT:
            let index = state.posts.findIndex((post) => post.postId === action.payload.post)
            console.log(i)
            state.posts[index].comments.unshift(action.payload)
            state.posts[index].commentCount = state.posts[index].commentCount + 1
            return { ...state }
        case COMMENT_POST:
            let i = state.posts.findIndex((post) => post.postId === action.payload.post)
            state.posts[i].comments = []
            state.posts[i].comments = action.payload.comments
            return { ...state }
        case UPLOADING_IMAGE_SUCESS:
            console.log(action.payload)
            return {
                ...state,
                image: action.payload,
            }
        case UPLOADING_IMAGE:
            return {
                ...state,
                loading: true,
            }

        default:
            return state
    }
}
