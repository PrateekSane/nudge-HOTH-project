// React + react-native
import React,{useState} from "react";
import styles from "_styles/layout";
import { TextInput, View, Text } from "react-native";
import StyledButton from "_atoms/StyledButton";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    return (
        <View>
        <Text style={styles.text}>Create Your Account</Text>
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

  export default SignUpScreen;