import EventServices from "../../services/event-services"
import { CREATE_EVENT, DELETE_EVENT, RETRIEVE_EVENTS, UPDATE_EVENT } from "./event_types";

function dispatchPayload(dtype, dpayload) {
    try {
        return (dispatch) => {
            return dispatch({
                type : dtype,
                payload : dpayload
            })
        }
    }
    catch (err){
        return err
    }
}

export const createEvent = (events) => {
    console.log("in event actions : ", events)
    let result = EventServices.create({events});
    console.log("result : ", result.data)
    dispatchPayload(CREATE_EVENT, result.data)
}

export const retrieveEvents = () => {
    let result = EventServices.getAll();
    dispatchPayload(RETRIEVE_EVENTS, result.data)
}

export const updateEvent = (id, data) => {
    let result = EventServices.update(id, data);
    dispatchPayload(UPDATE_EVENT, result.data)
}

export const deleteEvent = (id) => {
    let result = EventServices.delete(id);
    dispatchPayload(DELETE_EVENT, result.data)
}

export const findEventByDate = (date) => {
    let result = EventServices.findByDate(date);
    dispatchPayload(RETRIEVE_EVENTS, result.data)
} 

export const findEventByVenue = (venue) => {
    let result = EventServices.findByVenue(venue);
    dispatchPayload(RETRIEVE_EVENTS, result.data)
}