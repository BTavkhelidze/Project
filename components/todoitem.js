import { Pressable, ScrollView, Text, StyleSheet, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
export default function Todoitem({ item, pressHandler }) {
  return (
    <Pressable onPress={() => pressHandler(item.key)}>
      <View style={styles.container}>
        <Text style={styles.text}>{item.text}</Text>
        <View style={styles.iconWrapper}>
          <Ionicons
            style={styles.icon}
            name="checkmark-done"
            size={20}
            color="black"
          />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderWidth: 2,
    borderColor: "black",
    margin: 10,
    flexDirection: "row",
    borderRadius: 24,
    backgroundColor: "#F5E9CF",
    justifyContent: "space-between",
    borderStyle: "dashed",
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  iconWrapper: {
    backgroundColor: "#F0EEED",
    width: 35,
    height: 35,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});
