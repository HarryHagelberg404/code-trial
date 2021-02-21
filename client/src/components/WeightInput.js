import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux actions
import { addWeightInput } from './actions/boxWeightInput'

export default function WeightInput() {
    const dispatch = useDispatch();
    const [isErrorMessage, setErrorMessage] = useState("")
    const [isInvalidInput, setValidityOfInput] = useState(false);

    const validateInputHandler = (event) => {
        if (event.target.value === '') {
            setValidityOfInput(true);
            setErrorMessage("Values other than numbers are not permitted");
        } else {
            const inputNumValue = event.target.value

            if (inputNumValue < 0) {
                setErrorMessage("Negative values are not permitted");
                setValidityOfInput(true);
            } else {
                setValidityOfInput(false);
                dispatch(addWeightInput(inputNumValue));
            }
        }
    }

    return (
        <>
            <label>Weight:</label>
            {isInvalidInput ? <p>{isErrorMessage}</p> : ''}
            <input
                type="number"
                name="weight-input"
                onBlur={(event) => {
                    validateInputHandler(event);
                }}
            />
        </>
    );
}