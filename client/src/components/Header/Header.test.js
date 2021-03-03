import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

const findByAttribute = (component, attr) => {
  const wrapper = component.find(attr);
  return wrapper;
};

describe("Header component", () => {
  const component = shallow(<Header />);
  it("Should render without crashing", () => {
    const wrapper = findByAttribute(component, ".main-head");
    expect(wrapper.length).toBe(1);
  });
  it("Should render the logo", () => {
    const wrapper = findByAttribute(component, ".logo");
    expect(wrapper.length).toBe(1);
  });
  it("Should render navigation links", () => {
    const wrapper = findByAttribute(component, "Link");
    expect(wrapper.length).toBe(3);
  });
});
