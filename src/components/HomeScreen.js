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
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    width: 410,
     height: 280, 
    // marginTop:165
    
  },
  slide3: {
    width: 410,
     height: 280, 
    // marginTop:10
    
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
    paddingLeft : 30,
   // paddingRight : 40,
    backgroundColor: 'rgba(255,255,255,.1)',
    marginTop : 90,
    borderRadius:30,
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
   // backgroundColor: 'rgba(255,255,255,.1)',
    marginTop : 90,
    borderRadius:30,

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
static navigationOptions = {
  drawerIcon: (
      <Image source={require('../images/home.png')}
          style={{ height: 40, width: 40, marginLeft : 10,}} />
  )
}
  render(){
    return (
      <Container>
      <HeaderComponent openDrawer={() => this.openDrawer()}/>
      <Swiper style={styles.wrapper} showsButtons={true}  nextButton= { <Image source={require('../images/next.png')} style={{ height: 35, width: 35}}/>} prevButton= { <Image source={require('../images/prev.png')} style={{ height: 37, width: 37}}/>}>
       
       <ImageBackground  source={require('../images/back.jpg')} style={{width: width, height: height}}> 
            <View style={styles.overlayC}>
                <Animatable.Text animation="pulse" easing="ease-in-back" iterationCount="infinite"style={styles.text}>
                   <Text  onPress={() => this.props.navigation.navigate('Les animaux de la ferme')}>
                       <Image source={require('../images/go.png')}style={{ height: 25, width: 25}} />
                       Les Animaux de la ferme
                    </Text>
                 </Animatable.Text>
             <Button style={styles.slide1}  onPress={() => this.props.navigation.navigate('Les animaux de la ferme')}>
                 <Image source={require('../images/fermeAn.jpg')}style={styles.slide1}/>
             </Button>
            </View>
        </ImageBackground >

        <ImageBackground  source={require('../images/back2.png')} style={{width: width, height: height}}> 
          <View style={styles.slide2}>
               <Animatable.Text animation="pulse" easing="ease-in-back" iterationCount="infinite" style={styles.text}>
                   <Text style={styles.text} onPress={() => this.props.navigation.navigate('Les animaux sauvages')}>
                       <Image source={require('../images/go.png')}style={{ height: 25, width: 25}} />
                        Les animaux sauvages</Text>
               </Animatable.Text>
           <Button style={styles.slide3}  onPress={() => this.props.navigation.navigate('Les animaux sauvages')}>
                 <Image source={require('../images/AnimSau.jpg')} style={styles.slide1}/>
           </Button>
         </View>
        </ImageBackground >

        <ImageBackground  source={require('../images/back.jpg')} style={{width: width, height: height, backgroundColor: 'rgba(255,255,255,.0.5)',}}> 
            <View style={styles.slide3}>
              <Animatable.Text animation="pulse" easing="ease-in-back" iterationCount="infinite" style={styles.text1} >
                 <Text style={styles.text1} onPress={() => this.props.navigation.navigate('Les oiseaux')}>
                    <Image source={require('../images/go.png')}style={{ height: 25, width: 25}} />
                     Les oiseaux
                  </Text>
              </Animatable.Text>
              <Button style={styles.slide1}  onPress={() => this.props.navigation.navigate('Les oiseaux')}>
                <Image source={require('../images/bird.jpg')}  style={styles.slide1}/>
              </Button>
             </View>
        </ImageBackground >

        <ImageBackground  source={require('../images/mer.jpg')} style={{width: width, height: height}}> 
        <View style={styles.slide4}>
        <Animatable.Text animation="pulse" easing="ease-in-back" iterationCount="infinite" style={styles.text} >
          <Text style={styles.text} onPress={() => this.props.navigation.navigate('Les animaux aquatiques')}>
          <Image source={require('../images/go.png')}style={{ height: 25, width: 25}} />
          Les animaux aquatiques</Text>
          </Animatable.Text>
          <Button style={styles.slide3}  onPress={() => this.props.navigation.navigate('Les animaux aquatiques')}>
          <Image source={require('../images/AquaAni.jpg')} style={styles.slide1}/>
          </Button>
        </View>
        </ImageBackground >
      </Swiper>
      </Container>
    );
  }
}
