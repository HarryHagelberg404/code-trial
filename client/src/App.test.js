import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  const component = shallow(<App />);
  it("Should render without crashing", () => {
    const headerWrapper = component.find("Header");
    const footerWrapper = component.find("Footer");
    expect(headerWrapper.length + footerWrapper.length).toBe(2);
  });
});
