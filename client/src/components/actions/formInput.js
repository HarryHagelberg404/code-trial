const addInput = (data) => {
    return {
      type: "addInput",
      value: data
    }
  }
  
  const removeInput = () => {
    return {
      type: "removeInput",
      value: null
    }
  }
  