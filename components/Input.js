import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button } from 'react-native';
import Modal from "react-native-modal";
import Stars from 'react-native-stars';

import CategoryInput from './CategoryInput';

export default class Input extends React.Component {
    state = {
        isModalVisible: false,
        submission: {
            author: "",
            finalRating: null,
            description: "",
            comfort: {
                category: "Comfort",
                rating: 2.5,
                details: ""
            },
            location: {
                category: "Location",
                rating: 2.5,
                details: ""
            },
            other: {
                category: "Other",
                rating: 2.5,
                details: ""
            }
        }
    };

    onChange = (text, key1, key2) => {
        this.setSubmission(text, key1, key2);
    }

    calculateOverallRating = () => {
        var newFinalRating
        var ratings = [this.state.comfort.rating, this.state.location.rating, this.state.other.rating];
        const [x,y,z] = ratings;
        newFinalRating = ((x+y+z)/3).toFixed(2);
        this.setSubmission(newFinalRating,"finalRating")
    }

    setSubmission = (text, key1, key2) => {
        var newSubmission = this.state.submission;
        if (key2)
            newSubmission[key1][key2] = text;
        else
            newSubmission[key1] = text;
            
        this.setState({submission: newSubmission})
    }

    toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible})
    }

  render() {
      //fix width of add review
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.toggleModal()}>
            <Text style={styles.addText}> + add review</Text>
        </TouchableOpacity>
        <Modal 
            isVisible={this.state.isModalVisible}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
            scrollOffsetMax={400}
            >
            <View style={styles.modalContainer}>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Name"
                    onChangeText={(text) => this.onChange(text,"name")}
                />
                <TextInput 
                    style={styles.textInput}
                    placeholder="Enter main description"
                    multiline={true}
                    onChangeText={(text) => this.onChange(text,"description")}
                />
                <CategoryInput name="comfort" onChange={this.onChange} />
                <CategoryInput name="location" onChange={this.onChange} />
                <CategoryInput name="other" onChange={this.onChange} />
            </View>
            <Button title={"Submit"}/>
            <Button title={"Cancel"} onPress={() => this.toggleModal()} />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    height: 400,
    borderRadius: 20, 
    padding: 20,
    backgroundColor: 'white',
  },
  textInput: {
    padding: 10,
    fontSize: 16
  },
  addText: {
    paddingRight: 15,
    textAlign: 'right'
  }
});