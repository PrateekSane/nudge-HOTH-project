import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

//Icons
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const NavBar = (props) => {
  return (
    <View style={styles.icons}>
      <TouchableOpacity onPress={() => props.navigation.navigate("Nudge")}>
        <MaterialIcons name="messenger-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Habits")}>
        <Ionicons name="water-outline" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        {/* to do */}
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Friends")}>
        <Feather name="user" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
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
});

export default NavBar;
