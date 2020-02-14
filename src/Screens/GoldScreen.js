import React from "react";
import {StyleSheet, Text, View} from "react-native";

const GoldScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Gold Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gold",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
  },
});

export default GoldScreen;
