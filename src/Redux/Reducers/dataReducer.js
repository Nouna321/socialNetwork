import { SUGGEST_USERS,SEND_FOLLOW_REQUEST,SET_FOLLOW_REQUESTS,DECLINE_REQUEST,SET_FOLLOWER, ACCEPT_FOLLOW_REQUEST} from '../types'

const initialState={
    suggestedUsers:[],
    invitations:[],
    notif:[],
}

export default function dataReducer (state = initialState, action) {
    switch (action.type) {
        case SUGGEST_USERS:
            
            return { ...state,
            suggestedUsers:action.payload }
        
         case ACCEPT_FOLLOW_REQUEST:
            const index=state.invitations.findIndex((invit) => invit.Owner === action.payload)
            state.invitations.splice(index,1)
            return { ...state }
        
        case SEND_FOLLOW_REQUEST:
            const i=state.suggestedUsers.findIndex((user) => user.username === action.payload)
            console.log(i)
            if(i !=-1){
                state.suggestedUsers.splice(i,1)
            }
                return { ...state}

         case DECLINE_REQUEST:
            const ind=state.invitations.findIndex((invit) => invit.Owner === action.payload)
            state.invitations.splice(ind,1) 
                    return { ...state,
                    suggestedUsers:action.payload }

        case SET_FOLLOW_REQUESTS:
                    
            return { ...state,
             invitations:action.payload }
         

        default:
            return state;
    }
}