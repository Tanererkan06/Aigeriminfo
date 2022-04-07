import React, {useEffect, useState, useRef} from 'react';

import {StyleSheet, Text, Image, View, Dimensions} from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;

export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

import i18n from 'i18next';

import Carousel from 'react-native-snap-carousel';

const renderItem = ({item}) => {
  const selectedLanguage =
    i18n.language === 'ru'
      ? {title: item.title, image: item.image}
      : {title: item.title1, image: item.image1};

  return (
    <View
      style={{
        /* borderWidth: 1, */
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        source={{uri: `http://25.46.200.59:3002/${selectedLanguage.image}`}}
        style={{width: 350, height: 300}}
      />
      <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>
        {selectedLanguage.title}
      </Text>
    </View>
  );
};
export default Slider = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('http://25.46.200.59:3002/slider');
      const json = await response.json();

      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <View style={{marginVertical: 10}}>
      <Carousel
        loop={true}
        autoplay={true}
        ref={isCarousel}
        data={data}
        renderItem={item => renderItem(item)}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={indexSnapToItem => setIndex(indexSnapToItem)}
      />
    </View>
  );
};

// define your styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 12,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    //backgroundColor: "#000000c0"
  },
  tinyLogo: {
    width: 250,
    alignSelf: 'center',
    height: 110,
    borderRadius: 5,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
