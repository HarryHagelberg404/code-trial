import { useDispatch, useSelector } from 'react-redux';

// Redux actions
import { addCountryInput } from './actions/boxCountryInput'

export default function CountryInput() {
    const dispatch = useDispatch();

    const validateInputHandler = (event) => {
        dispatch(addCountryInput(event.target.value));
    }

    return (
        <>
            <label>Country:</label>
            <select
                type="text"
                name="country-input"
                onBlur={(event) => {
                    validateInputHandler(event);
                }}>
                <option>Sweden</option>
                <option>China</option>
                <option>Brazil</option>
                <option>Australia</option>
            </select>
        </>
    );
}