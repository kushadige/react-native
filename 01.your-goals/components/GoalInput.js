import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native";

const GoalInput = ({ modalVisible, closeModal, onAddGoal }) => {
  const [goalInput, setGoalInput] = useState("");

  const goalInputHandler = (enteredText) => {
    setGoalInput(enteredText);
  };
  const addGoalHandler = () => {
    onAddGoal(goalInput);
    setGoalInput("");
  };

  return (
    <Modal visible={modalVisible} animationType='fade'>
      <View style={styles.inputModal}>
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require("../assets/images/goal.png")} />
          <TextInput
            onChangeText={goalInputHandler}
            style={styles.textInput}
            value={goalInput}
            placeholder='Your personal goal!'
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button color='#b180f0' onPress={addGoalHandler} title='Add Goal' />
            </View>
            <View style={styles.button}>
              <Button color='#f31282' onPress={closeModal} title='Cancel' />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputModal: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  inputContainer: {
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    padding: 16,
    width: "100%",
    borderRadius: 6,
    textAlign: "center",
    color: "#120438",
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;
