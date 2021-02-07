import * as React from "react";
import styles from "_styles/layout";
import { View } from "react-native";

const Layout = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Layout;
