import { LOCATION_CHANGE } from "react-router-redux";

const boxColorInputReducer = (state = "255, 255, 255", action) => {
  switch (action.type) {
    case "addBoxInput":
      return (state = action.payload);
    case "removeBoxInput":
      return (state = "255, 255, 255");
    case "resetFormState":
      return (state = "255, 255, 255");
    case LOCATION_CHANGE:
      return (state = "255, 255, 255");
    default:
      return state;
  }
};

export default boxColorInputReducer;
