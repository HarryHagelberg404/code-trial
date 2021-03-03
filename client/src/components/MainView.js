import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { resetFormState } from "../actions/resetFormState";

function MainView() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Clear old form data if it exists
    dispatch(resetFormState());
  });
  return (
    <div className="Main">
      <div className="main-banner-div">
        <img className="main-banner-img" src="./images/delivery.jpg" />
      </div>

      <div className="box-title">
        <h1>Code - Trial</h1>
      </div>
      <div className="main-subdiv">
        <div className="main-subdiv-third">
          <img className="third-img" src="./images/office.jpg" />
          <h1 className="third-h1">Aspiration</h1>
          <p className="third-p">
            Aspire to learn from coworkers and peers, they often have valuable
            knowledge.
          </p>
        </div>
        <div className="main-subdiv-third">
          <img className="third-img" src="./images/high_five.jpg" />
          <h1 className="third-h1">Solving problems</h1>
          <p className="third-p">
            Solving problems as a team will result in shared knowledge as well
            as better a performing unit
          </p>
        </div>
        <div className="main-subdiv-third">
          <img className="third-img" src="./images/developer.jpg" />
          <h1 className="third-h1">Growth</h1>
          <p className="third-p">
            Both individual and collective growth results in good things. One
            benefits from the other, as it should.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainView;
