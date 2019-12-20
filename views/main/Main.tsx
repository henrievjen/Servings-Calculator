import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Picker, TextInput } from 'react-native';

export class Main extends Component {
  render() {
  const backgroundImage = require('./main-background.png');
  const styles = StyleSheet.create({
    backgroundImage: {
      width: '100%',
      height: '100%'
    },
    headContainer: {
      width: '100%',
      height: '20%',
      top: '10%'
    },
    headBox: {
      width: '70%',
      height: 'auto',
      backgroundColor: 'white',
      borderRadius: 10,
      paddingVertical: 25,
      alignSelf: 'center',
    },
    ingredientsContainer: {
      width: '100%',
      height: '60%',
      marginTop: 60
    },
    ingredient: {
      width: '70%',
      height: 70,
      backgroundColor: '#E1E6FF',
      borderRadius: 50,
      alignSelf: 'center',
      flexDirection: "row"
    },
    addIngredient: {
      width: '70%',
      height: 70,
    },
    pickerIngredient: {
      width: '35%',
      height: '100%',
      backgroundColor: '#E1E6FF',
      marginLeft: '10%'
    },
    pickerMeasure: {
      width: '35%',
      height: '100%',
      backgroundColor: '#E1E6FF'
    },
    quantityInput: {
      width: '20%',
      height: '100%'
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'black',
      alignSelf: 'center'
    }
  });

    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.headContainer}>
          <View style={styles.headBox}>
            <Text style={styles.text}>Recipe</Text>
          </View>
        </View>
        <View style={styles.ingredientsContainer}>
          <View style={styles.ingredient}>
            <Picker style={styles.pickerIngredient}>
              <Picker.Item label="Apples" value="apples" />
              <Picker.Item label="Eggs" value="eggs" />
              <Picker.Item label="Milk" value="milk" />
              <Picker.Item label="Sugar" value="sugar" />
            </Picker>
            <Picker style={styles.pickerMeasure}>
              <Picker.Item label="Count" value="count" />
              <Picker.Item label="Cups" value="cups" />
              <Picker.Item label="Ounces" value="ounces" />
              <Picker.Item label="Tablespoons" value="tablespoons" />
              <Picker.Item label="Teaspoons" value="teaspoons" />
            </Picker>
            <TextInput style={styles.quantityInput} keyboardType={'numeric'} defaultValue={"1"} selectTextOnFocus />
          </View>
          <View style={styles.addIngredient}>

          </View>
        </View>
      </ImageBackground>
    );
}
}