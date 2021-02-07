import React from "react";

import { Text, StyleSheet, View } from "react-native";
const [nudgeTo, setNudgeTo] = useState("");
const [msg, setMsg] = useState("");
const CreateNudgeScreen = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Create a Nudge</Text>
      </View>

      <TextInput
        style={styles.textfield}
        onChangeText={(text) => {
          setNudgeTo(text);
        }}
        placeholder="Who would you like to nudge"
        value={nudgeTo}
        multiline={true}
      />
      <TextInput
        style={styles.textfield}
        onChangeText={(text) => {
          setMsg(text);
        }}
        value={msg}
        placeholder="What would you like to say"
        multiline={true}
      />
      <StyledButton
        title="Send Nudge"
        onPress={() => navigation.navigate("Nudge")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  touchableWrapper: {
    margin: 16,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 28,
    fontWeight: "500",
    padding: 8,
  },
});

export default CreateNudgeScreen;
