import { CREATE_PAGE, SET_PAGE } from '../types'

const initialState = {
    page: null,
}

export default function pageReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_PAGE:
            return {
                ...state,
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.payload,
            }
        default:
            return state
    }
}
