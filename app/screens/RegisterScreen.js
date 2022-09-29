import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen.js";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        vaildationSchema={validationSchema}
      >
        <AppFormField
          placeholder="Name"
          icon="account"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="name"
          textContentType="name"
        />
         <AppFormField
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="emailAddress"
          textContentType="email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          name="password"
          textContectType="password"
          secureTextEntry
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  containter: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
