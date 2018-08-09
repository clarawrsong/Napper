import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Font, LinearGradient } from 'expo';

import Input from './Input';
import RatingsList from './RatingsList';
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

  addRating = () => {

  }

  async componentDidMount() {
    await Font.loadAsync({
      'monoton': require('../assets/fonts/Monoton/Monoton-Regular.ttf'),
    });

    this.setState({ fontLoaded: true })
  }

  render() {
      console.log(this.state.ratingsList)
    return (
      <LinearGradient 
        colors={['#fdfcfb', '#e2d1c3']} 
        style={styles.container}>
      {
        this.state.fontLoaded ? 
          <Text style={styles.title}> Frank H. T. Rhodes Hall </Text> : null
      }
        <Text style={styles.text}> Entrance to Rhodes from Duffield (?th floor) </Text>
        <Input />
        <RatingsList ratingsList={this.state.ratingsList}/>
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
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 28,
    fontFamily: 'monoton',
    textAlign: 'right',
  },
  text: {
    padding: 8,
  }
});
