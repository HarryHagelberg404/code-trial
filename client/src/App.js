import "./App.less";
import Header from "./components/Header/Header";
import MainView from "./components/MainView";
import FormView from "./components/FormView";
import ListView from "./components/ListView";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={MainView} />
          <Route path="/addbox" component={FormView} />
          <Route path="/listboxes" component={ListView} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
