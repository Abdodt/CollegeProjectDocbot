import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
    Router,
    Scene,
    Stack,
}
from 'react-native-router-flux';
import Login from './src/Components/login.js';
import Chatbot from './src/Components/chatbot.js'

export default class App extends Component {
    render() {
        return ( <Router>
            <Stack key = "root"
            style = {
                { paddingTop: 20 }
            } >
            <Scene key = "login"
            component = { Login }
            wrap = { false }
            hideNavBar = { true }
            initial ={ true }
            />
            <Scene key = "thechat"
            wrap = { false }
            component = { Chatbot }
            hideNavBar = { true }
            />
            </Stack>
            </Router>
        );
    }
}
