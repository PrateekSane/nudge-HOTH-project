// React + react-native
import * as React from "react";

import { View } from "react-native";
import MyList from "../../components/molecules/flatList";
import NavLayout from "_utils/navLayout";

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
    <NavLayout navigation={navigation}>
      <MyList array={nudges} />
    </NavLayout>
  );
};

export default NudgeScreen;
