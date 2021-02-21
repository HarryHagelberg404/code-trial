export const addColorInput = (data) => {
    return {
        type: "addBoxInput",
        assigned: false,
        payload: data
    }
}
  
export const removeColorInput = () => {
    return {
        type: "removeBoxInput",
        assigned: true,
        payload: "255, 255, 255"
    }
}
  