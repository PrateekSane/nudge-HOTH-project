// React + react-native
import * as React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View styles={styles.container}>
      {/* navigate to other pages*/}
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
      {/*implement icons*/}
      <View style={styles.icons}>
        <TouchableOpacity>
          <MaterialIcons name="messenger-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="water-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
