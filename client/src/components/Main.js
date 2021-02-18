
function Main() {
  return (
    <div className="Main">
        <div className="box-title"><h1>Box Tracker</h1></div>
        <div className="form-div">
            <div className="add-box-form">
                <h1>Add Box</h1>
                    <form className="form-fields">
                        <label>
                            Name:
                        </label>
                            <input type="text" name="name"/>
                        <label>
                            Weight:
                        </label>
                            <input type="text" name="weight"/>
                        <label>
                            Box color:
                        </label>
                            <input type="text" name="weight"/>
                        <label>
                            Country:
                        </label>
                            <select type="text" name="weight">
                                <option>Sweden</option>
                                <option>China</option>
                                <option>Brazil</option>
                                <option>Australia</option>
                            </select>
                        <input type="submit" value="Submit" />
                    </form>
            </div>
        </div>
        <div className="list-div">
            <div className="list-box-view">
                <h1>List Dispatches</h1>

            </div>
        </div>
    </div>
  );
}

export default Main;
