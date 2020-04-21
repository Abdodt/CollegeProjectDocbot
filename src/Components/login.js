
import React, { Component } from 'react';
import{
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  ScrollView
 }
 from 'react-native';

import {
  Actions
} from 'react-native-router-flux';


export default class Login extends Component {

state = {
  name: '',
};

onPress=()=>{
  if (this.state.name == '') {
     alert('Please enter Username');
  }
  else {
    Actions.thechat(
      {
        name: this.state.name,
      });
}};

onChangeText=(username)=>{
  this.setState({
    name : username,
  });
};

  render() {
    return (
    <SafeAreaView style={styles.safecontainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inner}>
      <ImageBackground
      source={require('../Images/bgb.jpg')}
      style={styles.logincontainer}>
      <ScrollView>
        <Text style={styles.heading1}>
            Docbot
        </Text>
        <Image
        source={require('../Images/dr.png')}
        style={styles.img}
        />
        <TextInput
          name ='uname'
          style={styles.textbox}
          placeholder='Username'
          placeholderTextColor = '#000'
          onChangeText = {this.onChangeText}
          value = {this.state.name}
        />
        <TouchableOpacity
        style={styles.buttn}
         onPress={this.onPress}
        >
        <Text style = {styles.buttText}>Start</Text>
        </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
      </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  safecontainer: {
        flex: 1
    },
    inner: {
        flex: 1,
        justifyContent: "flex-end",
    },
  logincontainer:{
    width:'100%',
    height: '100%',
  },
  heading1:{
    textAlign: 'center',
    marginTop: 22,
    fontSize:33,
    textDecorationLine: 'underline',
    textDecorationStyle: 'dashed',
    fontFamily: 'Arial',
    fontWeight:'bold',
    color: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 1,
  },
  img:{
    width:250,
    height: 250,
    marginTop: 40,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
 },
  textbox:{
    height: 55,
    fontSize: 16,
    width: 320,
    marginTop: 32,
    marginLeft: 20,
    borderWidth: 3,
    borderColor: '#b3e0ff',
    borderRadius: 18,
    color: '#000',
    backgroundColor: '#ccebff',
    paddingHorizontal:15,
    paddingVertical: 10
  },
  buttn:{
    width: 110,
    height:55,
    marginTop:10,
    backgroundColor: '#004d80',
    borderRadius: 18,
    marginLeft: 230,
    borderWidth: 3,
    borderColor: '#000',
    paddingHorizontal:36,
    paddingTop:13,
    opacity: 0.9
  },
    buttText:{
    color: 'white',
    fontWeight: '300',
    }
})
