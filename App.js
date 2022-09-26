import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Platform,
} from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ButtonComponent from "./app/components/Button/ButtonComponent.js";
import Card from "./app/components/Card.js";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen"
import AppPicker from  "./app/components/AppPicker"
import LoginScreen from "./app/screens/LoginScreen"
import AppText from "./app/components/AppText.js"

export default function App() {
  return (
  <LoginScreen/>
  );
}