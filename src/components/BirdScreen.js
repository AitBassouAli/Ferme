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
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
   // width: 500,
    // height: 380, 
    // marginTop:165
   // marginLeft: 70
    
  },
  slide2: {
  
  },
  slide3: {
 
  },
  slide4: {

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
})

export default class BirdScreen extends Component {
  openDrawer() {
    this.props.navigation.navigate('DrawerOpen');
}
static navigationOptions = {
  drawerIcon: (
      <Image source={require('../images/pbird.png')}
          style={{ height: 30, width: 30 }} />
  )
}
  render(){
    return (
      <Container>
         <HeaderComponent openDrawer={() => this.openDrawer()}/>
      <Swiper style={styles.wrapper} showsButtons={true}  nextButton= { <Image source={require('../images/next.png')} style={{ height: 35, width: 35}}/>} prevButton= { <Image source={require('../images/prev.png')} style={{ height: 37, width: 37}}/>}>
       
       <ImageBackground  source={require('../images/b1.jpg')} style={{width: width, height: height}}> 
        <View style={styles.overlayC}>
        <Animatable.Text animation="swing" iterationCount={3} direction="alternate" style={styles.text1}>De quoi s'agit-il?</Animatable.Text>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center', marginTop:-40,height:400, width:350, marginLeft:45 }}>
        <Image source={require('../images/peroquet.png')}/>
        </Animatable.Text>
        </View>
        </ImageBackground >

        <ImageBackground  source={require('../images/b1.jpg')} style={{width: width, height: height}}> 
        <View style={styles.overlayC}>
        <Animatable.Text animation="swing" iterationCount={3} direction="alternate" style={styles.text1}>De quoi s'agit-il?</Animatable.Text>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ marginTop:-160,textAlign: 'center',height:500, width:350, marginLeft:28 }}>
        <Image source={require('../images/Pelican.png')}/>
        </Animatable.Text>
        </View>
        </ImageBackground >

          <ImageBackground  source={require('../images/b1.jpg')} style={{width: width, height: height}}> 
        <View style={styles.overlayC}>
        <Animatable.Text animation="swing" iterationCount={3} direction="alternate" style={styles.text1}>De quoi s'agit-il?</Animatable.Text>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ marginTop:-140,textAlign: 'center',height:480, width:450, marginLeft:-10 }}>
        <Image source={require('../images/flamantRose.png')}/>
        </Animatable.Text>
        </View>
        </ImageBackground >

          <ImageBackground  source={require('../images/b1.jpg')} style={{width: width, height: height}}> 
        <View style={styles.overlayC}>
        <Animatable.Text animation="swing" iterationCount={3} direction="alternate" style={styles.text1}>De quoi s'agit-il?</Animatable.Text>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ marginTop:-125,textAlign: 'center',height:450, width:350, marginLeft:28 }}>
        <Image source={require('../images/corbeau.png')}/>
        </Animatable.Text>
        </View>
        </ImageBackground >

           <ImageBackground  source={require('../images/b1.jpg')} style={{width: width, height: height}}> 
        <View style={styles.overlayC}>
        <Animatable.Text animation="swing" iterationCount={3} direction="alternate" style={styles.text1}>De quoi s'agit-il?</Animatable.Text>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ marginTop:5,textAlign: 'center',height:450, width:350, marginLeft:40 }}>
        <Image source={require('../images/inseparables.png')}/>
        </Animatable.Text>
        </View>
        </ImageBackground >

    
      </Swiper>
     
      </Container>
    );
  }
}