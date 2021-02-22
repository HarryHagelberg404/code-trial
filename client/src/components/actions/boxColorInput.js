export const addColorInput = (data) => {
  return {
    type: "addBoxInput",
    payload: data,
  };
};

export const removeColorInput = () => {
  return {
    type: "removeBoxInput",
  };
};
