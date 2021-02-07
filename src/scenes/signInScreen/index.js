// React + react-native
import * as React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import StyledButton from "_atoms/StyledButton";

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

    return (
        <View>
        <View style={styles.container}>
        <Text style={styles.text}>Welcome Back!</Text>
        </View>

          <TextInput
          style={styles.textfield}
          onChangeText={ text => {setUsername(text)}}
          placeholder="username"
          value={username}
          multiline={true}
        />
        <TextInput 
          style={styles.textfield}
          onChangeText={ text => {setPassword(text)}}
          value={password}
          placeholder="password"
          multiline={true}
        />
    
        <StyledButton
          title="Log In"
          onPress={() => navigation.navigate("Profile")}
        />

        <View style={styles.container}>
        <Text>Forgot Password?</Text>
        </View>
        </View>
        
    );
  };
  const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 28,
      fontWeight: "700",
      padding: 10,
      margin: 48,
      alignItems: "center"
    },
    textfield: {
      height: 60,
      padding: 30,
      marginBottom: 20,
      marginLeft: 48,
      marginRight: 48,
      backgroundColor: "white",
      color: "black",
      borderRadius: 15,
    }
  });
  export default SignInScreen;