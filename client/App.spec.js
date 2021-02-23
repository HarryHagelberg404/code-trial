import React from "react";
import App, { doIncrement, doDecrement, Counter } from "./App";

describe("Local State", () => {
  console.log("Test");
});

describe("App Component", () => {
  it("renders the Counter wrapper", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Counter)).to.have.length(1);
  });
});
