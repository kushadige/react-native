// Unit Test Code
import React from "react";
import { shallow } from "enzyme";
import GameScreen from "../components/game/GameScreen";
import { generateRandomBetween } from "../utils/randomize";

describe("GameScreen", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GameScreen userNum={5} gameOverHandler={() => {}} />);
  });

  it("should render a <View />", () => {
    expect(wrapper.find("View").length).toEqual(1);
  });

  it("should render a <Title />", () => {
    expect(wrapper.find("Title").length).toEqual(1);
  });

  it("should render a <NumberContainer />", () => {
    expect(wrapper.find("NumberContainer").length).toEqual(1);
  });

  it("should render a <Card />", () => {
    expect(wrapper.find("Card").length).toEqual(1);
  });

  it("should render two <Button />s", () => {
    expect(wrapper.find("Button").length).toEqual(2);
  });

  it("should call generateRandomBetween when the component is mounted", () => {
    const mockGenerateRandomBetween = jest.spyOn(generateRandomBetween, "mockImplementation");

    shallow(<GameScreen userNum={5} gameOverHandler={() => {}} />);

    expect(mockGenerateRandomBetween).toHaveBeenCalledTimes(1);

    mockGenerateRandomBetween.mockRestore();
  });
});
