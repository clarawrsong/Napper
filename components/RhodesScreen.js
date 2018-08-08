import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Font, LinearGradient } from 'expo';

import Ratings from './Ratings';
import joyceRhodes from '../exampleRatings/joyceRhodes'
import  claraRhodes from '../exampleRatings/claraRhodes'


export default class RhodesScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      fontLoaded: false,
      ratingsList: [joyceRhodes, claraRhodes],
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'monoton': require('../assets/fonts/Monoton/Monoton-Regular.ttf'),
    });

    this.setState({ fontLoaded: true })
  }

  render() {
      console.log(joyceRhodes)
    return (
      <LinearGradient 
        colors={['#e8e8e8', '#7f8291']} 
        style={styles.container}>
      {
        this.state.fontLoaded ? 
          <Text style={styles.title}> Frank H. T. Rhodes Hall </Text> : null
      }
        <Ratings ratingsList={this.state.ratingsList}/>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    padding: 25,
    fontSize: 28,
    fontFamily: 'monoton',
    textAlign: 'right',
  },
});
