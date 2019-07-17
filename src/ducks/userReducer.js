import axios from 'axios'

let initialState = {
    email: null,
    firstName: null,
    lastName: null
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export const requestUserData = () => {
    let data = axios.get('/auth/user-data')
    .then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: data
    }
}

export default function(state = initialState, action) {
    let {type, payload} = action
    switch(type) {
        case REQUEST_USER_DATA + '_FULFILLED':
            const {email, firstName, lastName} = payload.user
            return {email, firstName, lastName}
        default: 
            return state
    }
}