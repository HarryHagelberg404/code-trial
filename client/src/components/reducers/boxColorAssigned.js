import { LOCATION_CHANGE } from "react-router-redux";

const boxColorAssignedReducer = (state = false, action) => {
  switch (action.type) {
    case "assignColorTrue":
      return (state = true);
    case "assignColorFalse":
      return (state = false);
    case "resetFormState":
      return (state = false);
    case LOCATION_CHANGE:
      return (state = false);
    default:
      return state;
  }
};

export default boxColorAssignedReducer;
