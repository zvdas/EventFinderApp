import { SIGNUP_USER, LOGIN_USER, SESSION_USER } from '../actions/event/event_types'

export default function AuthReducer(state=[], action) {
    switch(action){
        case SIGNUP_USER:
            return [...state, action.payload]
        case LOGIN_USER:
            return [...state, action.payload]
        case SESSION_USER:
            return [...state, action.payload]
        default:
            return state
    }
}