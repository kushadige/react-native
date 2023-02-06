import { StyleSheet, View } from "react-native";

export const Main = ({ children }) => {
  return <View style={styles.mainWrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    marginTop: 100,
    paddingHorizontal: 24,
  },
});

export default Main;
