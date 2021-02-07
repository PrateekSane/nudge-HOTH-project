import * as React from "react";
import styles from "_styles/layout";
import NavBar from "_molecules/navBar";
import { View, Text } from "react-native";

const NavLayout = ({ children }, props) => {
  return (
    <View style={styles.container}>
      {children}
      <NavBar navigation={props.navigation} />
    </View>
  );
};

export default NavLayout;
