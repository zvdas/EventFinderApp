import { CREATE_EVENT, DELETE_EVENT, RETRIEVE_EVENTS, UPDATE_EVENT } from "../actions/event_types";

export const eventReducer = (events=[], action) => {
    const {type, payload} = action;
    switch(type){
        case CREATE_EVENT:
            return [...events, payload]
        case RETRIEVE_EVENTS:
            return payload
        case UPDATE_EVENT:
            return events.map((event) => {
                if(event.id === payload.id)
                    return [...event,...payload]
                else
                    return event
            })
        case DELETE_EVENT:
            return events.filter(({id}) => id !== payload.id);
        default:
            return events
    }
}