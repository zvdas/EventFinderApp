/* specify action types and payloads */
import { add_one, get_all, get_by_id } from "./types";

/* Get All Data (Read) */
export const getAllEvents = (data) => {
    return {
        type : get_all,
        data
    }
};

export const getById = (data) => {
/*
    return{
        type : get_by_id,
        data
    }
*/
}

export const addOne = (data) => {
    return {
        type : add_one,
        data
    }
}

export const updateById = (data) => {}

export const deleteById = (data) => {}