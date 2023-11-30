import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View, SafeAreaView, ScrollView, FlatList, Alert} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(goal) {
    setGoals(currentGoals => [...currentGoals, {
      id: Math.random().toString(),
      text: goal,
    }])
    triggerCloseAddGoalModal()
  }

  function clearGoalHandler() {
    setGoals([])
    // Alert.alert('Woah', 'Alert!', [
    //   {
    //     text: 'OK'
    //   },
    //   {
    //     text: 'Fine'
    //   },
    // ])
  }

  function renderFlatList({item}) {
    return <GoalItem text={item.text} id={item.id} onDeleteHandler={deleteGoal}/>
  }

  function deleteGoal(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id)
    })
  }

  function triggerOpenAddGoalModal() {
    setModalIsVisible(true);
  }

  function triggerCloseAddGoalModal() {
    setModalIsVisible(false);
  }

  return (
      <>
        <StatusBar style='light'/>
        <View style={styles.appContainer}>
          <Button title='Add New Goal' color='#a065ec' onPress={triggerOpenAddGoalModal}/>
          {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={triggerCloseAddGoalModal}/>}
          <View>
            <Button title='Clear goals' onPress={clearGoalHandler}/>
          </View>
          <SafeAreaView style={styles.goalsContainer}>
            <FlatList data={goals} renderItem={renderFlatList} keyExtractor={(item, index) => item.id}/>
            {/*<FlatList data={goals} renderItem={({item, index}) => renderFlatList(item, index)}/>*/}
          </SafeAreaView>
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    // backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5
  }
});
