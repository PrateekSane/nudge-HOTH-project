// React + react-native
import * as React from "react";
import styles from "_styles/layout";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

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
    <View style={styles.container}>
      <Text>My Nudges</Text>
      <FlatList
                data={habits}
                renderItem={(obj) => {
                    return (
                        <View>
                                <Text>{obj.item.title}</Text>
                        </View>
                    );
                }}
                keyExtractor={(item) => { return item.id.toString(); }}
            />
    </View>
  );
};

export default HabitsScreen;
