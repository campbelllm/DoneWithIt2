import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

function ListItemSeparator(props) {
  return <View style={styles.separator}></View>;
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: "colors.background",
    width: "100%",
    height: 2,
  },
});

export default ListItemSeparator;
