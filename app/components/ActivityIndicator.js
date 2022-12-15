import React from "react";
import { View, StyleSheet } from "react-native";
import AnimatedLottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <AnimatedLottieView
      autoPlay
      loop
      source={require("../assets/animations/loading.json")}
    />
  );
}

export default ActivityIndicator;
