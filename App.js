
import React from 'react';
import { render } from 'react-dom';
import {  Text, View } from 'react-native';
import FacebookScreen from './Screens/fb';
import InstagramScreen from './Screens/insta';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}
}
const TabNavigator=createBottomTabNavigator({
  fb:{screen:FacebookScreen},
  insta:{screen:InstagramScreen}
})
const AppContainer=createAppContainer(TabNavigator)
