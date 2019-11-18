import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export class Main extends Component {
    render() {
    const backgroundImage = require('./main-background.png');
    const styles = StyleSheet.create({
        backgroundImage: {
            width: '100%',
            height: '100%'
        },
        container: {
            width: '100%',
            height: 'auto',
            top: '10%'
        },
        headBox: {
            width: '70%',
            height: 'auto',
            backgroundColor: 'white',
            borderRadius: 10,
            paddingVertical: 25,
            alignSelf: 'center'
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
            <View style={styles.container}>
                <View style={styles.headBox}>
                    <Text style={styles.text}>Recipe</Text>
                </View>
            </View>
        </ImageBackground>
    );
}
}