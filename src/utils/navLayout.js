import * as React from "react";
import NavBar from "_molecules/navBar";
import { View, StyleSheet } from "react-native";

//Icons
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const NavLayout = ({ children, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>{children}</View>
      <View style={styles.navi}>
        <NavBar navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor:"#F8F4EE",
  },
  main: {
    flex: 11,
  },
  navi: {
    flex: 1,
  },
});

export default NavLayout;
