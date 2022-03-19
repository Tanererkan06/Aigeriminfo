import React from "react";
import { StyleSheet, Image } from "react-native";

export const ToolbarBrandLogo: React.FC = () => (
  <Image style={styles.image} source={require("../../../assets/logo.jpg")} />
);

const styles = StyleSheet.create({
  image: { width: 150, height: 250, resizeMode: "contain",borderRadius:50 }
});
