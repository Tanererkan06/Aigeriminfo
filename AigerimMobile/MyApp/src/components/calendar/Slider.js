import React, { useEffect, useState } from 'react';
import {
  Text,
  View, Image, StyleSheet,
  SafeAreaView,Dimensions
} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import { IntlProvider, FormattedMessage, FormattedNumber, FormattedDate } from 'react-intl';
  export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
  export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const Slider = () => {
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
  }
const messages = {
      "kz":
      {
        title: item.title1,
        image:item.image1
      },
      "ru":
      {
        title: item.title,
        image:item.image
      },

      

    }
  const _renderItem = ({item}) => {
  {
    return (
      <View
        style={{
          borderWidth: 1,
          padding: 20,
          borderRadius: 20,
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Image source={{uri: item.image}} style={{width: 200, height: 200}} />
        <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>
          {item.title}
        </Text>
      </View>
    );

    
  }

  useEffect(() => {
    getMovies();
  }, []);

  

  return (
    <SafeAreaView style={{
      flex: 1,
      // backgroundColor:'rebeccapurple',
      paddingTop: 5, paddingBottom: 5,
    }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
        <Carousel
          layout={"default"}
        
          data={data}
          sliderWidth={100}
          autoplayInterval={3000}
          itemWidth={ITEM_WIDTH}
          autoplay={true}
          loop={true}
          renderItem={_renderItem}  />
      </View>
    </SafeAreaView>
  );
}; 
}
export default Slider;
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