import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Font, LinearGradient } from 'expo';

import joyceClark from '../exampleRatings/joyceClark'
import joyceDuff from '../exampleRatings/joyceDuff'
import joyceRhodes from '../exampleRatings/joyceRhodes'
import claraRhodes from '../exampleRatings/claraRhodes'

export default class SpotsScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'monoton': require('../assets/fonts/Monoton/Monoton-Regular.ttf'),
    });

    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <LinearGradient 
        colors={['#e8e8e8', '#7f8291']} 
        style={styles.container}>
      {
        this.state.fontLoaded ? 
          <Text style={styles.title}> SPOTS </Text> : null
      }

        <Text style={styles.university}> Cornell University </Text>

        <TouchableOpacity onPress={() => 
          this.props.navigation.navigate('Ratings', {
            title:'Clark Hall', 
            description:'Next to the physics learning center (2nd floor)',
            ratingsList: [joyceClark]
            })}>
          <Text style={styles.text}> Clark Hall </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => 
          this.props.navigation.navigate('Ratings', {
              title:'Duffield Hall', 
              description:'Directly above the entrance (3rd? floor)',
              ratingsList: [joyceDuff]
              })}>
          <Text style={styles.text}> Duffield Hall </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => 
          this.props.navigation.navigate('Ratings', {
            title:'Frank H. T. Rhodes Hall', 
            description:'Entrance to Rhodes from Duffield (? floor)',
            ratingsList: [joyceRhodes, claraRhodes]
            })}>
          <Text style={styles.text}> Frank H. T. Rhodes Hall </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => 
          this.props.navigation.navigate('Ratings', {
              title:'Sage', 
              description:'Library',
              })}>
          <Text style={styles.text}> Sage Hall </Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    padding: 25,
    fontSize: 32,
    fontFamily: 'monoton',
  },
  university: {
    padding: 10,
    fontSize: 22,
  },
  text: {
    paddingTop: 10,
    fontSize: 18,
    color: '#525563'
  },
});
