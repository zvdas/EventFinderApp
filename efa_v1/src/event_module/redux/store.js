import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
// import { eventReducers } from "./reducers/event_reducer";
import combineReducers from "./reducers/combine_reducer";

// export const store = createStore(eventReducers, applyMiddleware(thunk));
export const store = createStore(combineReducers, applyMiddleware(thunk));
store.subscribe(()=>console.log("in store state:", store.getState()));