import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Text from "./Text";

function card({ image, title, subTitle }) {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  info: {
    padding: 15,
  },
  title: {
    marginBottom: 5,
  },
  subtitle: {
    color: "#4ECDC4",
    fontWeight: "bold",
  },
});

export default card;
