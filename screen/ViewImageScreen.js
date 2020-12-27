import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen() {
  return (
    <View style={styles.imageContainer}>
      <MaterialCommunityIcons style={styles.cross} name="close" size={30} />
      <MaterialCommunityIcons style={styles.delete} name="delete" size={30} />
      <Image
        source={require("../assets/chair.jpg")}
        style={styles.ViewImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  cross: {
    color: "white",
    position: "absolute",
    top: 40,
    left: 30,
  },
  delete: {
    color: "white",
    position: "absolute",
    top: 40,
    right: 30,
  },
  ViewImage: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
