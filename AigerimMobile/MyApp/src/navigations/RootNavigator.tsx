import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePageTabNavigator from "./HomePageTabNavigator";
import NavigationNames from "./NavigationNames";
import { useLocalization } from "../localization";
import {store} from '../store/store'
 import {Provider} from 'react-redux';
const Stack = createStackNavigator();

export default function() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"Root"} component={HomePageTabNavigator} />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
