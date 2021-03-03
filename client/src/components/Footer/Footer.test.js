import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

const findByAttribute = (component, attr) => {
  const wrapper = component.find(attr);
  return wrapper;
};

describe("Footer component", () => {
  const component = shallow(<Footer />);
  it("Should render without crashing", () => {
    const wrapper = findByAttribute(component, ".Footer");
    expect(wrapper.length).toBe(1);
  });
  it("Should render the logo", () => {
    const wrapper = findByAttribute(component, "#footer-logo");
    expect(wrapper.length).toBe(1);
  });
  it("Should render assumptions links", () => {
    const wrapper = findByAttribute(component, "a");
    expect(wrapper.length).toBe(4);
  });
});
