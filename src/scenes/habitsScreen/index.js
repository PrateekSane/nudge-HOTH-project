// React + react-native
import * as React from "react";
import {View} from "react-native";
import MyList from "../../components/molecules/flatList";
import NavBar from "../../components/molecules/navBar";

const HabitsScreen = ({ navigation }) => {
  const habits = [
    {
      id:0,
      title:" drink water"
    },
    {
      id:1,
      title:" work out"
    },
    {
      id:2,
      title:" sleep well"
    },
  ]
  return (
    <View>
<MyList array = {habits} />
    <NavBar />
    </View>
    
  );
};

export default HabitsScreen;
