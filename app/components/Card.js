import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

function Card({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          resizeMode="contain"
          source={require("../assets/jacket.jpg")}
          style={styles.image}></Image>
        <Text>Red jacket for sale!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    width: "90%",
    height: 300,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f8f4f4",
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
});

export default Card;
