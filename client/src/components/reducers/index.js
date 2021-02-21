import formInputReducer from './boxColorInput'
import { combineReducers } from 'redux';
import boxColorInputReducer from './boxColorInput';
import boxColorAssignedReducer from './boxColorAssigned';
import boxNameInputReducer from './boxNameInput';
import boxWeightInputReducer from './boxWeightInput';
import boxCountryInputReducer from './boxCountryInput';

const allReducers = combineReducers({
    boxNameInput: boxNameInputReducer,
    boxWeightInput: boxWeightInputReducer,
    boxColorInput: boxColorInputReducer,
    boxColorAssigned: boxColorAssignedReducer,
    boxCountryInput: boxCountryInputReducer
})

export default allReducers;