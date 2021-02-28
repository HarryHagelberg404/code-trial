import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// Reset form-action
import { resetFormState } from "./actions/resetFormState";

function ListView() {
  const dispatch = useDispatch();
  const [boxList, setBoxList] = useState([]);

  useEffect(() => {
    dispatch(resetFormState());
    // Retrieve dispatches from backend
    axios
      .get("http://localhost:8081/api/listbox")
      .then((response) => {
        if (response.data.length === 0) {
          setBoxList([]);
        } else {
          setBoxList(response.data);
        }
      })
      .catch((err) => {
        setBoxList([]);
      });
  }, []);

  const boxTableHandler = () => {
    const list = boxList.map((value, key) => {
      return (
        <tr key={key}>
          <td>{value.name}</td>
          <td>{value.weight} kg</td>
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
          {!boxList.length > 0 ? (
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
