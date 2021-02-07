import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

const MyList = (props) => {
  return (
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
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8E97FD",
    margin: 20,
    height: 63,
    borderRadius: 38,
  },
  text: {
    color: "#F6F1FB",
    fontSize: 14,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  cardList: {
    padding: 20,
    borderBottomWidth:1,
  },
  cardText: {
    fontSize: 20,
  }
});

export default MyList;
