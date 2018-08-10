import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

import Input from './Input';
import Rate from './Rate';

export default class Ratings extends React.Component {

  render() {
    const {ratingsList} = this.props
    const {modalPresent} = this.props;
    const {toggleModal} = this.props;
    const {addRating} = this.props;
    
    return (
      <View>
        <TouchableOpacity onPress={() => toggleModal()}>
        <Text style={{paddingLeft: 10}}>+ add review</Text>
        </TouchableOpacity>

        {modalPresent? 
          <Input 
            addRating={addRating} 
            toggleModal={toggleModal} 
            modalPresent={modalPresent}/> : null
        }
        <FlatList
          data={modalPresent? null : ratingsList}   //big stars problem!
          renderItem={({item}) => <Rate rating={item}/>} 
          keyExtractor={(item, index) => `${index}`}
          />
      </View>
    );
  }
}
