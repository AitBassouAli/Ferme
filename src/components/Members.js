import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Container } from 'native-base';
import HeaderComponent from './Header';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: 'rgba(255,255,255,.1)',
    padding: 20,
    marginTop: 100,
  },
  title: {
    fontSize: 28,
  },
  text: {
    fontSize: 28,
    backgroundColor: 'rgba(255,255,255,.4)',
    marginTop: 20,
    color:'#17AD7F'
  },
  team: {
    marginTop: 40,
    marginLeft: 40,
  }
})

export default class Members extends Component {
  openDrawer() {
    this.props.navigation.openDrawer();
  }
  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../images/team.png')}
        style={{ height: 40, width: 40, marginLeft: 10, }} />
    )
  }

  render() {
    return (
      <Container>
        <HeaderComponent openDrawer={() => this.openDrawer()} />
        <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center',}}>
          <Text style={styles.title}>Membres d'equipe </Text>
          <Image source={require('../images/bienvenue.png')} style={{ height: 35, width: 35, }} />
          </View>
          <View style={styles.team} >
            <Text style={styles.text}>BOUZEKRY Hanane</Text>
            <Text style={styles.text}>KHACHANI Ahmed</Text>
            <Text style={styles.text}>AIT BASSOU Ali</Text>
          </View>
        </View>
      </Container>
    );
  }
}
