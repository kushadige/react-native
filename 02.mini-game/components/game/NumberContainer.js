import { StyleSheet, Text, View } from "react-native";
import theme from "../../themes/theme";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: theme.colors.secondary500,
    padding: 24,
    marginVertical: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: "open-sans-bold",
    fontSize: 36,
    color: theme.colors.secondary500,
  },
});

export default NumberContainer;
