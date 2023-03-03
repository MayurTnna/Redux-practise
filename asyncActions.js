const redux=require('redux')
const createStore=redux.createStore
const applyMiddleWare= redux.applyMiddleware
const thunkMiddleWare = require('redux-thunk').default
const axios= require('axios')


const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error:  action.payload
            }

    }
}
// action creators thunk middle ware's feature is to returning an function
const fetchUsers =()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            const users = response.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error =>{
            dispatch(fetchUsersFailure(error.message))
        })

    }
}
const store= createStore(reducer, applyMiddleWare(thunkMiddleWare))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())
