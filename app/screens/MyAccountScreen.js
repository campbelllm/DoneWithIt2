import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Icon from "../components/Icon";
import colors from "../config/colors";
import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";

function MyAccountScreen(props) {
  return (
    <Screen>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title="Mosh"
        subTitle="mosh@mosh.com"
      />
      <View style={styles.content}>
        <ListItem
          ImageComponent={
            <Icon
              name="format-list-bulleted"
              backgroundColor={colors.primary}
              iconColor="white"
            />
          }
          title="My Listings"
        />
        <ListItemSeparator/>
        <ListItem
          ImageComponent={
            <Icon
              name="email"
              backgroundColor={colors.secondary}
              iconColor="white"
            />
          }
          title="My Messages"
        />
      </View>
      <ListItem
        ImageComponent={
          <Icon name="logout" 
          backgroundColor="#ffe66d" 
          iconColor="white" />
        }
        title="Logout"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
  },
  profile: {
    marginBottom: 20,
  },
  content: {
    marginTop: 20,
    marginBottom:20,
  }
});
export default MyAccountScreen;
