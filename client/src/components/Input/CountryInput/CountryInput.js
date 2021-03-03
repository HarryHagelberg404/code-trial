import { useDispatch, useSelector } from "react-redux";

import { addCountryInput } from "../../../actions/boxCountryInput";

export default function CountryInput() {
  const dispatch = useDispatch();
  const countryInput = useSelector((state) => state.boxCountryInput);

  const validateInputHandler = (event) => {
    dispatch(addCountryInput(event.target.value));
  };

  return (
    <>
      <label>Country:</label>
      <select
        type="text"
        name="country-input"
        value={countryInput}
        onChange={(event) => {
          validateInputHandler(event);
        }}
      >
        <option>Sweden</option>
        <option>China</option>
        <option>Brazil</option>
        <option>Australia</option>
      </select>
    </>
  );
}
