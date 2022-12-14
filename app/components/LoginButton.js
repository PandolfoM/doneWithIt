import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

function LoginButton() {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.LoginButton}
        onPress={() => console.log("Pressed Login")}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
      <Pressable
        style={styles.RegisterButton}
        onPress={() => console.log("Pressed Register")}>
        <Text style={styles.text}>Register</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  LoginButton: {
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  RegisterButton: {
    backgroundColor: colors.secondary,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginVertical: 30,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "600",
  },
});

export default LoginButton;
