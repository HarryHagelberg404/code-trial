import { LOCATION_CHANGE } from "react-router-redux";

const boxNameInputReducer = (state = "", action) => {
  switch (action.type) {
    case "addNameInput":
      return (state = action.payload);
    case "resetFormState":
      return (state = "");
    case LOCATION_CHANGE:
      return (state = "");
    default:
      return state;
  }
};

export default boxNameInputReducer;
