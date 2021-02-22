import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// Components
import ColorPicker from "./ColorPicker";
import NameInput from "./NameInput";
import WeightInput from "./WeightInput";
import CountryInput from "./CountryInput";

// Reset form-action
import { resetFormState } from "./actions/resetFormState";

function FormView() {
  const dispatch = useDispatch();
  // Access global Redux store
  const nameInput = useSelector((state) => state.boxNameInput);
  const weightInput = useSelector((state) => state.boxWeightInput);
  const colorInput = useSelector((state) => state.boxColorInput);
  const isColorAssigned = useSelector((state) => state.boxColorAssigned);
  const countryInput = useSelector((state) => state.boxCountryInput);

  const [isInsufficientInput, setInSufficientInput] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const validateInputHandler = (event) => {
    if (
      isInvalidNameHandler() ||
      isInvalidWeightHandler() ||
      isInvalidColorHandler()
    ) {
      setInSufficientInput(true);
    } else {
      // Reduce rgb string if it contains a large number of decimals
      const strippedRGBColor = colorInput
        .split(",")
        .map((n) => Number(n).toFixed(1))
        .toString();
      console.log(strippedRGBColor);
      // Make POST request to backend
      postBoxHandler(strippedRGBColor);
    }
  };

  const postBoxHandler = (color) => {
    console.log(color);
    axios
      .post("http://localhost:8080/api/addbox", {
        name: nameInput,
        weight: weightInput,
        color: color,
        country: countryInput,
      })
      .then((response) => {
        setResponseMessage(response.data);
      })
      .catch((error) => {
        setResponseMessage("Something went wrong, Please try again");
      });
    // Clear previous form data
    dispatch(resetFormState());
  };

  const isInvalidNameHandler = () => {
    return nameInput.length <= 0;
  };

  const isInvalidWeightHandler = () => {
    return weightInput <= 0;
  };

  const isInvalidColorHandler = () => {
    return !isColorAssigned;
  };

  return (
    <div className="Main">
      <div className="main-banner-div">
        <img className="main-banner-img" src="./delivery.jpg" />
      </div>
      <div className="form-div">
        <div className="add-box-form">
          {responseMessage.length > 0 ? (
            <p className="input-view-respMessage">{responseMessage}</p>
          ) : (
            ""
          )}
          <h1>Add Box</h1>
          {isInsufficientInput ? (
            <p>Please fill in entire form before submiting</p>
          ) : (
            ""
          )}
          <div className="form-fields">
            <NameInput />
            <WeightInput />
            <ColorPicker />
            <CountryInput />
            <input type="submit" value="Save" onClick={validateInputHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormView;
