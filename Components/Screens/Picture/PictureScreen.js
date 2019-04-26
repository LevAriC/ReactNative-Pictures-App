import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, ActivityIndicator  } from 'react-native';
import { Card, Icon, Button, Image  } from 'react-native-elements';

export default class PictureScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
        this.handlePress = this.handlePress.bind(this)
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Picture',
        headerStyle: {
            height: 70,
        },
    })

    handlePress(pic) {
        console.log('Added to favorites')
        console.log(pic)
        // const { handleAddToFavorites } = this.props
        // handleAddToFavorites(pic)
    }
    
    render() {
        return (
            <View>
                <Card
                image={{ uri: this.props.navigation.state.params.picData.largeImageURL }}>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Add to Favorites' 
                    onPress={() => { this.handlePress(this.props.navigation.state.params.picData) }}
                />   
                </Card>
            </View>
        );
    }
}

