import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font, LinearGradient } from 'expo';

export default class HomeScreen extends React.Component {

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
        colors={['#f5f7fa', '#bac4d3']} 
        start={{ x: 0.1, y: 0.1 }}
        style={styles.container}>
      {
        this.state.fontLoaded ? <Text style={{fontFamily: 'monoton'}} > SPOTS </Text> : null
      }
        
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
