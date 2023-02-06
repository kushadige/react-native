import { StyleSheet, Text, View } from "react-native";
import theme from "../../themes/theme";

const GuessLog = ({ guess, roundNumber }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.innerTextBold}>#{roundNumber}</Text>
      <Text style={styles.innerTextRegular}>
        Opponent's Guess: <Text style={styles.innerTextBold}>{guess}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderColor: theme.colors.primary800,
    borderRadius: 40,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 8,
    backgroundColor: theme.colors.secondary500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  innerTextRegular: {
    fontFamily: "open-sans",
  },
  innerTextBold: {
    fontFamily: "open-sans-bold",
  },
});

export default GuessLog;
