import React from "react";
import { shallow, render } from "enzyme";
import MainView from "./MainView";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const findByAttribute = (component, attr) => {
  const wrapper = component.find(attr);
  return wrapper;
};

describe("MainView component", () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    boxNameInput: "",
    boxWeightInput: 0,
    boxColorInput: "255, 255, 255",
    boxCountryInput: "Sweden",
    boxNameAssigned: false,
    boxWeightAssigned: false,
    boxColorAssigned: false,
  });
  const component = render(
    <Provider store={store}>
      <MainView />
    </Provider>
  );
  it("Should render without crashing", () => {
    const wrapper = findByAttribute(component, ".main-subdiv");
    expect(wrapper.length).toBe(1);
  });
  it("Should render the banner image", () => {
    const wrapper = findByAttribute(component, ".main-banner-img");
    expect(wrapper.length).toBe(1);
  });
  it("Should render the three sub-div", () => {
    const wrapper = findByAttribute(component, ".main-subdiv-third");
    expect(wrapper.length).toBe(3);
  });
});
