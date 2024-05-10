import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Go To Signin Screen"
        onPress={() => {
          navigation.navigate("Signin");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
