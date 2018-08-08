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

            <TouchableOpacity> 
                <Text style={styles.touchableText}> NAP TIPS </Text>
            </TouchableOpacity>

        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
    title : {
        padding: 25,
        fontSize: 47,
        fontFamily: 'monoton', 
        color: 'white',
    },
    text: {
        padding: 20,
        fontSize: 14,
        color: '#d3d3d3',
        textAlign: 'center',
    },
    touchableText: {
        paddingTop: 40,
        fontSize: 18,
        color: '#d3d3d3',
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 7,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#262626',
    },
    secondBorder: {
        borderColor: 'white',
        borderWidth: 1,
    }
});
