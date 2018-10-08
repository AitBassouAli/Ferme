
import React, {Component} from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Text, TouchableHighlight, TouchableOpacity, Button } from 'react-native';
import { Header, Left, Right, Icon, Item, Input } from 'native-base';
import Voice from 'react-native-voice';
import ImageSliderz from 'react-native-image-slideshow';


export default class JeuScreen extends Component {

  render() {
    return (
       <ImageSliderz 
        dataSource={[
          { url:require('../images/fermeAn.jpg') },
          { url:require('../images/AniSau.jpg') },
          { url:require('../images/AquaAni.jpg') }
        ]}/>
    );
  }
}

