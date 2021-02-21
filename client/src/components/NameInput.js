import { useDispatch } from 'react-redux';

// Redux actions
import { addNameInput } from './actions/boxNameInput'

export default function NameInput() {
    const dispatch = useDispatch();

    const validateInputHandler = (event) => {
        dispatch(addNameInput(event.target.value));
    }

    return (
        <>
            <label>Name:</label>
            <input
                type="text"
                name="name-input"
                onBlur={(event) => {
                    validateInputHandler(event);
                }}
            />
        </>
    );
}