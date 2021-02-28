import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux actions
import { addWeightInput } from "./actions/boxWeightInput";
import {
  assignWeightTrue,
  assignWeightFalse,
} from "./actions/boxWeightAssigned";

export default function WeightInput() {
  const dispatch = useDispatch();
  const weightInput = useSelector((state) => state.boxWeightInput);
  const [errorMessage, setErrorMessage] = useState("");
  const [isInvalidInput, setInvalidityOfInput] = useState(false);

  const validateInputHandler = (event) => {
    if (event.target.value === "") {
      setInvalidityOfInput(true);
      setErrorMessage("Values other than numbers are not permitted");
      dispatch(assignWeightFalse());
    } else {
      const inputNumValue = event.target.value;
      if (inputNumValue < 0) {
        setInvalidityOfInput(true);
        setErrorMessage("Negative values are not permitted");
        dispatch(assignWeightFalse());
      } else if (inputNumValue.length > 10) {
        setInvalidityOfInput(true);
        setErrorMessage("You cant have this many characters");
        dispatch(assignWeightFalse());
      } else {
        setInvalidityOfInput(false);
        dispatch(addWeightInput(inputNumValue));
        dispatch(assignWeightTrue());
      }
    }
  };

  return (
    <>
      <label>Weight:</label>
      {isInvalidInput ? <p className="inputWarning">{errorMessage}</p> : ""}
      <input
        type="number"
        name="weight-input"
        value={weightInput}
        onChange={(event) => {
          validateInputHandler(event);
        }}
      />
    </>
  );
}
