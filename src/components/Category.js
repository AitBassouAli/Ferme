import React, { Component } from 'react';
import {
    StyleSheet, View, Image, ImageBackground, Dimensions, Text, TouchableWithoutFeedback
} from 'react-native';
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('window');

export default class Category extends Component {

    render() {
        return (
            <ImageBackground source={this.props.bgImgUrl} style={{ width: width, height: height }}>
                <View style={styles.overlayC}>
                    <View style={styles.categoryName}>
                        <Animatable.Text easing="ease-in-back" iterationCount="infinite" style={styles.text}>
                            {this.props.name}
                        </Animatable.Text>
                    </View>
                    <TouchableWithoutFeedback onPress={() => this.props.navigate(this.props.refe)}>
                        <Image source={this.props.imgUrl} style={styles.slide1} />
                    </TouchableWithoutFeedback>
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
    categoryName: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        backgroundColor: 'rgba(255,255,255,.2)',
        padding: 20,
        marginTop: 50,
    },

    overlayC: {
        flex: 1,
        backgroundColor: 'rgba(47,163,218,.1)'
    },

});