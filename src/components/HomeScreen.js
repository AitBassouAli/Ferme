import React, { Component } from 'react';
import {StyleSheet,Image} from 'react-native';
import { Container} from 'native-base';
import Swiper from 'react-native-swiper';
import HeaderComponent from './Header';
import animals from '../fixturs/data'
import Category from './Category';
const styles = StyleSheet.create({
  wrapper: {
  }
})

export default class HomeScreen extends Component {
  openDrawer() {
    this.props.navigation.openDrawer();
}
static navigationOptions = {
  drawerIcon: (
      <Image source={require('../images/home.png')}
          style={{ height: 40, width: 40, marginLeft : 10,}} />
  )
}
navigate(url){
  this.props.navigation.navigate(url);
}
  render(){
    const categories = animals.catygories.map((item) =>
      <Category key = {item.ref}
        refe = {item.ref}
        imgUrl = {item.img} 
        name = {item.name}
        bgImgUrl = {item.backgroundImg} 
        navigate = {(url)=> this.navigate(url) }/>
      )
    return (
      <Container>
      <HeaderComponent openDrawer={() => this.openDrawer()}/>
      <Swiper style={styles.wrapper} showsButtons={true}  nextButton= { <Image source={require('../images/next.png')} style={{ height: 35, width: 35}}/>} prevButton= { <Image source={require('../images/prev.png')} style={{ height: 37, width: 37}}/>}>
        {categories}
      </Swiper>
      </Container>
    );
  }
}
