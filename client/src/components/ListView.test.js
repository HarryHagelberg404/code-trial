import React from "react";
import { render } from "enzyme";
import ListView from "./ListView";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const findByAttribute = (component, attr) => {
  const wrapper = component.find(attr);
  return wrapper;
};

describe("ListView component", () => {
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
      <ListView />
    </Provider>
  );
  it("Should render without crashing", () => {
    const wrapper = findByAttribute(component, ".list-div");
    expect(wrapper.length).toBe(1);
  });
  it("Should render the banner image", () => {
    const wrapper = findByAttribute(component, ".main-banner-img");
    expect(wrapper.length).toBe(1);
  });
  it("Should render the headline", () => {
    const wrapper = findByAttribute(component, ".list-box-view-h1");
    expect(wrapper.length).toBe(1);
  });
  describe("ListView not rendering retrieved boxes", () => {
    it("Should render the: no dispatches available text", () => {
      const wrapper = findByAttribute(component, ".listbox-view-p");
      expect(wrapper.length).toBe(1);
    });
    it("Should not render the retrieved boxes", () => {
      const wrapper = findByAttribute(component, "table");
      expect(wrapper.length).toBe(0);
    });
  });
});
