// React + react-native
import * as React from "react";
import { Button, Text } from "react-native";

//Navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    />
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default App;
