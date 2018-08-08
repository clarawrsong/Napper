import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
            colors={['#444444', '#232323']} 
            start={{ x: 0.1, y: 0.1 }}
            style={[styles.container1, styles.linearGradient]}
        >
            <View style={styles.secondBorder}>
            <View style={styles.container2}>
                {this.state.fontLoaded ? 
                    <Text style={styles.title}> NAPPER </Text> : null
                }
            </View>
            </View>

            <Text style={styles.text}> 
                For the sleep deprieved, insomniacs, night owls, {"\n"} and the nappers
            </Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Spots')}> 
                <Text style={styles.touchableText}> NAP SPOTS </Text>
            </TouchableOpacity>
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
    title : {
        fontFamily: 'monoton', 
        fontSize: 47,
        color: 'white',
        padding: 25,
    },
    text: {
        color: '#d3d3d3',
        fontSize: 14,
        padding: 20,
        textAlign: 'center',
    },
    touchableText: {
        color: '#d3d3d3',
        paddingTop: 40,
        fontSize: 18,
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        margin: 7,
        backgroundColor: '#262626',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1
    },
    secondBorder: {
        borderColor: 'white',
        borderWidth: 1,
    }
});
