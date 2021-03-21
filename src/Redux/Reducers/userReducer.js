import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI,LOADING_USER,LOGOUT_USER, SET_ONLINE_USERS,NO_ONLINE_USERS } from '../types'

const initialState = {
    authenticated: false,
    loading: null,
    credentials: {},
    OnlineUsers:[],
}
export default function (state = initialState, action) {

    switch (action.type) {
        case LOADING_USER:
            return {
                ...state,
                loading:true,
            }
        case SET_ONLINE_USERS:
                return {
                     ...state,
                    OnlineUsers:action.payload,
                }
        case NO_ONLINE_USERS:
            return {
                ...state,
            
            }
            case LOGOUT_USER:
            return {
                ...initialState
            }
        case SET_USER:
            
            return {
                credentials: action.payload.credentials,
                loading: false,
                authenticated: true,
                
            }
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
