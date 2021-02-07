// React + react-native
import React,{useState} from "react";
import { StyleSheet,TextInput, View, Text } from "react-native";
import StyledButton from "_atoms/StyledButton";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    return (
        <View style={styles.background}>
          <View style={styles.container}>
          <Text style={styles.text}>Create Your Account</Text>
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
          title="Get Started"
          onPress={() => navigation.navigate("Profile")}
        />
        </View>
        
    );
  };

  const styles = StyleSheet.create({
    background: {
      backgroundColor: "#F8F4EE",
      flex: 1,
    },
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
      backgroundColor: "#E6E6E6",
      borderRadius: 15,
    }
  });

  export default SignUpScreen;