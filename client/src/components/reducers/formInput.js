const formInputReducer = (state = {}, action) => {
    switch(action.type) {
      case "addInput":
        return state = action.value;
      case "removeInput":
        return state = action.value;
    default:
        return state
    }
}

export default formInputReducer;