import app from "../configurations/firebase-config";
import { getFirestore } from '@firebase/firestore';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";

const db = getFirestore(app)

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

export default new EventServices();