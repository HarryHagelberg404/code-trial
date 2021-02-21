const boxColorInputReducer = (state = '255, 255, 255', action) => {
    switch(action.type) {
      case "addBoxInput":
        console.log(action.payload)
        return state = action.payload;
      case "removeBoxInput":
        return state = action.payload;
    default:
        return state
    }
}

export default boxColorInputReducer;