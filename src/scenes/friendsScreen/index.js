// React + react-native
import * as React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import MyList from "../../components/molecules/flatList";
import NavLayout from "_utils/navLayout";

const FriendsScreen = ({ navigation }) => {
    const nudges = [
      {
        id: 0,
        title: "Jordan",
      },
      {
        id: 1,
        title: "Lisa",
      },
      {
        id: 2,
        title: "Tyler",
      },
    ];
    const [name, setName] = React.useState('');

    return (
          <NavLayout navigation={navigation}>
            <View style={styles.container}>
          <Text style={styles.text}>Find Friends</Text>
          </View>
          <TextInput
            style={styles.textfield}
            onChangeText={ text => {setName(text)}}
            placeholder="username"
            value={name}
            multiline={true}
          />
            <MyList array={nudges} />
          </NavLayout>
      
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
    fontWeight: "500",
    padding: 16,
    margin: 40,
  },
  textfield: {
    height: 60,
    padding: 30,
    marginLeft: 48,
    marginRight: 48,
    backgroundColor: "white",
    color: "black",
    borderRadius: 50,
  }
});

export default FriendsScreen;
