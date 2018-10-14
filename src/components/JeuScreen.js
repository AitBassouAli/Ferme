import React, { Component } from 'react';
import {StyleSheet,Image, ImageBackground, Dimensions} from 'react-native';
import { Container} from 'native-base';
import Swiper from 'react-native-swiper';
import HeaderComponent from './Header';
import animals from '../fixturs/data';
import Voice from 'react-native-voice';
import Tts from 'react-native-tts';
import Animal from './Animal';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
  }
})

let animalsList = [];
export default class JeuScreen extends Component {

  componentWillMount() {
  const category = this.props.navigation.getParam('category', 'pets');
  animalsList = category == 'pets' 
    ? animals.Pets 
    : category == 'souvages' 
      ? animals.Souvages
      : category == 'birds' 
        ? animals.Birds
        : animals.Aquatic;
  }

  openDrawer() {
    this.props.navigation.navigate('DrawerOpen');
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

getData(){
  return (
    animalsList.list.map((animal) =>
    <Animal key = {animal.name} 
    imgUrl = {animal.img} 
    name = {animal.name}
    keywords = {animal.keys}  
    bgImgUrl = {animals.Pets.backgroundImg} />
  )
  ) 
}
static navigationOptions = {
  drawerIcon: (
      <Image source={require('../images/vache.png')}
          style={{ height: 30, width: 30 }} />
  )
}
  render(){
    return (
      <Container>
        <HeaderComponent openDrawer={() => this.openDrawer()}/>
        <ImageBackground  source={animalsList.backgroundImg} style={{width: width, height: height}}> 
        <Swiper style={styles.wrapper} showsButtons={true}  nextButton= { <Image source={require('../images/next.png')} style={{ height: 35, width: 35}}/>} prevButton= { <Image source={require('../images/prev.png')} style={{ height: 37, width: 37}}/>}>
            {this.getData()}
        </Swiper>
        </ImageBackground>
      </Container>
    );
  }
}
