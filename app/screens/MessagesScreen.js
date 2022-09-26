import React, { useState } from "react";
import { FlatList } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListIemtSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id));
    }
    const [refreshing, setRefreshing]= useState(false)

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => 
            <ListItemDeleteAction onPress={
                () => handleDelete(item)
            }/>}
          />
        )}
        ItemSeparatorComponent={ListIemtSeparator}
        refreshing={refreshing}
        onRefresh={() => {
            setMessages([
                {
                    id: 2,
                    title: "T2",
                    description: "D2",
                    image: require("../assets/mosh.jpg"),
                  },
            ])
        }}
      />
    </Screen>
  );
}


export default MessagesScreen;