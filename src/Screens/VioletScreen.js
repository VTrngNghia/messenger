import React from "react";
import {StyleSheet, Text, View} from "react-native";

const VioletScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Violet Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "violet",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
  },
});

export default VioletScreen;
