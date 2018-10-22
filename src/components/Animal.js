import React, { Component } from 'react';
import {
    StyleSheet, View, Image, TouchableOpacity, Text
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Voice from 'react-native-voice';
import Tts from 'react-native-tts';

const felecitations = ['bravooo !', 'très bien !', 'excellent !', 'ohhhhh extraordinaire !', 'bon reponse continuer comme ça !', "très bien vous l'avez fait !"];

export default class Animal extends Component {
    state = {
        nbrBadAnswer: 0
    }
    constructor() {
        super();
        Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
        Voice.onSpeechStart = this.onSpeechStart.bind(this);
        Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
        this.speek = this.speek.bind(this);
    }

    onSpeechStartHandler(k) {
        Voice.start('fr-FR');
        Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
    }
    onSpeechEndHandler() {
        Voice.stop();
    }
    onSpeechResultsHandler = (e) => {
        const isGoodAnswer = this.verifyAnswer(this.props.keywords, e.value);
        if (isGoodAnswer) {
            const randomNumber = Math.floor(Math.random() * 6);
            if (this.state.nbrBadAnswer >= 1) {
                this.speek('je sais que tu me connais');
            }
            this.speek(felecitations[randomNumber]);
        } else {
            if (this.state.nbrBadAnswer > 2) {
                this.speek('tu veux de l\'aide ?,cliquez sur moi pour entendre mon nom');
            } else {
                this.speek('Essayer de nouveau !');
            }
            this.setState({
                nbrBadAnswer: this.state.nbrBadAnswer + 1
            })
        }
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

    speek(name) {
        Tts.speak(name);
    }
    helpMe(name) {
        if (this.state.nbrBadAnswer - 1 > 2) {
            Tts.speak(name);
        }
    }

    render() {
        return (
            <View style={styles.overlayC}>
                <View style={styles.TouchableBtn}>
                    <Animatable.Text animation="swing" iterationCount={3} direction="alternate" style={styles.text} >{this.props.question}</Animatable.Text>
                    <TouchableOpacity onPress={() => { this.onSpeechStartHandler() }}  >
                        <Image source={require('../images/record.png')} style={{ height: 35, width: 35 }} />
                    </TouchableOpacity>
                </View>
                <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: 350 }} >
                    <TouchableOpacity onPress={() => this.helpMe(this.props.name)} >
                        <Image source={this.props.imgUrl} style={styles.image} />
                    </TouchableOpacity>
                </Animatable.View>
                
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
    },
    TouchableBtn: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        backgroundColor: 'rgba(255,255,255,.2)',
        padding: 20,
        marginTop: 50,
    },
    overlayC: {
        backgroundColor: 'rgba(47,163,218,.0)',
    },
    image: {
        alignSelf: 'center',
        resizeMode: "stretch",
        height: 250
    }
});