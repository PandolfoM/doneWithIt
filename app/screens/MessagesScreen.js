import React, { useState } from "react";
import { FlatList } from "react-native";

import {
  ListItem,
  ListItemDeleteActions,
  ListItemSeparator,
} from "../components/lists";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur urna urna, facilisis eu sapien ac, molestie rhoncus magna. Mauris nec tellus quis neque auctor ornare. Nunc porttitor odio in odio tempor, nec molestie velit accumsan. Sed condimentum porta laoreet. Mauris semper sem vitae nulla ultricies vestibulum. Integer efficitur orci et leo maximus, gravida finibus nibh imperdiet. Suspendisse a urna rhoncus, vestibulum arcu a, lobortis tellus.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur urna urna, facilisis eu sapien ac, molestie rhoncus magna. Mauris nec tellus quis neque auctor ornare. Nunc porttitor odio in odio tempor, nec molestie velit accumsan. Sed condimentum porta laoreet. Mauris semper sem vitae nulla ultricies vestibulum. Integer efficitur orci et leo maximus, gravida finibus nibh imperdiet. Suspendisse a urna rhoncus, vestibulum arcu a, lobortis tellus.",
    image: require("../assets/matt.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/matt.png"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

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
            onPress={() => console.log("pressed", item)}
            showChevrons={true}
            renderRightActions={() => (
              <ListItemDeleteActions onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/matt.png"),
            },
          ])
        }></FlatList>
    </Screen>
  );
}

export default MessagesScreen;
