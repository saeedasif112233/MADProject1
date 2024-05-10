import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./StackNav";
export default function RootNav() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
