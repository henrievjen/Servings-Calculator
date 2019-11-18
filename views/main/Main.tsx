import React, { Component } from 'react';
import { ImageBackground } from 'react-native';

export class Main extends Component {
    render() {
    const backgroundImage = require('./main-background.png');

    return (
        <ImageBackground source={backgroundImage} style={{width: '100%', height: '100%'}}></ImageBackground>
    );
}
}