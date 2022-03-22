import React from "react";
import { View, Text, StyleSheet, ViewStyle, Image, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const ToolbarBrandLogo: React.FC = () => (
  <View>
      <Image style={styles.image} source={require("../../../assets/logo.jpg")} />
      

  </View>
  
);

const styles = StyleSheet.create({
  image: { width: 150, height: 250, resizeMode: "contain",borderRadius:50 },
  bottom: { width: 150, height: 250,marginBottom:-50, resizeMode: "contain",borderRadius:50 }

});
