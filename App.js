// React + react-native
import * as React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import StyledButton from "_atoms/StyledButton";

// Pages
import FriendsScreen from "_scenes/friendsScreen";
import HabitsScreen from "_scenes/habitsScreen";
import HomeScreen from "_scenes/homeScreen";
import ProfileScreen from "_scenes/profileScreen";
import NudgeScreen from "_scenes/nudgeScreen";
import SignInScreen from "_scenes/signInScreen";
import SignUpScreen from "_scenes/signUpScreen";


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
          options={{ title: "Welcome 6" }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Nudge" component={NudgeScreen} options={{ title: "Nudges" }} />
        <Stack.Screen name="Habits" component={HabitsScreen} />
        <Stack.Screen name="Friends" component={FriendsScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: "Log In" }}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: "Sign Up" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
