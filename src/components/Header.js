import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Modal, Image, Text, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import { Header, Left, Right, Button, Icon, Item, Input, Card, Container } from 'native-base';
export default class HeaderComponent extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        const { openDrawer } = this.props;
        return (

            <Header style={{ backgroundColor: '#17AD7F' }}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: '#17AD7F' }}
                        onPress={() => openDrawer()}>
                        <Image source={require('../images/menu.png')}
                            style={{ height: 35, width: 35 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#17AD7F' }} //008000
                        onPress={() => {
                            this.setModalVisible(true);
                        }}>
                        <Image source={require('../images/info.png')}
                            style={{ height: 35, width: 35 }} />
                    </TouchableOpacity>
                </View>
                <Modal style={{ backgroundColor: '#FFF8DC' }}
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false);
                    }}>
                    <ScrollView keyboardShouldPersistTaps="always">
                        <View style={{ backgroundColor: '#FFF8DC' }}>
                            <View style={{ backgroundColor: '#FFF8DC' }}>
                                <View style={styles.head}>
                                    <Image source={require('../images/bienvenue.png')}
                                        style={{ height: 35, width: 35, }} />
                                    <Text style={{ fontSize: 28}}>Bienvenue</Text>
                                    </View>
                                <View style={styles.row}>
                                    <Image source={require('../images/screen1.jpg')} style={{ height: 140, width: 137, }} />
                                    <Image source={require('../images/screen2.jpg')} style={{ height: 140, width: 137, }} />
                                </View>
                                <View style={styles.roow}>
                                    <Card style={styles.card}>
                                        <Button block large success>
                                            <Text style={{ textAlign: 'center', fontSize: 18 }}>Dans la première page, vous trouvez tous les catégories d'animaux</Text>
                                        </Button>
                                    </Card>
                                    <Card style={styles.card}>
                                        <Button block success >
                                            <Text style={{ textAlign: 'center', fontSize: 18 }}>En cliquant sur l'une de ces catégories, vous trouvez un ensemble des animaux</Text>
                                        </Button>
                                    </Card>
                                    <Card style={styles.card}>
                                        <Button block large success>
                                            <Text style={{ textAlign: 'center', fontSize: 18 }}>Par la suite, vous cliquez sur l'icône de voix pour dire le nom d'animal</Text>
                                        </Button>
                                    </Card>
                                    <Card style={styles.card}>
                                        <Button block large success>
                                            <Text style={{ textAlign: 'center', fontSize: 18 }}>En cas d'echec, vous aurez de l'aide pour savoir de quoi s'agit-il</Text>
                                        </Button>
                                    </Card>
                                    <Card style={styles.card}>
                                        <Button block large success>
                                            <Text style={{ textAlign: 'center', fontSize: 18 }}>Amusez-vous!!!</Text>
                                        </Button>
                                    </Card>
                                    <Card style={styles.card}>
                                        <Button block large warning onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                                            <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', }}>Fermer</Text>
                                        </Button>
                                    </Card>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </Modal>
            </Header >
        );
    }
}

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        // backgroundColor: 'darkblue'
        backgroundColor: '#FFF8DC'
    },
    roow: {
        padding: 10,
        marginTop: 10,

    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: '#17AD7F',
        fontWeight: 'bold',
        //borderColor: '#008000',
        //borderWidth: 2,
        padding: 20,
        marginTop: 10,
    },
    card: {
        margin: 30
    }
});