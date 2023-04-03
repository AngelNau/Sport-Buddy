import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import StartGame from "./StartGame";
import schedule from "./schedule";
import Leaderboard from "./LeaderboardScreen";
import HomeScreen from "./HomeScreen";
import FindGameScreen from "./FindGameScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen' screenOptions={screenOptions}>
        <Stack.Screen name="Log In">
          {(props) => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Schedule" component={schedule} />
        <Stack.Screen name="Game" component={StartGame} />
        <Stack.Screen name="Sign Up" component={SignupScreen} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
        <Stack.Screen name="Profile" component={HomeScreen} />
        <Stack.Screen name="Find a game" component={FindGameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#ffa520',
    height: 60,
    // headerTransparent: true,
  },
  headerTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerTitleAlign: 'center',
  headerTintColor: '#FFFFFF',
};

export default App;
