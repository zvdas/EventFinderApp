import AuthServices from "../../../services/firebase_auth"
import { signUpUser, loginUser, manageUser } from './auth_methods'

export const registerAUser = (user) => {
    return (dispatch) => {
        console.log(`register user: ${JSON.stringify(user)}`)
        return AuthServices.signup({user})
            .then(response => {
                dispatch(signUpUser(response.data))
            })
            .catch(err=>{throw(err)})
    }
}

export const loginAUser = (user) => {
    return (dispatch) => {
        console.log(`login user: ${JSON.stringify(user)}`)
        return AuthServices.login({user})
            .then(response => {
                dispatch(loginUser(response.data))
            })
            .catch(err=>{throw(err)})
    }
}

export const manageAUser = (user) => {
    return (dispatch) => {
        console.log(`manage user: ${JSON.stringify(user)}`)
        return AuthServices.manage({user})
            .then(response => {
                dispatch(manageUser(response.data))
            })
            .catch(err=>{throw(err)})
    }
}