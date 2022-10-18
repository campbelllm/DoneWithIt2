import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";

import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen({
  image,
  title,
  subTitle
}) {
  return (
    <View>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title="Mosh"
        subTitle="5 Listings"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: "black",
    fontWeight: "bold",
  },
});

export default ListingDetailsScreen;
