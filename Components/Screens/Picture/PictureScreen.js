import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry, ActivityIndicator, AsyncStorage, ImageBackground } from 'react-native'
import { Card, Icon, Button, Image  } from 'react-native-elements'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import FavoritesScreenActions from '../Favorites/FavoritesScreenActions'
// import AsyncStorage from '@react-native-community/async-storage'
import Gallery from 'react-native-image-gallery'
import ImageView from 'react-native-image-view'

const mapStateToProps = ({ FavoritesScreen }) => {
    return {
        favoritesList: FavoritesScreen.favoritesList,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            FavoritesScreenActions: bindActionCreators(FavoritesScreenActions, dispatch),
        }
    }
}

export class PictureScreen extends Component {

    constructor(props) {
        super(props)
        this.addToFavorites = this.addToFavorites.bind(this)
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Picture',
        headerStyle: {
            height: 70,
        },
    })

    async addToFavorites(pic) {
        const { addToFavoritesStorage } = this.props.actions.FavoritesScreenActions
        addToFavoritesStorage(pic)
        // loadFavoritesFromStorage()
        // let keys = []
        // keys = await AsyncStorage.getAllKeys()
        // console.log(keys)
    }
    
    render() {
        // const { favoritesList } = this.props
        // console.log(favoritesList)
        const images = [
            {
                source: {
                    uri: this.props.navigation.state.params.picData.largeImageURL,
                },
                title: 'Paris',
                width: 806,
                height: 720,
            },
        ];
        return (
            <View>
                {/* <Card
                image={{ uri: this.props.navigation.state.params.picData.largeImageURL }}>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Add to Favorites' 
                    onPress={() => { this.addToFavorites(this.props.navigation.state.params.picData) }}
                />   
                </Card> */}
                {/* <ImageBackground 
                    source={{uri: this.props.navigation.state.params.picData.largeImageURL}}
                    style={{width: 400, height: 400}} 
                /> */}
                <ImageView
                    images={images}
                    imageIndex={0}
                    renderFooter={(currentImage) => (
                        <View>
                            <Button
                                icon={<Icon name='code' color='#ffffff' />}
                                backgroundColor='#03A9F4'
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='Add to Favorites' 
                                onPress={() => { this.addToFavorites(this.props.navigation.state.params.picData) }}
                            />   
                        </View>
                    )}
                />
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PictureScreen)