import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "#f4f4f4",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#f4f4f4",
    borderRadius: 8,
    padding: 12,
  },
});

export default Title;
