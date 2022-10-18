import React, { useState } from "react";
import { FlatList } from "react-native";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import ListIemtSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "hello this is lindsey smith. I am coding and typing something very very long to test out my number of lines prop is working. Lets see how it does.",
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
