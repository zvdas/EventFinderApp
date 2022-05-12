import { add_one, delete_by_id, get_all, get_by_id, update_by_id } from "../actions/types";

export default function rootReducer(state=[],action){
    switch(action.type){
        case get_all:
            return action.data
        case get_by_id:
            return action.data
        case add_one:
            return [...state, action.data]
        case update_by_id:
            return action.data
        case delete_by_id:
            return action.data
        default:
            return state
    }
}