import React from "react";
import ColorPicker from "../components/ColorPicker";
import toJson from "enzyme-to-json";
import renderer from "react-test-renderer";
import { shallow, mount, EnzymeAdapter } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { createStore } from "redux";
import allReducer from "../components/reducers";

// describe("Rendering components", () => {
//   var component;
//   let store;
//   beforeEach(() => {
//     store = createStore(allReducer);
//     component = renderer.create(
//       <Provider store={store}>
//         <ColorPicker />
//       </Provider>
//     );
//   });
//   it("Renders ColorPicker with state", () => {
//     expect(component).toMatchSnapshot();
//   });
//   it("Renders App with Header", () => {
//     // renderer.act(() => {
//     //   component.root.findByType("button").props.onClick();
//     // });
//     // expect(store.dispatch).toHaveBeenCalledTimes(1);
//     // expect(store.dispatch).toHaveBeenCalledWith(
//     //   myAction({ payload: "sample text" })
//     // );
//   });
// });

// it('should dispatch an action on button click', () => {
//     renderer.act(() => {
//       component.root.findByType('button').props.onClick();
//     });

//     renderer.act(() => {
//       component.root.findByType('input')
//         .props.onChange({ target: { value: 'some other text' } });
//     });

//     expect(store.dispatch).toHaveBeenCalledTimes(1);
//     expect(store.dispatch).toHaveBeenCalledWith(
//       myAction({ payload: 'some other text' })
//     );
//   });
