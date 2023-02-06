import { StyleSheet, View } from "react-native";

export const Row = ({ children, margin }) => {
  return <View style={{ ...styles.rowContainer, margin: margin || 0 }}>{children}</View>;
};

export const Col = ({ children, size = "full" }) => {
  return <View style={size === "full" ? styles.columnFull : styles.columnHalf}>{children}</View>;
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  columnFull: {
    flex: 1,
  },
  columnHalf: {
    flexBasis: "25%",
  },
});
