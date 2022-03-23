import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView } from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class Slider extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          data: [],
          isLoading: true,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
        ]
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
    componentDidMount() 
    {
      this.getMovies();
    }

    _renderItem({item,index})
    {
        return (
          <View style={{
              //backgroundColor:'floralwhite',
              borderRadius: 5,
              borderBottomColor:"black",
              height: 150,
              padding: 50,
              marginLeft: 5,
              marginRight: 10, }}>
            <Text style={{fontSize: 30}}>{item.title1}</Text>
            <Text>{item.title2}</Text>
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, 
         // backgroundColor:'rebeccapurple',
           paddingTop: 5, paddingBottom:5,}}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.data}
                  sliderWidth={100}
                  autoplayInterval={3000}
                  itemWidth={335}
                  autoplay={true}
                  loop={true}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

