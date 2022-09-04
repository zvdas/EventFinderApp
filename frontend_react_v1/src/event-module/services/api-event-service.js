// using Axios with JSON server APIs
import axios from 'axios'

// const url = 'http://localhost:4000/events';
const url = process.env.REACT_APP_API_URL;

class EventServices{
    create(data) {
        return axios.post(url, data.events)
    }
    getAll() {
        return axios.get(url)
    }
    get(id) {
        return axios.get(`${url}/${id}`)
    }
    update(id, data) {
        return axios.put(`${url}/${id}`, data)
    }
    delete(id) {
        return axios.delete(`${url}/${id}`)
    }
    findByDate(date) {
        return axios.get(`${url}/?edate=${date}`)
    }
    findByVenue(venue) {
        return axios.get(`${url}/?evenue=${venue}`)
    }
}