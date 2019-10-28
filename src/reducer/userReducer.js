import {ADD_USERS, LOAD_USERS} from '../actions/types'
import uuid from 'uuid'

export const initialState = {
    users: [
        // {    
        //     id:         uuid.v4(),
        //     FirstName: 'imonikhea',
        //     LastName: 'ugbodaga',
        //     Birthday: '10/10/1997',
        //     Age: 29,
        //     Hobby: 'runing'
        // }
        ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                users:action.payload
        }
            
        case ADD_USERS:
            return {
                ...state,
                users : action.payload
            }
        default:
            return state
    }
}
