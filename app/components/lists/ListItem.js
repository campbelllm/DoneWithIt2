import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../../config/colors";
import AppText from "../AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem({
  image,
  title,
  subTitle,
  ImageComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View>
          <View style={styles.contact}>
            {ImageComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.contactText}>
              <AppText style={styles.title}>{title.toUpperCase()}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={25}
              color={colors.medium}
            ></MaterialCommunityIcons>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  contact: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  contactText: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 3,
    justifyContent: "left",
    fontSize: 16,
  },
  subTitle: {
    justifyContent: "left",
    color: colors.medium,
    fontSize: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: "100%",
  },
});
export default ListItem;
