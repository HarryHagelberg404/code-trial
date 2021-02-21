const boxColorAssignedReducer = (state = false, action) => {
    switch(action.type) {
      case "assignColorTrue":
        return state = true;
      case "assignColorFalse":
        return state = false;
    default:
        return state
    }
}

export default boxColorAssignedReducer;