import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import StartGame from "./StartGame";
import schedule from "./schedule";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="schedule" component={schedule} />
        <Stack.Screen name="StartGame" component={StartGame} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
