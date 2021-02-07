import * as React from "react";
import styles from "_styles/layout";
import Navbar from "_molecules/navbar";
import { View, Text } from "react-native";

const NavLayout = ({ children }, props) => {
  return (
    <View style={styles.container}>
      {children}
      <Navbar navigation={props.navigation} />
    </View>
  );
};

export default NavLayout;
