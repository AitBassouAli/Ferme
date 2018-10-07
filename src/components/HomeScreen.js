import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions
} from 'react-native';
import { Container, Content, Card, Button } from 'native-base';
import Slideshow from 'react-native-slideshow';
import Swiper from 'react-native-swiper';
import HeaderComponent from './Header';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    width: 410,
     height: 280, 
    // marginTop:165
    
  },


  text: {
    color: '#008000',
    fontSize: 28,
    fontWeight: 'bold',
    borderColor : '#008000',
    borderWidth : 2,
    padding : 20,
    paddingLeft : 40,
    paddingRight : 40,
    backgroundColor: 'rgba(255,255,255,.1)',
    marginTop : 90,
  },
  text1 : {
    color: '#008000',
    fontSize: 28,
    fontWeight: 'bold',
    borderColor : '#008000',
    borderWidth : 2,
    padding : 20,
    paddingLeft : 125,
    paddingRight : 40,
    backgroundColor: 'rgba(255,255,255,.1)',
    marginTop : 90,

  },
  overlayC : {
    flex : 1,
    backgroundColor: 'rgba(47,163,218,.2)',
   
  }
})

export default class HomeScreen extends Component {
  openDrawer() {
    this.props.navigation.navigate('DrawerOpen');
}
  render(){
    return (
      <Container>
      <HeaderComponent openDrawer={() => this.openDrawer()}/>
      <Swiper style={styles.wrapper} showsButtons={true}  nextButton= { <Image source={require('../images/next.png')} style={{ height: 35, width: 35}}/>} prevButton= { <Image source={require('../images/prev.png')} style={{ height: 37, width: 37}}/>}>
       
       <ImageBackground  source={require('../images/back.jpg')} style={{width: width, height: height}}> 
        <View style={styles.overlayC}>
        <Text style={styles.text}  onPress={() => this.props.navigation.navigate('Jouer')}>Les Animaux de la ferme</Text>
        <Image source={require('../images/fermeAn.jpg')}style={styles.slide1}/>
        </View>
        </ImageBackground >

        <ImageBackground  source={require('../images/back2.png')} style={{width: width, height: height}}> 
        <View style={styles.slide2}>
          <Text style={styles.text}>Les animaux sauvages</Text>
          <Image source={require('../images/AniSau.jpg')}/>
        </View>
        </ImageBackground >

        <ImageBackground  source={require('../images/back3.jpg')} style={{width: width, height: height}}> 
        <View style={styles.slide3}>
          <Text style={styles.text1}>Les oiseaux</Text>
          <Image source={require('../images/bird.jpg')} onPress={() => this.props.navigation.navigate('Accueil')} style={styles.slide1}/>
        </View>
        </ImageBackground >

        <ImageBackground  source={require('../images/back4.jpg')} style={{width: width, height: height}}> 
        <View style={styles.slide4}>
          <Text style={styles.text}>Les animaux aquatiques</Text>
          <Image source={require('../images/AquaAni.jpg')} onPress={() => this.props.navigation.navigate('Accueil')} style={styles.slide1}/>
        </View>
        </ImageBackground >
      </Swiper>
      </Container>
    );
  }
}
