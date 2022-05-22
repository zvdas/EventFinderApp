import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { retrieveEvents } from "./actions/event_actions";
import combineReducers from "./reducers/combine_reducer";

export const store = createStore(combineReducers, applyMiddleware(thunk));
store.dispatch(retrieveEvents())
store.subscribe(()=>console.log("in store state:", store.getState()));