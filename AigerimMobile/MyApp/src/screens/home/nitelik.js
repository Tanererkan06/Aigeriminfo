import * as React from 'react';

import {
  StyleSheet,
  ScrollView,
  Text, Image,
  View,
  FlatList, Dimensions, ImageBackground,
  TouchableOpacity, SafeAreaView
} from "react-native";

import Carousel from 'react-native-snap-carousel';

export default class nitelik extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      data: [],
      isLoading: true,
    }
  }
  
  async getMovies() {
    try {
      const response = await fetch('http://25.46.200.59:3002/nitelik');
      const json = await response.json();
      this.setState({ data: json });
      console.log(json)
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }
  componentDidMount() {
    this.getMovies();
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 100,
          padding: 20,
          margin:15,
         }}
      >
        <View style={{
     
          flex: 0.3
        }} >
          <Text >{item.uzman}</Text>
          <Text >СПЕЦИАЛИСТОВ</Text>



        </View>
        <View style={{
         
          flex: 0.5
        }} >
          <Text >{item.uzman}</Text>

          <Text >ПАЦИЕНТОВ</Text>
        </View>
        <View style={{
          
          flex: 0.5
        }} >
          <Text >{item.uzman}</Text>

          <Text >КЛИНИКИ</Text>
        </View>
        <View style={{
          flex: 0.5
        }} >
          <Text >{item.uzman}</Text>
          <Text >КАБИНЕТОВ</Text>

        </View>
      </View>
    

    )
  }

  render() {
    return (
      <SafeAreaView style={{
        flex: 1,
        // backgroundColor:'rebeccapurple',
        paddingTop: 5, paddingBottom: 5,
      }}>
        <View style={{ flex: 1, ImageBackground,flexDirection: 'row', justifyContent: 'center', }}>
          <FlatList

            data={this.state.data}

            renderItem={this._renderItem}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
  },
  tinyLogo: {
    width: 250,
    alignSelf: "center",
    height: 110,
    borderRadius: 5,
  },
  logo: {
    width: 66,
    height: 58,
  },
});