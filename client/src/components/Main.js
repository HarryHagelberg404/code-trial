import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Reset form-action
import { resetFormState } from "./actions/resetFormState";

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Clear old form data if it exists
    dispatch(resetFormState());
  });
  return (
    <div className="Main">
      <div className="main-banner-div">
        <img className="main-banner-img" src="./delivery.jpg" />
      </div>

      <div className="box-title">
        <h1>Code - Trial</h1>
      </div>
      <div className="main-subdiv">
        <div className="main-subdiv-third">
          <img className="third-img" src="./office.jpg" />
          <h1 className="third-h1">Aspiration</h1>
          <p className="third-p">
            Aspire to learn from coworkers and peers, they often have valuable
            knowledge.
          </p>
        </div>
        <div className="main-subdiv-third">
          <img className="third-img" src="./high_five.jpg" />
          <h1 className="third-h1">Solving problems</h1>
          <p className="third-p">
            Solving problems as a team will result in shared knowledge as well
            as better performing unit
          </p>
        </div>
        <div className="main-subdiv-third">
          <img className="third-img" src="./developer.jpg" />
          <h1 className="third-h1">Growth</h1>
          <p className="third-p">
            Both individual and collective growth results is a good thing. One
            benefits from the other, as it should.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
