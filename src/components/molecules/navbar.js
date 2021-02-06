import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "_styles/layout";

//Icons
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Navbar = (props) => {
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

export default Navbar;
