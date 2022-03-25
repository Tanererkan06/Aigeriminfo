import React from "react";
import { SafeAreaView,View, Text, StyleSheet, ViewStyle, Image, Dimensions } from "react-native";
 import { Theme } from "../../theme";
import { Ionicons } from "@expo/vector-icons";
import { Avatar } from "../avatar";
import { AppointmentModel } from "../../models/AppointmentModel";
import Carousel from "react-native-snap-carousel";
import Slider  from "../Slider";
import moment from "moment";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

type TProps = {
  style?: ViewStyle;
  item: AppointmentModel;
  
};

 

 
export const UpcomingAppoinmentRow: React.FC<TProps> = props => {

   

  
  return (
    <View style={[styles.container, props.style]}>
    <Slider  />    
      


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Theme.colors.grayForBoxBackground,
    //padding: 10,
    // borderRadius: 12,
    flexDirection: "row"
  },
  rows: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 2
  },
  titleText: {
    fontSize: 16,
    fontWeight: "600",
    color: Theme.colors.black
  },
  doctorNameText: {
    marginTop: 3,
    fontSize: 14,
    color: Theme.colors.gray
  },
  locationText: {
    marginTop: 3,
    fontSize: 13,
    fontWeight: "600",
    color: Theme.colors.gray
  },
  notification: {
    width: 26,
    height: 26,
    marginTop: 2,
    marginEnd: 2,
    backgroundColor: "#F93C1A",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  }
});
