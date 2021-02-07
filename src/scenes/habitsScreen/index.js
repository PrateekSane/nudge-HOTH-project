// React + react-native
import * as React from "react";
import { Text,View, StyleSheet} from "react-native";
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
      <View style={styles.container}>
        <Text style={styles.text}>My Habits</Text>
        </View>
          <MyList array={habits} />
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
  },
});
export default HabitsScreen;
