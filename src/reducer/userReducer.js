import {GET_USERS, ADD_USERS} from '../actions/types'


export const initialState = {
    users: [
        {
            FirstName: 'imonikhea',
            LastName: 'ugbodaga',
            Birthday: '10/10/1997',
            Age: 29,
            Hobby: 'runing'
        }
        ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state
            }
        case ADD_USERS:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state
    }
}
