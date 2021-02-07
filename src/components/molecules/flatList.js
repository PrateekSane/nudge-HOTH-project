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
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    margin: 20,
  },
  cardList: {
    padding: 20,
    marginTop: 16,
    borderColor: "gray",
    borderBottomWidth: 1,
  },

  cardText: {
    fontSize: 24,
  }
});

export default MyList;
