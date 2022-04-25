import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
// import combineReducers from "./reducers/combined_reducer";
import { eventReducer } from "./reducers/event_reducers";

export const store = createStore(eventReducer, applyMiddleware(thunk));