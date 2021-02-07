import React, {useState} from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { MaterialCommunityIcons } from '@expo/vector-icons';

// implement counter, ups the streak count when button is pressed.
const FireCounter = () => {
  const [streakCount, setStreakCount] = useState(0);
  const addOne = () => {
    setStreakCount(streakCount+1);
  }
return (
  <View>
    <TouchableOpacity onPress={addOne}>
      <MaterialCommunityIcons name="fire" size={32} color="orange" />
    </TouchableOpacity>
    <Text>{streakCount}</Text>
  </View>
  
);
}

const MyList = (props) => {
  let count= 0;
  if (props.display === "true") 
  {
    return (
      <View style={styles.container}>
      <FlatList
        data={props.array}
        renderItem={(obj) => {
          return (
              <View style={styles.cardList}>
                <Text style={styles.cardText}>{obj.item.title}</Text>
                
                <FireCounter />
              </View>
          );
        }}
        keyExtractor={(item) => { return item.id.toString(); }}
      />
      </View>
    );
  }
  else {
    return ( // do not display fire icon
      <View style={styles.container}>
      <FlatList
        data={props.array}
        renderItem={(obj) => {
          return (
              <View style={styles.cardList}>
                <Text style={styles.cardText}>{obj.item.title}</Text>
              </View>
          );
        }}
        keyExtractor={(item) => { return item.id.toString(); }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    margin: 20,
  },
  cardList: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginTop: 16,
    backgroundColor: "white",
    borderRadius: 1
  },

  cardText: {
    fontSize: 24,
  }
});

export default MyList;
