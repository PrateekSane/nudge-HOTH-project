// React + react-native
import * as React from "react";
import StyledButton from "_atoms/StyledButton";
import Layout from "_utils/layout";
import { Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <Layout>
      <Text>Connect with friends!</Text>
      <StyledButton
        title="Log In"
        onPress={() => navigation.navigate("Profile")}
      />
      <Text>DON’T HAVE AN ACCOUNT? SIGN UP</Text>
    </Layout>
  );
};

export default HomeScreen;
