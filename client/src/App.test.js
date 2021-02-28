import React from "react";
import App from "./App";
import toJson from "enzyme-to-json";
import { shallow, mount, EnzymeAdapter } from "enzyme";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { createStore } from "redux";
import allReducer from "./components/reducers";

describe("Rendering components", () => {
  let component;
  let store;
  store = createStore(allReducer);
  component = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // it("Renders App component with redux state", () => {
  //   expect(component).toMatchSnapshot();
  // });
  it("Renders App with Header", () => {
    store = createStore(allReducer);
    component = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    console.log(component);
    expect(component.hasClass("logo")).toEqual(true);
  });
  // it("Renders App with Footer", () => {
  //   const wrapper = shallow(<App />);
  //   const footer = Footer;
  //   expect(wrapper.contains(footer)).toEqual(true);
  // });
});

// describe("Snapshots", () => {
//   const initialState = {};
//   const mockStore = configureStore();
//   let store;
//   it("App snapshots", () => {
//     store = mockStore(initialState);
//     const tree = shallow(<App />);
//     expect(toJson(tree)).toMatchSnapshot();
//   });
// });
