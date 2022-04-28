import { CREATE_EVENT, DELETE_EVENT, RETRIEVE_EVENTS, SELECT_DATATYPE, UPDATE_EVENT } from "../actions/event_types";

export default function EventReducer(state=[], action){
    switch(action.type){
        case CREATE_EVENT:
            return [...state, action.payload]
        case RETRIEVE_EVENTS:
            console.log("in event reducer retreive events:",action.payload)
            return action.payload
        case UPDATE_EVENT:
            return action
        case DELETE_EVENT:
            return action
        case SELECT_DATATYPE:
            return action.payload
        default:
            return state
    }
}