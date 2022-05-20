import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import combineReducers from "./reducers/combine_reducer";

export const store = createStore(combineReducers, applyMiddleware(thunk));
store.subscribe(()=>console.log("in store state:", store.getState()));