import { useEffect, useMemo, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import NumberContainer from "../components/game/NumberContainer";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Col, Row } from "../components/ui/Table";
import Title from "../components/ui/Title";
import { generateRandomBetween } from "../utils/randomize";
import GuessLog from "../components/game/GuessLog";

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNum, gameOverHandler }) => {
  const initialGuess = useMemo(() => generateRandomBetween(1, 100, userNum), [userNum]);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessHistory, setGuessHistory] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNum) {
      gameOverHandler(guessHistory.length);
    }
  }, [currentGuess, userNum, gameOverHandler]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const guessBtnHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNum) ||
      (direction === "higher" && currentGuess > userNum)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newGuess = generateRandomBetween(minBoundary, maxBoundary, currentGuess);

    setCurrentGuess(newGuess || currentGuess);
    setGuessHistory((prev) => (newGuess ? [newGuess, ...prev] : prev));
  };

  return (
    <View style={styles.gameContainer}>
      <Title>Opponent's Guess</Title>
      {/* GUESS */}
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card title='Higher or lower?'>
        <Row>
          <Col size='half'>
            <Button onPress={guessBtnHandler.bind(this, "higher")}>
              <FontAwesome name='plus-circle' size={25} color='white' />
            </Button>
          </Col>
          <Col size='half'>
            <Button onPress={guessBtnHandler.bind(this, "lower")}>
              <FontAwesome name='minus-circle' size={25} color='white' />
            </Button>
          </Col>
        </Row>
      </Card>
      {/* LOG ROUNDS */}
      <View style={styles.listContainer}>
        <FlatList
          data={guessHistory}
          renderItem={({ item, index }) => (
            <GuessLog guess={item} roundNumber={guessHistory.length - index} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    paddingVertical: 16,
  },
});

export default GameScreen;
