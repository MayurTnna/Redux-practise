import {createStore} from 'redux'
import cakeReducer from './cakeReducers'
import rootReducer from '../rootReducer'

const store = createStore(cakeReducer)

export default store