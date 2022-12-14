import React from "react";
import { Image, View, StyleSheet, SafeAreaView } from "react-native";
import { MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
      <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
      </View>
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  mainContainer: {
    backgroundColor: colors.black,
    flex: 1,
  },
});
export default ViewImageScreen;
