import { CREATE_EVENT, DELETE_EVENT, RETRIEVE_EVENTS, UPDATE_EVENT } from "./event_types"

export const createAnEvent = (data) => {
    return {
        type : CREATE_EVENT,
        payload : data
    }
}

export const getAllEvents = (data) => {
    return {
        type : RETRIEVE_EVENTS,
        payload : data
    }
} 

export const getEventById = (data) => {
    return {
        type : RETRIEVE_EVENTS,
        payload : data
    }
}

export const updateEventById = (id, data) => {
    return {
        type : UPDATE_EVENT,
        payload : data
    }
}

export const deleteEventById = (id) => {
    return {
        type : DELETE_EVENT,
        payload : id
    }
}

export const getEventByDate = (date) => {
    return {
        type : RETRIEVE_EVENTS,
        payload : date
    }
}

export const getEventByVenue = (venue) => {
    return {
        type : RETRIEVE_EVENTS,
        payload : venue
    }
}