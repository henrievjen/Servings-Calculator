import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';

export class Main extends Component {
    render() {
    const backgroundImage = require('./main-background.png');

    return (
        <ImageBackground source={backgroundImage} style={{width: '100%', height: '100%'}}><View><Text>Servings Calculator</Text></View></ImageBackground>
    );
}
}