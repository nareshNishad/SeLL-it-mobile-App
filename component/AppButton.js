import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Text from "./Text";

function AppButton({ title, color = "#fc5c65" }) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    backgroundColor: "#fc5c65",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginVertical: 10,
  },
});

export default AppButton;
