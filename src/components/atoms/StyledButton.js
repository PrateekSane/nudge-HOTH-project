import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const StyledButton = (props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.margin} />
      <TouchableOpacity {...props} style={styles.button}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
      <View style={styles.margin} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
  margin: {
    flex: 1,
  },
  button: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8E97FD",
    height: 63,
    borderRadius: 38,
    marginBottom: 20,
  },
  text: {
    color: "#F6F1FB",
    fontSize: 16,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
});

export default StyledButton;
