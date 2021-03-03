const boxNameInputReducer = (state = "", action) => {
  switch (action.type) {
    case "addNameInput":
      return (state = action.payload);
    case "resetFormState":
      return (state = "");
    default:
      return state;
  }
};

export default boxNameInputReducer;
