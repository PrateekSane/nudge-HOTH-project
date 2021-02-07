// React + react-native
import * as React from "react";

import { Text, StyleSheet, View } from "react-native";
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
          <View style={styles.container}>
        <Text style={styles.text}>My Nudges</Text>
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
  text: {
    fontSize: 28,
    fontWeight: "500",
    padding: 16,
    marginTop: 40
  },
});

export default NudgeScreen;
