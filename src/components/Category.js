import React, { Component } from 'react';
import {
    StyleSheet,View,Image,ImageBackground,Dimensions,Text
} from 'react-native';
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('window');

export default class Category extends Component {

    render() {
        return (
        <ImageBackground  source={this.props.bgImgUrl} style={{width: width, height: height}}> 
        <View style={styles.overlayC}>
        <View style={styles.categoryName}>
        <Animatable.Text  easing="ease-in-back" iterationCount="infinite"style={styles.text}>
        <Text  onPress={() => this.props.navigate('Les animaux de la ferme',this.props.refe)}>
        <Image source={require('../images/go.png')}style={{ height: 25, width: 25}} />
        {this.props.name}
        </Text>
        </Animatable.Text>
        </View>
        <Image source={this.props.imgUrl}style={styles.slide1}/>
        </View>
        </ImageBackground >
        )
    }
}

const styles = StyleSheet.create({
    slide1: {
        width: 420,
         height: 350
      },
      categoryName:{
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        color: '#008000',
        fontSize: 23,
        fontWeight: 'bold',
        borderColor : '#008000',
        borderWidth : 2,
        padding : 20,
        backgroundColor: 'rgba(255,255,255,.2)',
        marginTop : 50,
        borderRadius:10,
        margin:10
      },

      overlayC : {
        flex : 1,
        backgroundColor: 'rgba(47,163,218,.1)'
      },

});