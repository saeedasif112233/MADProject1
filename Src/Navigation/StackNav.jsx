import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Welcome from "../Screens/Welcome";
import Signin from "../Screens/Signin";
import Signup from "../Screens/Signup";
import TabNav from "./TabNav";

export default function StackNav() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={TabNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
