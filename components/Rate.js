import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Font } from 'expo';

export default class Rate extends React.Component {

  render() {
    const {rating} = this.props

    return (
      <View style={styles.container}>
          <Text style={styles.text}>{rating.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'white',
  },
  text: {
    padding: 10,

  },
});
