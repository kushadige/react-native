import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Spinner from "react-native-loading-spinner-overlay";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Main from "./layout/Main";
import theme from "./themes/theme";
import useFonts from "./hooks/useFonts";

export default function App() {
  const [userNum, setUserNum] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    useFonts().then(() => {
      setLoading(false);
    });
  }, []);

  const startGameHandler = (pickedNumber) => {
    setUserNum(pickedNumber);
  };

  const gameOverHandler = (rounds) => {
    setGameOver(true);
    setGuessRounds(rounds);
  };

  const restartGame = () => {
    setUserNum(null);
    setGameOver(false);
    setGuessRounds(0);
  };

  return (
    <LinearGradient
      colors={[theme.colors.primary700, theme.colors.secondary500]}
      style={styles.container}
    >
      <ImageBackground
        style={styles.container}
        source={require("./assets/images/background.png")}
        resizeMode='cover'
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
          {loading ? (
            <Spinner
              visible={loading}
              textContent={"Launching app..."}
              textStyle={styles.spinnerTextStyle}
            />
          ) : (
            <Main>
              {gameOver && userNum ? (
                <GameOverScreen userNum={userNum} rounds={guessRounds} restartGame={restartGame} />
              ) : !userNum ? (
                <StartGameScreen startGameHandler={startGameHandler} />
              ) : (
                <GameScreen userNum={userNum} gameOverHandler={gameOverHandler} />
              )}
            </Main>
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});
