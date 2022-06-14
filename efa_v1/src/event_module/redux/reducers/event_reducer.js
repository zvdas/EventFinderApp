import { CREATE_EVENT, DELETE_EVENT, RETRIEVE_EVENTS, SELECT_DATATYPE, UPDATE_EVENT } from "../actions/event_types";

export default function EventReducer(state=[], action){
    switch(action.type){
        case CREATE_EVENT:
            return [...state, action.payload]
        case RETRIEVE_EVENTS:
            return action.payload
        case UPDATE_EVENT:
            if(state.id === action.payload.id){
                return {...state, ...action.payload}
            }else{
                return state
            }
        case DELETE_EVENT:
            return action.payload
        case SELECT_DATATYPE:
            return action.payload
        default:
            return state
    }
}