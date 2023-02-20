import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Keyboard,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import AddTodo from "./components/addTodo";
import Header from "./components/header";
import Todoitem from "./components/todoitem";
export default function App() {
  const [todos, setTodos] = useState([
   
    
  ]);
  const pressHandler = (key) => {
    setTodos((prevtodos) => {
      return prevtodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevtodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevtodos];
      });
    } else {
      Alert.alert("Something Wrong", "must be use over 3 character ", [
        { text: "understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };
  
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header />
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <Todoitem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFCF3",
  },
  content: {
    margin: 10,
    flex:1,
    
  },
  list: {
    flex:1,
    padding: 20,
    
  },
});
