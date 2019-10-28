import {ADD_USERS,LOAD_USERS} from './types'


export const addUser = (user) => {
    return {
        type: ADD_USERS,
        payload: user
    }
}

export const loadUsers = (user) => {
    return{
        type: LOAD_USERS,
        payload: user
    }
};
