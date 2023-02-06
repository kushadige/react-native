import { useState } from "react";
import { StyleSheet, View, FlatList, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import Base64 from "./utils/Base64";

import goals from "./dummy";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState(goals);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const addGoalHandler = (goalInput) => {
    if (goalInput.length > 0) {
      setCourseGoals((prev) => [
        ...prev,
        {
          text: goalInput,
          id: Base64.btoa((Math.random() + 1).toString() + new Date().toString()),
        },
      ]);
      closeModal();
    }
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='#a065ec' onPress={openModal} />
        <GoalInput modalVisible={modalVisible} closeModal={closeModal} onAddGoal={addGoalHandler} />
        <View style={styles.goalsContainer}>
          <Text style={styles.description}>* hold goals to remove</Text>
          <FlatList
            data={courseGoals}
            renderItem={(goalObj) => {
              return <GoalItem goal={goalObj.item} onDeleteItem={deleteGoalHandler} />;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 75,
    paddingHorizontal: 16,
    flexDirection: "column",
    minHeight: "100%",
  },
  goalsContainer: {
    flex: 4,
  },
  description: {
    marginVertical: 10,
    color: "#ccc",
    textTransform: "capitalize",
    fontStyle: "italic",
  },
});
