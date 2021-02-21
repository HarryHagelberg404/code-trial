import axios from "axios";
import { useEffect, useState } from "react";

function ListView() {
  const [isEmptyBoxList, setIsEmptyBoxList] = useState(true);
  const [boxList, setBoxList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/listbox").then((response) => {
      console.log(response);
      if (response.data.length === 0) {
        setIsEmptyBoxList(true);
      } else {
        setBoxList(response.data);
        setIsEmptyBoxList(false);
      }
    });
  }, []);

  const boxTableHandler = () => {
    const list = boxList.map((value, key) => {
      console.log(value);
      return (
        <>
          <tr>
            <td>{value.name}</td>
            <td>{value.weight}</td>
            <td>
              <div
                style={{
                  backgroundColor: `rgb(${value.color})`,
                  height: "1.5rem",
                }}
              ></div>
            </td>
            <td>{value.shipping} kr</td>
          </tr>
        </>
      );
    });
    return list;
  };

  console.log(isEmptyBoxList);

  return (
    <div className="Main">
      <div className="list-div">
        <div className="list-box-view">
          <h1>List Dispatches</h1>
          {isEmptyBoxList ? (
            <p>There is currently no dispatches available</p>
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
