import { Pressable, StyleSheet, Text, View } from "react-native";
import theme from "../../themes/theme";

const Button = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuter}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.buttonInner, styles.pressed] : styles.buttonInner
        }
        onPress={onPress}
        android_ripple={{ color: theme.colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuter: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInner: {
    backgroundColor: theme.colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default Button;
