import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

// Redux actions
import { addNameInput } from "./actions/boxNameInput";
import { assignNameTrue, assignNameFalse } from "./actions/boxNameAssigned";

export default function NameInput() {
  const dispatch = useDispatch();
  const [isValidInput, setValidInput] = useState(true);
  const nameInput = useSelector((state) => state.boxNameInput);
  const nameMaxLength = 40;

  const validateInputHandler = (event) => {
    let input = event.target.value;
    if (input.length < 40) {
      dispatch(addNameInput(event.target.value));
      dispatch(assignNameTrue());
      setValidInput(true);
    } else {
      dispatch(assignNameFalse());
      setValidInput(false);
    }
  };

  return (
    <>
      <label>Name:</label>
      {!isValidInput ? <p className="inputWarning">Name is too long</p> : ""}
      <input
        type="text"
        name="name-input"
        value={nameInput}
        onChange={(event) => {
          validateInputHandler(event);
        }}
      />
      {!isValidInput ? (
        ""
      ) : (
        <p className="nameCharCounter">
          {nameInput.length + "/" + nameMaxLength}
        </p>
      )}
    </>
  );
}
