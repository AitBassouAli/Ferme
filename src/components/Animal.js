import React, { Component } from 'react';
import {
    StyleSheet,View,Image,ImageBackground,Dimensions,TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Voice from 'react-native-voice';
import Tts from 'react-native-tts';

const { width, height } = Dimensions.get('window');

export default class Animal extends Component {

    constructor() {
        super();
        Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
        Voice.onSpeechStart = this.onSpeechStart.bind(this);
        Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
        sayAnimalName = this.sayAnimalName.bind(this);
      }

    onSpeechStartHandler() {
        Voice.start('fr-FR');
    }
    onSpeechEndHandler() {
        Voice.stop();
        this.setState({
            results: ""
        });
    }
    onSpeechResultsHandler= (e) => {
        this.setState({
            results: e.value
        });
        alert(e.value);
    };
    onSpeechStart(e) {
    
    }
    
    sayAnimalName(name){
        Tts.speak(name);
    }
    
    render() {
        return (
            <ImageBackground  source={this.props.bgImgUrl} style={{width: width, height: height}}> 
            <View style={styles.overlayC}>
            <Animatable.Text animation="swing" iterationCount={3} direction="alternate" style={styles.text1}>De quoi s'agit-il?</Animatable.Text>
            <TouchableOpacity  onPress = {() => this.sayAnimalName(this.props.name)} onLongPress = {() => this.onSpeechStartHandler()}>
            <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center',height:400, width:350 ,marginTop:'-30%'}}>
            <Image source={this.props.imgUrl}/>
            </Animatable.Text>
            </TouchableOpacity>
            </View>
          </ImageBackground >
        )
    }
}

const styles = StyleSheet.create({
    text1 : {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
       // borderColor : '#008000',
       // borderWidth : 2,
        padding : 20,
        paddingLeft : 95,
        paddingRight : 40,
        backgroundColor: 'rgba(255,255,255,.1)',
        marginTop : 90,
    
    },
    overlayC : {
        flex : 1,
        backgroundColor: 'rgba(47,163,218,.2)',
       
    }
});