// React + react-native
import * as React from "react";

import { View } from "react-native";
import MyList from "../../components/molecules/flatList";
import NavBar from "../../components/molecules/navBar";

const NudgeScreen = ({ navigation }) => {
  const nudges = [
    {
      id: 0,
      title: "Thomas",
    },
    {
      id: 1,
      title: "Jennie",
    },
    {
      id: 2,
      title: "Jacob",
    },
  ];
  return (
    <View>
      <MyList array={nudges} />
      <NavBar navigation={navigation} />
    </View>
  );
};

export default NudgeScreen;
