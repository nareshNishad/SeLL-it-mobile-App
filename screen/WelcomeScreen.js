import React from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";

import AppButton from "../component/AppButton";
import Text from "../component/Text";

function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.backgroundContainer}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text>Sell What you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" color="#fc5c65" />
        <AppButton title="register" color="#4ECDC4" />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "flex-end",
  },
  buttonContainer: { padding: 20, width: "100%" },
  logoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 80,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
