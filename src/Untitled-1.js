import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Container, Content, Card, Button } from 'native-base';
import HeaderComponent from './Header';

export default class HomeScrean extends Component {
    openDrawer() {
        this.props.navigation.navigate('DrawerOpen');
    }

    static navigationOptions = {
        drawerIcon: (
            <Image source={require('../images/homeicon.png')}
                style={{ height: 24, width: 24 }} />
        )
    }

    render() {
        return (
             
        
        <ImageBackground  source={require('../images/back.jpg')}
            style={styles.Containr}>
        
        <Container>
        <HeaderComponent openDrawer={() => this.openDrawer()}
                />
                <View style={styles.overlayContent}>
                <Content contentContainerStyle={{
                    marginTop: 1
                }}>

                
                    <View style={styles.row}>
                        <Button block large transparent style={styles.buttonLeft}
                            onPress={() => this.props.navigation.navigate('main', { itemId: "salle", homeRequest: true })}>
                             <Image source={require('../images/icon.png')}
                             style={{ height: 75, width: 75, marginTop:-60, marginLeft:30}} />
                            <Text style={{ fontSize: 25, color: '#0d2a51', marginTop:60, marginLeft:-70}} >Salles</Text>
                        </Button>

                        <Button block large transparent style={styles.buttonRight}
                            onPress={() => this.props.navigation.navigate('main', { itemId: "amphi", homeRequest: true })} >
                            <Image source={require('../images/icon.png')}
                             style={{ height: 75, width: 75, marginTop:-60, marginLeft:-40}} />
                            <Text style={{ fontSize: 25, color: '#0d2a51',  marginTop:60, marginLeft:-75}} >Amphis</Text>
                        </Button>
                    </View>

                    <View style={styles.row}>
                        <Button block large transparent style={styles.buttonLeft}
                            onPress={() => this.props.navigation.navigate('main', { itemId: "scolarite", homeRequest: true })}>
                            <Image source={require('../images/icon.png')}
                             style={{ height: 75, width: 75, marginTop:-60, marginLeft:40}} />
                            <Text style={{ fontSize: 25, color: '#0d2a51',  marginTop:60, marginLeft:-80}} >Scolarité</Text>
                        </Button>

                        <Button block large transparent style={styles.buttonRight}
                            onPress={() => this.props.navigation.navigate('main', { itemId: "buvette", homeRequest: true })}>
                            <Image source={require('../images/icon.png')}
                             style={{ height: 75, width: 75, marginTop:-60, marginLeft:-30}} />
                            <Text style={{ fontSize: 25, color: '#0d2a51',marginTop:60, marginLeft:-75}} >Buvette</Text>
                        </Button>
                    </View>

                    <View style={styles.row}>
                        <Button block large transparent style={styles.buttonLeftt}
                            onPress={() => this.props.navigation.navigate('main', { itemId: "biblio", homeRequest: true })}>
                            <Image source={require('../images/icon.png')}
                             style={{ height: 75, width: 75, marginTop:-68, marginLeft:70}} />
                            <Text style={{ fontSize: 25, color: '#0d2a51',  marginTop:60, marginLeft:-100}} >Bibliothèque</Text>
                        </Button>

                        <Button block large transparent style={styles.buttonRight}
                            onPress={() => this.props.navigation.navigate('main', { itemId: "mosque", homeRequest: true })}>
                            <Image source={require('../images/icon.png')}
                             style={{ height: 75, width: 75, marginTop:-60, marginLeft:-20}} />
                            <Text style={{ fontSize: 25, color: '#0d2a51',marginTop:60, marginLeft:-80}} >Mosqué</Text>
                        </Button>
                      
                    </View>
                    
                </Content>  
                </View>   
        

               
         </Container > 
        
        </ImageBackground > 
             

);
        
            
}
}

const styles = StyleSheet.create({
    Containr:{
        flex:1,
        width:'100%',
        height:'100%',
        
    },
    overlayContent:{
        flex:1,
        backgroundColor:'rgba(47,163,218,.4)'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 65,
       // backgroundColor: 'darkblue'
    },
    buttonLeft: {
        marginTop:10,
        marginLeft: 20,
        height: 135,
        width: 137,
        borderRadius: 5,
        //backgroundColor: '#00009e'
    },
    buttonRight: {
        marginTop:10,
        marginRight: 20,
        height: 135,
        width: 140,
        borderRadius: 5,
        //backgroundColor: '#00009e'
    },
    buttonLeftt:{
        marginTop:10,
        marginRight: 20,
        height: 140,
        width: 180,
        borderRadius: 5,

    }


});