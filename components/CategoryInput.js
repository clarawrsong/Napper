import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Stars from 'react-native-stars';

export default class CategoryInput extends React.Component {
  render() {
    const starDir = "../node_modules/react-native-stars/example-images/";
    const {name} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.category}>
            <Text style={{fontSize:18}}>{name}  </Text>
            <Stars 
                half={true}
                default={2.5}
                update={(val)=>{this.props.onChange(val,name,"rating")}}
                spacing={6}
                starSize={18}
                count={5}
                fullStar={require(starDir + 'starFilled.png')}
                emptyStar={require(starDir + 'starEmpty.png')}
                halfStar={require(starDir + 'starHalf.png')}/>
        </View>
        <TextInput 
            style={styles.textInput}
            placeholder={`optional ${name} description`}
            maxLength={150}
            multiline={true}
            onChangeText={(text) => this.props.onChange(text,name,"details")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    padding: 15,
    fontSize: 16
  },
  category: {
    flexDirection:'row',
    paddingTop: 10
  },
});