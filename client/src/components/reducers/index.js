import formInputReducer from './formInput'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    formInput : formInputReducer
})

export default allReducers;