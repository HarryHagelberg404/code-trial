const boxCountryInputReducer = (state = "Sweden", action) => {
  switch (action.type) {
    case "addCountryInput":
      return (state = action.payload);
    case "removeCountryInput":
      return (state = "Sweden");
    case "resetFormState":
      return (state = "Sweden");
    default:
      return state;
  }
};

export default boxCountryInputReducer;
