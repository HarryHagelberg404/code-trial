const boxNameInputReducer = (state = '', action) => {
    switch(action.type) {
        case "addNameInput":
            return state = action.payload;
        default:
            return state
    }
}

export default boxNameInputReducer;