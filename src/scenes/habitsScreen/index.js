// React + react-native
import * as React from "react";
import { Text,View, StyleSheet} from "react-native";
import MyList from "_molecules/flatList";
import NavLayout from "_utils/navLayout";

import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

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
        <View style={styles.touchableWrapper}>
            <TouchableOpacity>
            <AntDesign name="pluscircleo" size={24} color="black" />
            </TouchableOpacity>
          </View>
      <View style={styles.container}>
        <Text style={styles.text}>My Habits</Text>
        </View>
          <MyList array={habits} />
      </NavLayout> 
    
  );
};

const styles = StyleSheet.create({
  touchableWrapper: {
    margin:16,
    flexDirection:"row",
    justifyContent:"flex-end"
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 28,
    fontWeight: "500",
    padding: 8,
  },
});
export default HabitsScreen;
