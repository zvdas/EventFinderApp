import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { getAuth, onAuthStateChanged } from "firebase/auth"; 
import combineReducers from "./reducers/combine_reducer";
import { retrieveEvents } from "./actions/event/event_actions";
import app from "../configurations/firebase-config";

export const store = createStore(combineReducers, applyMiddleware(thunk));

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if(user){
        store.dispatch(retrieveEvents())
    }else{
        console.log('user not logged in')
    }
})

store.subscribe(()=>console.log("in store state:", store.getState()));