import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default function AddToDo() {
  const [text, setText] = useState("");

  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder="할일을 입력하세요!!!"
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 64,
    backgroundColor: "#fcd734",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: "center",
    paddingHorizontal: 16, // === paddingLeft: 16, paddingRight: 16
  },
  input: {
    fontSize: 16,
    paddingVertical: 8, // === paddingTop: 8, paddingBottom: 8
  },
});
