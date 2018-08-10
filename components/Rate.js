import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SectionList } from 'react-native';
import Stars from 'react-native-stars';

export default class Rate extends React.Component {
    constructor() {
        super();
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
            this.setState({data: [
                {title:`Comfort - ${rating.comfort.rating}/5`, data:[rating.comfort]}, 
                {title:`Location - ${rating.location.rating}/5`, data:[rating.location]},
                {title:`Other - ${rating.other.rating}/5`, data:[rating.other]},
            ]});
        
        this.setState({isExpanded: !this.state.isExpanded})
    }

  render() {
    console.log("")
    const {rating} = this.props;
    const starDir = "../node_modules/react-native-stars/example-images/";
    var author = (rating.author)? rating.author : "Anon.";
    return (
      <View style={styles.container}>
        <Text style={styles.ratingText}> {
            <Stars
                display={rating.finalRating}
                spacing={6}
                count={5}
                starSize={16}
                backingColor='white'
                fullStar={require(starDir + 'starFilled.png')}
                emptyStar={require(starDir + 'starEmpty.png')}
                halfStar={require(starDir + 'starHalf.png')}/>}
            {rating.finalRating} / 5
        </Text>
        {rating.description? 
            <Text style={styles.text}>{rating.description}</Text> : null}
        <Text style={styles.author}>- {author}</Text>
        <TouchableOpacity onPress={() => this.handlePress()}>
            <Text style={{textAlign: 'center', color:'#bcb7ad'}}>
                {this.state.isExpanded? "press to hide" : "press to expand"}
            </Text>
        </TouchableOpacity>
        <SectionList 
            style={styles.details}
            ref='more'
            sections={this.state.data}
            renderSectionHeader={({section}) =>
                <Text style={[styles.category, {fontWeight: 'bold'}]}>
                    {section.title}
                </Text>
            }
            renderItem={({item}) => 
                <Text style={styles.detailsText}>{item.details}</Text>
            }
            keyExtractor={(item, index) => index}/>
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
  ratingText: {
    paddingLeft: 6,
    fontSize: 15,
    fontWeight:'bold'
  },
  text: {
    padding: 5,
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
