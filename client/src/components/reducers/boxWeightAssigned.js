const boxWeightAssignedReducer = (state = false, action) => {
  switch (action.type) {
    case "assignWeightTrue":
      return (state = true);
    case "assignWeightFalse":
      return (state = false);
    case "resetFormState":
      return (state = false);
    default:
      return state;
  }
};

export default boxWeightAssignedReducer;
