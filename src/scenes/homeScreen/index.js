// React + react-native
import * as React from "react";
import StyledButton from "_atoms/StyledButton";
import Layout from "_utils/layout";
import {StyleSheet, TextInput, View, Text, Button, } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>nudge</Text>
      <Text style={styles.text}>Connect with friends!</Text>
      <StyledButton
        title="Log In"
        onPress={() => navigation.navigate("SignIn")}
      />
      <Text>DON’T HAVE AN ACCOUNT?</Text>
      <Button 
        title="Sign Up" 
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    padding: 10,
    marginBottom: 20
  },
  logo: {
    fontSize: 64,
    fontWeight: "900",
    color: "#8E97FD",
  }
});
export default HomeScreen;
