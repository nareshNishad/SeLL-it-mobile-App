import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ListItem from "../component/ListItem";
import Screen from "../component/screen";
import Separator from "../component/itemSeparator";
import ListItemDeleteAction from "../component/ListItemDeleteAction";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    subtitle: "first description",
    image: require("../assets/naresh.jpg"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    subtitle: "second description",
    image: require("../assets/naresh.jpg"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    subtitle: "third description",
    image: require("../assets/naresh.jpg"),
  },
];

function message(props) {
  const [messages, setMessages] = useState(DATA);
  const [refresh, setRefresh] = useState(false);
  const handleDelete = (message) => {
    const newMessage = messages.filter((m) => m.id != message.id);
    setMessages(newMessage);
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            renderHighlight={() => console.log("clicked")}
            renderRight={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        refreshing={refresh}
        onRefresh={() =>
          setMessages([
            {
              id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
              title: "Second Item",
              subtitle: "second description",
              image: require("../assets/naresh.jpg"),
            },
          ])
        }
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={Separator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default message;
