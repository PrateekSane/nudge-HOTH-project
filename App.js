// React + react-native
import * as React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity} from "react-native";
import StyledButton from "_atoms/StyledButton";

//Navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Icons
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

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
        <Stack.Screen name="Nudge" component={NudgeScreen} />
        <Stack.Screen name="Habits" component={HabitsScreen} />
        <Stack.Screen name="Friends" component={FriendsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style= {styles.container}>

      <Text>
        Connect with friends!
      </Text>
    <StyledButton
      title="Log In"
      onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    />
    <Text>
    DON’T HAVE AN ACCOUNT? SIGN UP
    </Text>
    </View>
    
  );
};

const ProfileScreen = ({ navigation}) => {
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

const NudgeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>
        My Nudges
      </Text>
    </View>
  )
}
const HabitsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>
        My Nudges
      </Text>
    </View>
  )
}

const FriendsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>
        My Nudges
      </Text>
    </View>
  )
}
export default App;

const styles = StyleSheet.create(
  {
    container: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
    },
    icons: {
      flexDirection: "row",
      justifyContent: "center"
    }
  }
  )