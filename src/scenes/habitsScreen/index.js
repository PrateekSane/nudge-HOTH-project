// React + react-native
import * as React from "react";
import { View } from "react-native";
import MyList from "_molecules/flatList";
import NavLayout from "_utils/navLayout";

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
    <NavLayout navigation={navigation}>
      <MyList array={habits} />
    </NavLayout>
  );
};

export default HabitsScreen;
