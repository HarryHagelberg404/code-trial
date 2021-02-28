const boxNameAssignedReducer = (state = false, action) => {
  switch (action.type) {
    case "assignNameTrue":
      return (state = true);
    case "assignNameFalse":
      return (state = false);
    case "resetFormState":
      return (state = false);
    default:
      return state;
  }
};

export default boxNameAssignedReducer;
