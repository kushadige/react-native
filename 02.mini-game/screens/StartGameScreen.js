import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Col, Row } from "../components/ui/Table";
import Title from "../components/ui/Title";
import theme from "../themes/theme";

const StartGameScreen = ({ startGameHandler }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const inputHandler = (input) => {
    setEnteredNumber(input);
  };

  const handleResetBtn = () => {
    setEnteredNumber("");
  };
  const handleConfirmBtn = () => {
    if (!isNaN(+enteredNumber)) {
      if (+enteredNumber <= 0 || +enteredNumber >= 100) {
        Alert.alert("Invalid number!", "Make sure the given number is between 0 - 100", [
          { text: "Okay", style: "destructive", onPress: handleResetBtn },
        ]);
        return;
      }
      startGameHandler(+enteredNumber);
      setEnteredNumber("");
    } else {
      Alert.alert("Invalid value!", "Entered value must be a number", [
        { text: "Okay", style: "destructive", onPress: handleResetBtn },
      ]);
      return;
    }
  };

  return (
    <View style={styles.startGameContainer}>
      <View style={styles.heading}>
        <Title>Guess My Number</Title>
      </View>
      <Card title='Enter a Number'>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={inputHandler}
          value={enteredNumber}
        />
        <Row>
          <Col>
            <Button onPress={handleResetBtn}>Reset</Button>
          </Col>
          <Col>
            <Button onPress={handleConfirmBtn}>Confirm</Button>
          </Col>
        </Row>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  startGameContainer: {
    flex: 1,
  },
  heading: {
    marginBottom: 36,
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.secondary500,
    color: theme.colors.secondary500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default StartGameScreen;
