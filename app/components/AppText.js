import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/defaultStyles";

function AppText({ children, style }) {
  return <Text 
  numberOfLines={3}
  style={[defaultStyles.text, style]}
  >
  </Text>;
}

export default AppText;
