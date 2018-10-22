import React, { Component } from 'react';
import { StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import { Container } from 'native-base';
import Swiper from 'react-native-swiper';
import HeaderComponent from './Header';
import animals from '../fixturs/data';
import Animal from './Animal';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
  }
})

let animalsList = [];
export default class SouvageScreen extends Component {

  componentWillMount() {
    animalsList = animals.Souvages;
  }

  openDrawer() {
    this.props.navigation.openDrawer();
  }

  getData() {
    return (
      animalsList.list.map((animal) =>
        <Animal key={animal.name}
          imgUrl={animal.img}
          name={animal.name}
          keywords={animal.keys}
          question={animal.qst}
          bgImgUrl={animals.Pets.backgroundImg} />
      )
    )
  }
  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../images/lion.png')}
        style={{ height: 30, width: 30 }} />
    )
  }
  render() {
    return (
      <Container>
        <HeaderComponent openDrawer={() => this.openDrawer()} />
        <ImageBackground source={animalsList.backgroundImg} style={{ width: width, height: height }}>
          <Swiper style={styles.wrapper} showsButtons={true} nextButton={<Image source={require('../images/next.png')} style={{ height: 35, width: 35 }} />} prevButton={<Image source={require('../images/prev.png')} style={{ height: 37, width: 37 }} />}>
            {this.getData()}
          </Swiper>
        </ImageBackground>
      </Container>
    );
  }
}
