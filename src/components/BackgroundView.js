// @flow
import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { background, pattern } from "../assets/images";

type Props = {
  children: React.Node
};

const BackgroundView = (props: Props) => (
  <ImageBackground
    style={styles.background}
    source={background}
    resizeMode="stretch"
  >
    <ImageBackground
      source={pattern}
      style={styles.patterContainer}
      imageStyle={styles.image}
    >
      {props.children}
    </ImageBackground>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: StyleSheet.absoluteFillObject,
  patterContainer: {
    flex: 1
  },
  image: {
    resizeMode: "repeat"
  }
});

export default BackgroundView;
