import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ColorPicker from './ColorPicker';
import NameInput from './NameInput';

import { addNameInput } from './actions/boxNameInput';
import { addWeightInput } from './actions/boxWeightInput';
import { addCountryInput } from './actions/boxCountryInput';

function FormView() {
    const dispatch = useDispatch();
    // Acess global Redux store
    const nameInput = useSelector(state => state.boxNameInput);
    const weightInput = useSelector(state => state.boxWeightInput);
    const colorInput = useSelector(state => state.boxColorInput);
    const isColorAssigned = useSelector(state => state.boxColorAssigned);
    const countryInput = useSelector(state => state.boxCountryInput);

    const validateInputHandler = (event) => {
        event.preventDefault()
        // console.log(ColorPicker.retrieveRGBColor())
        const dataObj = {
            name: nameInput,
            weight: weightInput,
            color: colorInput,
            country: countryInput
        }
        console.log(dataObj);
    }

    const postBoxCredentialsHandler = () => {
    //     Axios.post("http://localhost:3001/create", {
    //   name: name,
    //   age: age,
    //   country: country,
    //   position: position,
    //   wage: wage,
    // }).then(() => {
    //   setEmployeeList([
    //     ...employeeList,
    //     {
    //       name: name,
    //       age: age,
    //       country: country,
    //       position: position,
    //       wage: wage,
    //     },
    //   ]);
    // });
    }


    return (
        <div className="form-div">
            <div className="add-box-form">
                <h1>Add Box</h1>
                <div className="form-fields">
                   <NameInput />
                    <label>Weight:</label>
                    <input
                        type="text"
                        name="weight-input"
                        onBlur={(event) => {
                            dispatch(addWeightInput(event.target.value));
                        }}
                    />
                    <label>Box color:</label>
                    <ColorPicker />
                    <label>Country:</label>
                    <select
                        type="text"
                        name="country-input"
                        onBlur={(event) => {
                            dispatch(addCountryInput(event.target.value));
                        }}>
                        <option>Sweden</option>
                        <option>China</option>
                        <option>Brazil</option>
                        <option>Australia</option>
                    </select>
                    <input type="submit" value="Save" onClick={validateInputHandler} />
                </div>
            </div>
        </div>
    );
}

export default FormView;
