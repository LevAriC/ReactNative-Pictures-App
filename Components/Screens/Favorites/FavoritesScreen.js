import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import actions from './FavoritesScreenActions'

const mapStateToProps = ({ FavoritesScreen }) => {
    return {
        favoritesList: FavoritesScreen.favoritesList,
    }
}

export default class FavoritesScreen extends Component {

    constructor(props) {
        super(props)
        // this.state = {
        // }
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Images Browser',
        headerStyle: {
            height: 70,
        },
    })

    render() {
        return (
        <View>
            <Text>FAVORITES</Text>
        </View>
        )
    }
}

// export default connect(mapStateToProps, actions)(FavoritesScreen)