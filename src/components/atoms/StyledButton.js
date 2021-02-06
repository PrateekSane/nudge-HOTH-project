import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const StyledButton = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.button}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8E97FD",
    margin: 20,
    height: 63,
    borderRadius: 38,
  },
  text: {
    color: "#F6F1FB",
    fontSize: 14,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
});

export default StyledButton;
