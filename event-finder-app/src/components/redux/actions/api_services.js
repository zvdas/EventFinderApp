import axios from "axios";
import { getAllEvents, getById, addOne } from "./api_methods";

const url = process.env.REACT_APP_API_URL_TEST;
const url_API = process.env.REACT_APP_API_URL;
// const url_id = url = `${process.env.REACT_APP_API_URL_TEST}/${id}`;


/* Get All entries from API */
export const getAllFromAPI = () => {
    return (dispatch) => {
        return axios.get(url_API)
            .then(response => {
                dispatch(getAllEvents(response.data))
            })
            .catch(error => {
                throw(error)
            })
    }
}

/* Get One entry from API By ID */
/*
export const getByIdFromAPI = (id) => {
    return (dispatch) => {
        console.log(url_id)
        return axios.get(url_id)
            .then(response => {
                dispatch(getById(response.data))
            })
            .then(result=>result.json())
            .catch(error => {
                throw(error)
            })
    }
}
*/

/* Post entry to API */
export function postToAPI(eid, ename, elocation, edate) {
    let event = {eid, ename, elocation, edate}
    return (dispatch) => {
        console.log(event)
        return axios.post(url_API, event)
            .then(response => {
                dispatch(addOne(response.data))
            })
            .catch(error => {
                throw(error)
            })
    }
}