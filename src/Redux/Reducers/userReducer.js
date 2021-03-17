import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from '../types'

const initialState = {
    authenticated: false,
    loading: false,
    credentials: {},
}
export default function (state = initialState, action) {
<<<<<<< HEAD
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        credentials:action.payload,
        authenticated: true,
        loading: false,
      };
=======
    switch (action.type) {
        case SET_USER:
            return {
                credentials: action.payload,
                authenticated: true,
                loading: false,
            }
>>>>>>> 58e15b8a7b774741c50a2a4ae2cd83958e01086d

        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                loading: false,
                errors: null,
            }

        case LOADING_UI:
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}
