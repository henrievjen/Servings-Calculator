import React, { Component } from 'react';
import { View, ScrollView, Text, ImageBackground, Image, StyleSheet, Picker, TextInput, TouchableOpacity } from 'react-native';

export class Main extends Component {
  state = {
    ingredients: [
      {
        ingredient: 'apples',
        measure: 'count',
        quantity: 1
      }
    ],
    recipeName: 'Recipee'
  };

  render() {
    const backgroundImage = require('./main-background.png');
    const plusSymbol = require('./images/plus-symbol.png');

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
        textAlign: 'center',
        fontSize: 28
      },
      ingredientsContainer: {
        width: '100%',
        height: '40%',
        marginTop: 60
      },
      ingredient: {
        width: '70%',
        height: 70,
        backgroundColor: '#E1E6FF',
        borderRadius: 50,
        alignSelf: 'center',
        flexDirection: "row",
        marginBottom: 10
      },
      addIngredient: {
        width: '70%',
        height: 70,
        alignSelf: 'center',
        marginTop: 10
      },
      pickerIngredient: {
        width: '25%',
        height: '100%',
        backgroundColor: '#E1E6FF',
        marginLeft: '10%'
      },
      pickerMeasure: {
        width: '45%',
        height: '100%',
        backgroundColor: '#E1E6FF'
      },
      quantityInput: {
        width: '20%',
        height: '100%'
      },
      plusSymbol: {
        height: 60,
        width: 60,
        alignSelf: 'flex-end'
      },
      notes: {
        width: '70%',
        height: 70,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        textAlignVertical: 'top',
        padding: 5,
        marginTop: 10
      },
      saveButton: {
        marginTop: '20%',
        width: '50%',
        height: '8%',
        borderRadius: 10,
        backgroundColor: '#50AD6A',
        alignSelf: 'center'
      },
      text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center'
      }
    });

    const fullIngredient = this.state.ingredients.map((data, id) => {
      return (
        <View style={styles.ingredient} key={id}>
          <Picker 
            style={styles.pickerIngredient} 
            selectedValue={data.ingredient} 
            onValueChange={(itemValue) => {
              let tempState = this.state;
              tempState.ingredients[id].ingredient = itemValue;
              this.setState(tempState);              
            }}>
            <Picker.Item label="Apples" value="apples" />
            <Picker.Item label="Eggs" value="eggs" />
            <Picker.Item label="Milk" value="milk" />
            <Picker.Item label="Sugar" value="sugar" />
          </Picker>
          <Picker
            style={styles.pickerMeasure}
            selectedValue={data.measure}
            onValueChange={(itemValue) => {
              let tempState = this.state;
              tempState.ingredients[id].measure = itemValue;
              this.setState(tempState);              
            }}>
            <Picker.Item label="Count" value="count" />
            <Picker.Item label="Cups" value="cups" />
            <Picker.Item label="Ounces" value="ounces" />
            <Picker.Item label="Tablespoons" value="tablespoons" />
            <Picker.Item label="Teaspoons" value="teaspoons" />
          </Picker>
          <TextInput
            style={styles.quantityInput}
            keyboardType={'numeric'}
            defaultValue={"1"}
            selectTextOnFocus
            onChangeText={(itemValue) => {
              let tempState = this.state;
              tempState.ingredients[id].quantity = parseInt(itemValue);
              this.setState(tempState);              
            }} />
        </View>
      )
    })

    const addIngredient = () => {
      let tempState = this.state.ingredients;
      tempState.push({ingredient: 'apples', measure: 'count', quantity: 1});
      this.setState(tempState);
    }

    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.headContainer}>
          <TextInput style={styles.headBox} value={this.state.recipeName} selectTextOnFocus onChangeText={(itemValue) => {
              let tempState = this.state;
              tempState.recipeName = itemValue;
              this.setState(tempState);
            }} />
        </View>
        <ScrollView style={styles.ingredientsContainer}>
            {fullIngredient}
          <TouchableOpacity style={styles.addIngredient} onPress={addIngredient}>
            <Image source={plusSymbol} style={styles.plusSymbol} />
          </TouchableOpacity>
        </ScrollView>
        <TextInput style={styles.notes} placeholder={"Notes..."} />
        <TouchableOpacity style={styles.saveButton}>
          <Text style={{paddingVertical: '5%', textAlign: 'center', textAlignVertical: 'center', color: 'white', fontSize: 30}}>Save</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}