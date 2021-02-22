import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// Reset form-action
import { resetFormState } from "./actions/resetFormState";

function ListView() {
  const dispatch = useDispatch();
  const [isEmptyBoxList, setIsEmptyBoxList] = useState(true);
  const [boxList, setBoxList] = useState([]);

  useEffect(() => {
    // Clear old form data if it exists
    dispatch(resetFormState());
    // Retrieve dispatches from backend
    axios
      .get("http://localhost:8080/api/listbox")
      .then((response) => {
        if (response.data.length === 0) {
          setIsEmptyBoxList(true);
        } else {
          setBoxList(response.data);
          setIsEmptyBoxList(false);
        }
      })
      .catch((err) => {
        setIsEmptyBoxList(true);
      });
  }, []);

  const boxTableHandler = () => {
    const list = boxList.map((value, key) => {
      return (
        <>
          <tr>
            <td key={key}>{value.name}</td>
            <td>{value.weight}</td>
            <td>
              <div
                style={{
                  backgroundColor: `rgb(${value.color})`,
                  height: "1.5rem",
                }}
              ></div>
            </td>
            <td>{value.shipping.toFixed(2)} kr</td>
          </tr>
        </>
      );
    });
    return list;
  };

  return (
    <div className="Main">
      <div className="main-banner-div">
        <img className="main-banner-img" src="./delivery.jpg" />
      </div>
      <div className="list-div">
        <div className="list-box-view">
          <h1 className="list-box-view-h1">List Dispatches</h1>
          {isEmptyBoxList ? (
            <p className="listbox-view-p">
              There is currently no dispatches available
            </p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Receiver</th>
                  <th>Weight</th>
                  <th>Box colour</th>
                  <th>Shipping cost</th>
                </tr>
              </thead>
              <tbody>{boxTableHandler()}</tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListView;
