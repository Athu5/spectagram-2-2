import React, { Component } from 'react';
import { Text, View } from 'react-native';

let customFonts = {
'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class Feed extends Component {
constructor(props) {
super(props);
this.state = {
fontsLoaded: false,
        };
    }
}