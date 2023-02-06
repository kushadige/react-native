import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ goal, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        onLongPress={onDeleteItem.bind(this, goal.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{goal.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.6,
  },
  goalText: {
    fontSize: 20,
    color: "white",
    padding: 8,
  },
});

export default GoalItem;
