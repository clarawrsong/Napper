import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen'
import SpotsScreen from './components/SpotsScreen'
import RhodesScreen from './components/RhodesScreen'


export default class App extends React.Component {

  render() {
    return <RootStack />
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Spots: SpotsScreen,
    Rhodes: RhodesScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
