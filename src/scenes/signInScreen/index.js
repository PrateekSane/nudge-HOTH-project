// React + react-native
import * as React from "react";
import styles from "_styles/layout";
import { View, Text } from "react-native";
import StyledButton from "_atoms/StyledButton";

const SignInScreen = ({ navigation }) => {
    return (
        <View>
        <Text style={styles.text}>Welcome Back!</Text>
        <StyledButton
          title="Log In"
          onPress={() => navigation.navigate("Profile")}
        />
        <Text>Forgot Password?</Text>
        </View>
        
    );
  };

  export default SignInScreen;