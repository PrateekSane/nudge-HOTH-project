// React + react-native
import * as React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import StyledButton from "_atoms/StyledButton";

// Pages
import * as scenes from "_scenes";

// Styles
import styles from "_styles/layout";

//Navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Icons
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome 2" }}
        />
        <Stack.Screen name="Profile" component={scenes.ProfileScreen} />
        <Stack.Screen name="Nudge" component={scenes.NudgeScreen} />
        <Stack.Screen name="Habits" component={scenes.HabitsScreen} />
        <Stack.Screen name="Friends" component={scenes.FriendsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
