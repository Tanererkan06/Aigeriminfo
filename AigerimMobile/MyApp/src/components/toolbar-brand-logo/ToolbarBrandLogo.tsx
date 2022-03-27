import React from "react";
import { View, Text, StyleSheet, ViewStyle, Image, Dimensions } from "react-native";
import LanguageList from "../LanguageList"


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const ToolbarBrandLogo: React.FC = () => (
  <View>

    <View
      style={{
        flexDirection: "row",
      }}
    >
       <LanguageList/>
      <Image style={styles.image} source={require("../../../assets/logo.jpg")} />
      <Image style={styles.mini} source={require("../../../assets/ru.png")} />
      <Image style={styles.mini} source={require("../../../assets/kz.png")} />
      <Image style={styles.mini} source={require("../../../assets/en.png")} />
      <Image style={styles.mini} source={require("../../../assets/tr.png")} />
      
 
 
    </View>


  </View>

);

const styles = StyleSheet.create({
  image: { width: 250, height: 250, resizeMode: "contain", borderRadius: 50,marginLeft:-50,marginTop:18  },
  mini: { width: 50, height: 50, resizeMode: "contain", borderRadius: 5,marginTop:100,marginLeft:2  },
  bottom: { width: 150, height: 250, marginBottom: -50, resizeMode: "contain", borderRadius: 50 }

});
