const boxWeightInputReducer = (state = "", action) => {
  switch (action.type) {
    case "addWeightInput":
      return (state = action.payload);
    case "resetFormState":
      return (state = "");
    default:
      return state;
  }
};

export default boxWeightInputReducer;
