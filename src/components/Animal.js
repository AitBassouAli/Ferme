import React, { Component } from 'react';
import {
    StyleSheet, View, Image, TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Voice from 'react-native-voice';
import Tts from 'react-native-tts';

export default class Animal extends Component {

    constructor() {
        super();
        Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
        Voice.onSpeechStart = this.onSpeechStart.bind(this);
        Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
        sayAnimalName = this.sayAnimalName.bind(this);
    }

    onSpeechStartHandler(k) {
        Voice.start('fr-FR');
        Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
    }
    onSpeechEndHandler() {
        Voice.stop();
        this.setState({
            results: ""
        });
    }
    onSpeechResultsHandler = (e) => {
        //alert(this.props.keywords);
        const isGoodAnswer = this.verifyAnswer(this.props.keywords, e.value);
        if (isGoodAnswer) {
            alert("goooood ");
        } else {
            alert("nooooooo !!");
        }
        this.setState({
            results: e.value
        });
    };
    verifyAnswer(animalKeyWrds, answer) {
        for (let i = 0; i < animalKeyWrds.length; i++) {
            for (let j = 0; j < answer.length; j++) {
                if (animalKeyWrds[i] == answer[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    onSpeechStart(e) {

    }

    sayAnimalName(name) {
        Tts.speak(name);
    }

    render() {
        return (
            <View style={styles.overlayC}>
                <Animatable.Text animation="swing" iterationCount={3} direction="alternate" style={styles.text}>De quoi s'agit-il?</Animatable.Text>
                <TouchableOpacity onPress={() => this.sayAnimalName(this.props.name)} onLongPress={() => this.onSpeechStartHandler()} style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: 350 }}>
                    <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" >
                        <Image source={this.props.imgUrl} style={styles.image} />
                    </Animatable.View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        padding: 20,
        backgroundColor: 'rgba(255,255,255,.2)',
        marginTop: 50,
        margin: 10
    },
    overlayC: {
        backgroundColor: 'rgba(47,163,218,.0)',
    },
    image: {
        alignSelf: 'center',
        resizeMode: "stretch"
    }
});