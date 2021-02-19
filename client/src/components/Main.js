import FormView from "./FormView";
import ListView from "./ListView";

function Main() {
  return (
    <div className="Main">
        <div className="box-title"><h1>Box Tracker</h1></div>
        <FormView />
        <ListView />
    </div>
  );
}

export default Main;
