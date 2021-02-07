// React + react-native
import * as React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import MyList from "../../components/molecules/flatList";
import NavLayout from "_utils/navLayout";
import { TouchableOpacity } from "react-native-gesture-handler";
import StyledButton from "_atoms/StyledButton";

import { Feather } from "@expo/vector-icons";
import { useState } from "react";

const FriendsScreen = ({ navigation }) => {
  const [nudges, setNudges] = useState([
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
  ]);
  const [name, setName] = React.useState("");
  const [userFound, setUserFound] = useState(false);
  const onSubmit = () => {
    setNudges([...nudges, name]);
    setName("");
    setUserFound(true);
  };
  return (
    <NavLayout navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.text}>Find Friends</Text>
      </View>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.textfield}
          onChangeText={(text) => setName(text)}
          placeholder="username"
          value={name}
          multiline={true}
        />


        {userFound ? (
          <View style={styles.container}>
            <Text style={styles.text}>Friend Found!</Text>
          </View>
        ) : (
          <Text>"{''}</Text>
        )}
        <TouchableOpacity>
          <Feather name="search" size={32} color="black" />
        </TouchableOpacity>
      </View>
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
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "stretch",
    marginRight: 20,
    marginLeft: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: "500",
    padding: 16,
    margin: 40,
  },
  textfield: {
    flexGrow: 1,
    height: 60,
    // width: "80%",
    padding: 30,
    // marginLeft: 32,
    marginRight: 20,
    backgroundColor: "#E6E6E6",
    color: "black",
    borderRadius: 50,
  },
});

export default FriendsScreen;
