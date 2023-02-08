import React from "react";
import { shallow } from "enzyme";
import { Image, Text, View } from "react-native";
import Button from "../components/ui/Button";
import Title from "../components/ui/Title";
import GameOverScreen from "./GameOverScreen";

describe("GameOverScreen", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GameOverScreen />);
  });

  it("should render a <View />", () => {
    expect(wrapper.find(View).length).toEqual(1);
  });

  it("should render a <Title />", () => {
    expect(wrapper.find(Title).length).toEqual(1);
  });

  it("should render an <Image />", () => {
    expect(wrapper.find(Image).length).toEqual(1);
  });

  it("should render a <Text />", () => {
    expect(wrapper.find(Text).length).toEqual(2);
  });

  it("should render a <Button />", () => {
    expect(wrapper.find(Button).length).toEqual(1);
  });
});
