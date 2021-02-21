const boxCountryInputReducer = (state = 'Sweden', action) => {
    switch(action.type) {
      case "addCountryInput":
        return state = action.payload;
    default:
        return state
    }
}

export default boxCountryInputReducer;