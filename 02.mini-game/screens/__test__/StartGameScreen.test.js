// Unit Test Code
import React from "react";
import { shallow } from "enzyme";
import StartGameScreen from "../StartGameScreen";

describe("StartGameScreen", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StartGameScreen />);
  });

  it("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call startGameHandler with valid input", () => {
    const startGameHandler = jest.fn();

    wrapper = shallow(<StartGameScreen startGameHandler={startGameHandler} />);

    const inputHandler = wrapper.find("TextInput").props().onChangeText;

    inputHandler("10");

    const handleConfirmBtn = wrapper.find("Button").at(1).props().onPress;

    handleConfirmBtn();

    expect(startGameHandler).toHaveBeenCalledWith(10);
  });

  it("should call Alert with invalid input", () => {
    const alertSpy = jest.spyOn(window, "alert");

    const startGameHandler = jest.fn();

    wrapper = shallow(<StartGameScreen startGameHandler={startGameHandler} />);

    const inputHandler = wrapper.find("TextInput").props().onChangeText;

    inputHandler("abc");

    const handleConfirmBtn = wrapper.find("Button").at(1).props().onPress;

    handleConfirmBtn();

    expect(alertSpy).toHaveBeenCalledWith("Invalid value!", "Entered value must be a number");
  });
});
