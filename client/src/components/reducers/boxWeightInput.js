import { LOCATION_CHANGE } from "react-router-redux";

const boxWeightInputReducer = (state = "", action) => {
  switch (action.type) {
    case "addWeightInput":
      return (state = action.payload);
    case "resetFormState":
      return (state = "");
    case LOCATION_CHANGE:
      return (state = "");
    default:
      return state;
  }
};

export default boxWeightInputReducer;
