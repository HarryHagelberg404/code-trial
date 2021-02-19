import ColorPicker from './ColorPicker';

function FormView() {

    const validateInputHandler = e => {
        e.preventDefault()
        console.log(e.target[3].value)
    }


    return (
        <div className="form-div">
            <div className="add-box-form">
                <h1>Add Box</h1>
                <form className="form-fields" onSubmit={validateInputHandler}>
                    <label>
                        Name:
                    </label>
                    <input type="text" name="name" />
                    <label>
                        Weight:
                    </label>
                    <input type="text" name="weight" />
                    <label>
                        Box color:
                    </label>
                    <ColorPicker />
                    <label>
                        Country:
                    </label>
                    <select type="text" name="weight">
                        <option>Sweden</option>
                        <option>China</option>
                        <option>Brazil</option>
                        <option>Australia</option>
                    </select>
                    <input type="submit" value="Save"/>
                </form>
            </div>
        </div>
    );
}

export default FormView;
