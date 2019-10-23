import { GET_USERS, ADD_USERS } from './types'

export const getUser = () => {
    return{
        type: GET_USERS
    }
}

export const addUser = (user) => {
    return {
        type: ADD_USERS,
        payload: user
    }
}