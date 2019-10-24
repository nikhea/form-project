import {ADD_USERS } from './types'


export const addUser = (user) => {
    return {
        type: ADD_USERS,
        payload: user
    }
}