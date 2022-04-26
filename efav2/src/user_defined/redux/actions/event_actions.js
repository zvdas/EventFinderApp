import EventServices from "../../services/event-services"
import { createAnEvent, deleteEventById, getAllEvents, getEventByDate, getEventById, getEventByVenue, updateEventById } from "./event_methods";

export const createEvent = (events) => {
    return (dispatch) =>{
        return EventServices.create({events})
            .then(response => {
                dispatch(createAnEvent(response.data))
            })
            .catch(err=>{throw(err)})
    }
}

export const retrieveEvents = () => {
    return (dispatch) => {
        return EventServices.getAll()
            .then(response => {
                dispatch(getAllEvents(response.data))
            })
            .catch(err => {throw(err)})
    }
}

export const findEventByID = (id) => {
    return (dispatch) => {
        return EventServices.get(id)
            .then(response => {
                dispatch(getEventById(response.data))
            })
            .catch(err => {throw(err)})
    }
}

export const updateEvent = (id, data) => {
    return (dispatch) => {
        return EventServices.update(id, data)
        .then(response => {
            dispatch(updateEventById(response.data))
        })
        .catch(err => {throw(err)})
    }
}

export const deleteEvent = (id) => {
    return (dispatch) => {
        return EventServices.delete(id)
        .then(response => {
            dispatch(deleteEventById(response.data))
        })
        .catch(err => {throw(err)})
    }
}

export const findEventByDate = (date) => {
    return (dispatch) => {
        return EventServices.findByDate(date)
        .then(response => {
            dispatch(getEventByDate(response.data))
        })
        .catch(err => {throw(err)})
    }
} 

export const findEventByVenue = (venue) => {
    return (dispatch) => {
        return EventServices.findByVenue(venue)
        .then(response => {
            dispatch(getEventByVenue(response.data))
        })
        .catch(err => {throw(err)})
    }
}