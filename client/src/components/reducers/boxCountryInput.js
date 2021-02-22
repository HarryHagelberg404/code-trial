import { LOCATION_CHANGE } from "react-router-redux";

const boxCountryInputReducer = (state = "Sweden", action) => {
  switch (action.type) {
    case "addCountryInput":
      return (state = action.payload);
    case "removeCountryInput":
      return (state = "Sweden");
    case "resetFormState":
      return (state = "Sweden");
    case LOCATION_CHANGE:
      return (state = "Sweden");
    default:
      return state;
  }
};

export default boxCountryInputReducer;
