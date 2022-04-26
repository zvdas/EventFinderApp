import { CREATE_EVENT, DELETE_EVENT, RETRIEVE_EVENTS, UPDATE_EVENT } from "../actions/event_types";

export default function EventReducer(state=[], action){
    switch(action.type){
        case CREATE_EVENT:
            return [...state, action.payload]
        case RETRIEVE_EVENTS:
            return action.payload
        case UPDATE_EVENT:
            return action
        case DELETE_EVENT:
            return action
        default:
            return state
    }
}