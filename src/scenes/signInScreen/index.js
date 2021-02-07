// React + react-native
import * as React from "react";
import styles from "_styles/layout";
import {View, Text, TextInput, StyleSheet} from "react-native";
import StyledButton from "_atoms/StyledButton";

const SignInScreen = ({ navigation }) => {
  const [value, onChangeText] = React.useState('');

    return (
        <View>
        <Text style={styles.text}>Welcome Back!</Text>
          <TextInput
          style={styles.textfield}
          onChangeText={ text => {onChangeText(text)}}
          placeholder="username"
          value={value}
          multiline={true}
         />
        <TextInput 
          style={styles.textfield}
          placeholder="password"
        />
        <StyledButton
          title="Log In"
          onPress={() => navigation.navigate("Profile")}
        />
        <Text>Forgot Password?</Text>
        </View>
        
    );
  };
 
  export default SignInScreen;