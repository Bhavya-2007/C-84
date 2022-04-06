import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default class CreatePostScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.appIcon}>
        <Image
        source={require("../assets/logo.png")}
        style={styles.iconImage}
        >

        </Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D0E6F0"
  },
  text: {
    color: "#4C5D70", 
    fontSize: 30
  }
});
