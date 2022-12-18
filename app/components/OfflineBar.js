import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import Text from "./Text";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineBar(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    top: Constants.statusBarHeight,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineBar;
