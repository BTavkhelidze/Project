import { Text, View, Button, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="new To Do"
          onChangeText={changeHandler}
        />
      <Button
        onPress={() => submitHandler(text)}
        title="add todo "
        
        style={styles.button}
        />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FEFCF3",
    marginTop: 30,
    height:140
  },
  input: {
    marginBottom: 20,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
    fontSize:20
  },
  button:{
   
    backgroundColor:"#E3DFFD",
  }
});
