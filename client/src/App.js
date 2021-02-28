import "./App.less";
import Header from "./components/Header";
import Main from "./components/MainView";
import FormView from "./components/FormView";
import ListView from "./components/ListView";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/addbox" component={FormView} />
          <Route path="/listboxes" component={ListView} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
