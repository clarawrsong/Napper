import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Stars from 'react-native-stars';

export default class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
            data: [],
        }
    }

    handlePress() {
        const {rating} = this.props;
        if (this.state.isExpanded) 
            this.setState({data: []})
        else 
            this.setState({data: [rating.comfort, rating.location, rating.other]});
        
        this.setState({isExpanded: !this.state.isExpanded})
    }

  render() {
    const {rating} = this.props
    return (
      <View style={styles.container}>
        <Stars
            display={rating.finalRating}
            spacing={7}
            count={5}
            starSize={16}
            backingColor='white'
            fullStar={require('../node_modules/react-native-stars/example-images/starFilled.png')}
            emptyStar={require('../node_modules/react-native-stars/example-images/starEmpty.png')}
            halfStar={require('../node_modules/react-native-stars/example-images/starHalf.png')}/>
        <Text style={styles.text}>{rating.description}</Text>
        <Text style={styles.author}> - {rating.author}</Text>
        <TouchableOpacity onPress={() => this.handlePress()}>
            <Text style={{textAlign: 'center', color:'#bcb7ad'}}>
                {this.state.isExpanded? "press to hide" : "press to expand"}
            </Text>
        </TouchableOpacity>
        <FlatList 
            style={styles.details}
            ref='more'
            data={this.state.data}
            renderItem={({item}) => 
            <View>
                <Text style={[styles.category, {fontWeight: 'bold'}]}>
                    {item.category} - {item.rating}/5
                </Text>
                <Text style={styles.detailsText}>{item.details}</Text>
            </View>
            }>
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    paddingTop: 10,
    margin: 10,
    marginBottom: 0,
    backgroundColor: 'white',
  },
  text: {
    padding: 7,
    alignSelf: 'flex-start',
    fontSize: 15,
  },
  author: {
    paddingRight: 8,
    textAlign: 'right'
  },
  details: {
    padding: 5,
    paddingTop: 0,
    paddingLeft: 15,
  },
  detailsText: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: "#3d3a30",
    fontSize: 14,
  },
});
