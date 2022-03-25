import * as React from 'react';

import {
  StyleSheet,
  ScrollView,
  Text, Image,
  View,
  FlatList, Dimensions, ImageBackground,
  TouchableOpacity, SafeAreaView
} from "react-native";

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

import Carousel from 'react-native-snap-carousel';

export default class Slider extends React.Component {


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
      const response = await fetch('http://25.46.200.59:3002/slider');
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

  _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          /*  borderWidth: 1, */
          padding: 20,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: "center",
          backgroundColor: 'white',
        }}>
        <Image source={{ uri: "http://25.46.200.59:3002/" + item.image }} style={{ width: 200, height: 200 }} />
        <Text style={{ marginVertical: 10, fontSize: 20, fontWeight: 'bold' }}>
          {item.title}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <Carousel
        ref={(c) => { this._carousel = c; }}
        data={this.state.data}
        renderItem={this._renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
      />
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