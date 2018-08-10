import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, Button } from 'react-native';
import Modal from "react-native-modal";
import Stars from 'react-native-stars';

import CategoryInput from './CategoryInput';

export default class Input extends React.Component {
    state = {
        submission: {
            author: "",
            finalRating: 2.5,
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
        this.calculateOverallRating();
    }

    calculateOverallRating = () => {
        var newFinalRating
        const x = this.state.submission.comfort.rating;
        const y = this.state.submission.location.rating;
        const z = this.state.submission.other.rating;
        newFinalRating = parseFloat(((x+y+z)/3).toFixed(2));

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

  render() {
      const {addRating} = this.props;
      const {modalPresent} = this.props;
      const {toggleModal} = this.props;
    return (
        <Modal 
            style={styles.container}
            isVisible={modalPresent}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000}
            scrollOffsetMax={400}
            >
            <ScrollView style={styles.modalContainer}>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Name"
                    maxLength={30}
                    onChangeText={(text) => this.onChange(text,"author")}
                />
                <TextInput 
                    style={styles.textInput}
                    placeholder="Enter main description"
                    maxLength={250}
                    multiline={true}
                    onChangeText={(text) => this.onChange(text,"description")}
                />
                <CategoryInput name="comfort" onChange={this.onChange} />
                <CategoryInput name="location" onChange={this.onChange} />
                <CategoryInput name="other" onChange={this.onChange} />
            </ScrollView>
            <TouchableOpacity 
                onPress={() => {addRating(this.state.submission); toggleModal()}} 
                style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => toggleModal()} 
                style={styles.button}>
                <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 115,
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
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 7,
    height: 40,
    width: 200,
    borderRadius: 10,
    borderColor: "#0078D7",
    borderWidth: 1,
    backgroundColor: 'white'
  },
  buttonText: {
    fontSize: 16,
    textAlign:'center',
    color: '#0078D7'
  }
});