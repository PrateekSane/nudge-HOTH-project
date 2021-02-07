// React + react-native
import * as React from "react";
import styles from "_styles/layout";
import { View, Text } from "react-native";
import StyledButton from "_atoms/StyledButton";

const SignUpScreen = ({ navigation }) => {
    return (
        <View>
        <Text style={styles.text}>Create Your Account</Text>
        <StyledButton
          title="Get Started"
          onPress={() => navigation.navigate("Profile")}
        />
        </View>
        
    );
  };

  export default SignUpScreen;