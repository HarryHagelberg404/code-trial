import { combineReducers } from "redux";
import boxColorInputReducer from "./boxColorInput";
import boxColorAssignedReducer from "./boxColorAssigned";
import boxNameInputReducer from "./boxNameInput";
import boxWeightInputReducer from "./boxWeightInput";
import boxCountryInputReducer from "./boxCountryInput";
import boxNameAssignedReducer from "./boxNameAssigned";
import boxWeightAssignedReducer from "./boxWeightAssigned.js";

const allReducers = combineReducers({
  boxNameInput: boxNameInputReducer,
  boxWeightInput: boxWeightInputReducer,
  boxColorInput: boxColorInputReducer,
  boxColorAssigned: boxColorAssignedReducer,
  boxCountryInput: boxCountryInputReducer,
  boxNameAssigned: boxNameAssignedReducer,
  boxWeightAssigned: boxWeightAssignedReducer,
});

export default allReducers;
