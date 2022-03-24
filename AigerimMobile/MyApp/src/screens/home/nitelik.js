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

export default class Nitelik extends React.Component {


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
          alignSelf: "center",
          justifyContent: "center",
          textAlign:"center",
          margin: 4,
          fontSize: 12,
          padding:5

        }}
      >

        <View style={{
          flex: 3
        }} >

          <View   >
            <Text> СПЕЦИАЛИСТОВ </Text>

          </View>
          <View   >
            <Text  >{item.klinik}</Text>

          </View>


        </View>

        <View style={{
          flex: 2 
        }} >

          <View  >
            <Text > ПАЦИЕНТОВ </Text>

          </View>
          <View  >
            <Text  >{item.klinik}</Text>

          </View>


        </View>

        <View style={{
          flex: 2
        }} >

          <View  >
            <Text  > КЛИНИКИ </Text>

          </View>
          <View   >
            <Text  >{item.klinik}</Text>

          </View>


        </View>
        <View style={{
           flex: 2 
        }} >

          <View  >
            <Text  > КАБИНЕТОВ </Text>

          </View>
          <View   >
            <Text  >{item.klinik}</Text>

          </View>


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
        <ImageBackground source={require('../../../assets/subscribe.jpg')} resizeMode="cover" style={styles.image}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
            <FlatList

              data={this.state.data}

              renderItem={this._renderItem}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "black",
    fontSize: 12,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    //backgroundColor: "#000000c0"
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