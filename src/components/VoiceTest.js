
import React, {Component} from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Text, TouchableHighlight, TouchableOpacity, Button } from 'react-native';
import { Header, Left, Right, Icon, Item, Input } from 'native-base';
import Voice from 'react-native-voice';
import ImageSliderz from 'react-native-image-slideshow';

export default class VoiceTest extends Component {

  state = {
    results: []
}
constructor() {
    super();
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
}

onSpeechStartHandler() {
    Voice.start('en-US');
}
onSpeechEndHandler() {
    Voice.stop();
    this.setState({
        results: ""
    });
}
onSpeechResultsHandler(e) {
    this.setState({
        results: e.value
    });
}
onSpeechStart(e) {
  
}

  render() {
    const {results} = this.state;
    return (
      <View>
        <ImageSliderz 
        dataSource={[
          { url:require('../images/fermeAn.jpg') },
          { url:require('../images/AniSau.jpg') },
          { url:require('../images/AquaAni.jpg') }
        ]}/>
       <Button style={styles.buttonIcon}
        onPress={this.onSpeechStartHandler.bind(this)}
        title="Start"></Button>
       
        {results.map((result) => <Text style={styles.transcript}> {result}</Text>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  transcript: {
    textAlign: 'center',
    color: 'red',
  },
  buttonIcon: {
    backgroundColor: 'red',
},
});
