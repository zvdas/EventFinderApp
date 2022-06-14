/*
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
*/

// /*
// using firestore
import db from "../../firebase-config";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";

let ecoll = collection(db, "events");

class EventServices{
    create(data) {
        return addDoc(ecoll, data.events);
    }
    getAll() {
        return getDocs(ecoll).then(response=>({data: response.docs.map(doc=>({...doc.data(), id: doc.id}))}));
    }   
    get(id) {
        return getDoc(doc(db, "events", id)).then(response=>({data:{...response.data(), id: response.id}}));
    }
    update(id, data) {
        return updateDoc(doc(db, "events", id), data);
    }
    delete(id) {
        return deleteDoc(doc(db, "events", id));
    }
    findByDate(date) {
        return getDocs(query(collection(db, "events"), where("edate", "==", date))).then(response=>({data: response.docs.map(doc=>({...doc.data(), id: doc.id}))}));
    }
    findByVenue(venue) {
        return getDocs(query(collection(db, "events"), where("evenue", "==", venue))).then(response=>({data: response.docs.map(doc=>({...doc.data(), id: doc.id}))}));
    }
}
// */

export default new EventServices();