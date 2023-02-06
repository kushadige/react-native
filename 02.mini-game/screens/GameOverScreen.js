import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../components/ui/Button";
import Title from "../components/ui/Title";
import theme from "../themes/theme";

const GameOverScreen = ({ rounds = 0, userNum = 0, restartGame }) => {
  return (
    <View style={styles.gameOverContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNum}</Text>.
      </Text>
      <Button onPress={restartGame}>Start New Game</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: theme.colors.primary800,
    overflow: "hidden",
    marginVertical: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    textAlign: "center",
    fontSize: 24,
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: theme.colors.primary500,
  },
});

export default GameOverScreen;
