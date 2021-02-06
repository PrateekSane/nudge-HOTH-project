// React + react-native
import * as React from "react";
import styles from "_styles/layout";
import { View, Text, FlatList } from "react-native";

const NudgeScreen = ({ navigation }) => {
  const nudges = [
    {
      id:0,
      name: "Thomas"
    },
    {
      id:1,
      name:"Jennie"
    },
    {
      id:2,
      name:"Jacob"
    },
  ]
  return (
    <View style={styles.container}>
      <FlatList
        data={nudges}
        renderItem={(obj) => {
          return (
              <View style={styles.cardList}>
                <Text style={styles.cardText}>{obj.item.name}</Text>
              </View>
          );
        }}
        keyExtractor={(item) => { return item.id.toString(); }}
    />
    </View>
  );
};

export default NudgeScreen;
