import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import ListItem from "../component/ListItem";
import ListItemSeparator from "../component/itemSeparator";
import Icon from "../component/Icon";
import Screen from "../component/screen";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "#fc5c65",
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: "#4ECDC4",
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Naresh Nishad"
          subTitle="nareshchand2436@gmail.com"
          image={require("../assets/naresh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "lightgray",
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
