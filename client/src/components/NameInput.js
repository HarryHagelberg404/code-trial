import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

// Redux actions
import { addNameInput } from './actions/boxNameInput'

export default function NameInput() {
  const dispatch = useDispatch();
  const nameInput = useSelector(state => state.boxColorInput)

  const validateInputHandler = (event) => {
    dispatch(addNameInput(event.target.value));
  }

  return (
    <div>
        <label>Name:</label>
        <input
            type="text"
            name="name-input"
            onBlur={(event) => {
                validateInputHandler(event);
            }}
        />
    </div>
  );
}