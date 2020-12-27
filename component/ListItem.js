import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";

function ListItem({
  image,
  title,
  subtitle,
  IconComponent,
  renderHighlight,
  renderRight,
}) {
  return (
    <Swipeable renderRightActions={renderRight}>
      <TouchableHighlight underlayColor="#DDDDDD" onPress={renderHighlight}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.listingImage} />}
          <View style={styles.userDetails}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            color="lightgray"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItem: "center",
  },
  listingImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  userDetails: {
    paddingLeft: 20,
    flex: 1,
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    color: "#6e6969",
  },
});

export default ListItem;
