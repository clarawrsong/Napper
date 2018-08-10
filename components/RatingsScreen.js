import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Font, LinearGradient } from 'expo';

import RatingsList from './RatingsList';


export default class RhodesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      modalPresent: false,
      ratingsList: props.navigation.getParam('ratingsList', null),
    }
  }

  toggleModal = () => {
    this.setState({modalPresent: !this.state.modalPresent})
  }

  addRating = (submission) => {
    const {ratingsList} = this.state;
    this.setState({ratingsList: [submission,...ratingsList]});
  }

  async componentDidMount() {
    await Font.loadAsync({
      'monoton': require('../assets/fonts/Monoton/Monoton-Regular.ttf'),
    });

    this.setState({ fontLoaded: true })
  }

  render() {
    const locationTitle = this.props.navigation.getParam('title', "")
    const locationDescription = this.props.navigation.getParam('description', "")
    return (
      <LinearGradient 
        colors={['#fdfcfb', '#e2d1c3']} 
        style={styles.container}>
      {this.state.fontLoaded ? 
          <Text style={styles.title}>{locationTitle}</Text> : null
      }
        <Text style={styles.text}>{locationDescription}</Text>
        
        <RatingsList 
          ratingsList={this.state.ratingsList} 
          modalPresent={this.state.modalPresent}
          toggleModal={this.toggleModal}
          addRating={this.addRating}/>
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
