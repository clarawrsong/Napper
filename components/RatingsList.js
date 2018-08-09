import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import Rate from './Rate';

export default class Ratings extends React.Component {

  renderRatings = (item) => {
    return (
        <Rate rating={item} />
    );
  }

  render() {
    return (
      <ScrollView>
          {this.props.ratingsList.map(this.renderRatings)}
      </ScrollView>
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
