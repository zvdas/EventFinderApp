import { SIGNUP_USER, LOGIN_USER, MANAGE_USER } from './auth_types'

export const signUpUser = (data) => {
    return {
        type: SIGNUP_USER,
        payload: data
    }
}

export const loginUser = (data) => {
    return {
        type: LOGIN_USER,
        payload: data
    }
}

export const manageUser = (data) => {
    return {
        type: MANAGE_USER,
        payload: data
    }
}