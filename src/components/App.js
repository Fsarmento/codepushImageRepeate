/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import codePush from "react-native-code-push";
import BackgroundView from "./BackgroundView";

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <BackgroundView>
        <View style={styles.container}>
          <Text style={styles.text}>Text after codepush!</Text>
        </View>
      </BackgroundView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: "#fff"
  }
});

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
};

AppCP = codePush(codePushOptions)(App);

export default AppCP;
