const boxWeightInputReducer = (state = 0, action) => {
    switch(action.type) {
        case "addWeightInput":
            return state = action.payload;
        default:
            return state
    }
}

export default boxWeightInputReducer;