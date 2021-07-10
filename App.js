import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  
  const handlePress = (enteredItem) => {
    setCourseGoal(currentGoal => [...currentGoal, {id: Math.random().toString(), value: enteredItem}])
    setIsAddMode(false)
  }

  const removeItemHandler = goalId => {
    setCourseGoal(currentGoal => {
      return currentGoal.filter((goal) => goal.id !== goalId);
      
    })

  }

  const handleCancel = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.mainContainer} keyboardShouldPersistTaps='handled'>
      <Button title = "Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput onCancel={handleCancel} mode = {isAddMode} addItem = {handlePress}></GoalInput>
      <View style={styles.contentContainer}>
      <FlatList data={courseGoal} renderItem={itemData => (
        <GoalItem id={itemData.item.id}  onDelete = {removeItemHandler}  item ={itemData.item.value}></GoalItem>
      )} />
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    top: 50,
    flex: 1,
  },  
  contentContainer: {
    paddingBottom: 100
  }
  
});
