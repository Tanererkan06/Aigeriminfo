import React from "react";
import { View, Text, StyleSheet, ViewStyle, Image, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const ToolbarBrandLogo: React.FC = () => (
  <View>
    <Image style={styles.image} source={require("../../../assets/logo.jpg")} />
    <View style={{ backgroundColor: "red" ,marginTop: -80 }}  >
      <Text>Hello World!</Text>
    </View>


  </View>

);

const styles = StyleSheet.create({
  image: { width: 250, height: 250, resizeMode: "contain", borderRadius: 50, marginLeft: -50,marginTop: -30   },
  mini: { width: 50, height: 50, resizeMode: "contain", borderRadius: 5, marginTop: 100, marginLeft: 2 },
  bottom: { width: 150, height: 250, marginBottom: -50, resizeMode: "contain", borderRadius: 50 }

});
