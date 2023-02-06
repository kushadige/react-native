import { StyleSheet, Text, View } from "react-native";
import theme from "../../themes/theme";

const Card = ({ children, title }) => {
  return (
    <View style={styles.cardContainer}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: theme.colors.primary800,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    elevation: 10, // Android-specific shadow
    shadowColor: "black", // IOS-specific shadow
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    minHeight: 125,
  },
  title: {
    fontFamily: "open-sans",
    color: theme.colors.secondary500,
    fontSize: 24,
  },
});

export default Card;
