// React + react-native
import * as React from "react";
import { View } from "react-native";
import MyList from "_molecules/flatList";
import NavBar from "_molecules/navBar";

const HabitsScreen = ({ navigation }) => {
  const habits = [
    {
      id: 0,
      title: " drink water",
    },
    {
      id: 1,
      title: " work out",
    },
    {
      id: 2,
      title: " sleep well",
    },
  ];
  return (
    <View>
      <MyList array={habits} />
      <NavBar navigation={navigation} />
    </View>
  );
};

export default HabitsScreen;
