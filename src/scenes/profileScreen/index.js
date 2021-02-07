// React + react-native
import * as React from "react";
import { StyleSheet, View, ViewBase } from "react-native";
import StyledButton from "_atoms/StyledButton";
import NavLayout from "_utils/navLayout";

const ProfileScreen = ({ navigation }) => {
  return (
    <NavLayout navigation={navigation}>
      {/* navigate to other pages*/}
      <View style={styles.container}>
      <StyledButton
        title="My Nudges"
        onPress={() => navigation.navigate("Nudge")}
      />
      <StyledButton
        title="My Habits"
        onPress={() => navigation.navigate("Habits")}
      />
      <StyledButton
        title="Find Friends"
        onPress={() => navigation.navigate("Friends")}
      />
      </View>
    </NavLayout>
  );
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "column",
    justifyContent:"center",
  }
});
export default ProfileScreen;
