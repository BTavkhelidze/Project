import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>To - Do List</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: "#F0DBDB",
    paddingTop: 30,
    justifyContent: "flex-start",
  },
  titleWrapper: {
    backgroundColor: "lightgrey",
    width: "40%",
    height: 40,
    alignSelf: "flex-start",
    borderRadius: 24,
  },
  title: {
    alignSelf: "center",
    padding: 10,
    fontWeight:"bold",
    fontSize:15,
    fontStyle:"italic",
  },
});
