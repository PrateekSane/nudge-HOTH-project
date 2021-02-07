// React + react-native
import * as React from "react";
import StyledButton from "_atoms/StyledButton";
import Layout from "_utils/layout";
import styles from "_styles/layout";
import { View, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <Layout>
      <Text>Connect with friends!</Text>
      <StyledButton
        title="Log In"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
      <Text>DON’T HAVE AN ACCOUNT? SIGN UP</Text>
    </Layout>
  );
};

export default HomeScreen;
