import React, { useState } from "react";
import ColorPicker from './ColorPicker';

function FormView() {
    const [boxName, setBoxName] = useState("");
    const [boxWeight, setBoxWeight] = useState(0);
    // const [boxColor, setBoxColor] = useState(""); TODO
    const [boxCountry, setBoxCountry] = useState("Sweden");


    const validateInputHandler = (event) => {
        event.preventDefault()
        // console.log(ColorPicker.retrieveRGBColor())
        const dataObj = {
            name: boxName,
            weight: boxWeight,
            color: '#fff',
            country: boxCountry
        }
        console.log(dataObj)
        
    }

    const postBoxCredentials = () => {
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
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name-input"
                        onChange={(event) => {
                            setBoxName(event.target.value)
                        }}
                    />
                    <label>Weight:</label>
                    <input
                        type="text"
                        name="weight-input"
                        onChange={(event) => {
                            setBoxName(event.target.value)
                        }}
                    />
                    <label>Box color:</label>
                    <ColorPicker 
                        onClick={(event) => {
                            console.log('Test')
                        }}
                    />
                    <label>Country:</label>
                    <select
                        type="text"
                        name="country-input"
                        onChange={(event) => {
                            setBoxCountry(event.target.value)
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
