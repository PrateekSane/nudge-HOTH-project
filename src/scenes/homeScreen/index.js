// React + react-native
import * as React from "react";
import StyledButton from "_atoms/StyledButton";
import Layout from "_utils/layout";
import styles from "_styles/layout";
import { TextInput, View, Text, Button, } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <Layout>
      <Text style={styles.logo}>Nudge</Text>
      <Text style={styles.text}>Connect with friends!</Text>
      <StyledButton
        title="Log In"
        onPress={() => navigation.navigate("SignIn")}
      />
      <TextInput />
      <Text>DON’T HAVE AN ACCOUNT?</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")}/>
    </Layout>
  );
};

export default HomeScreen;
