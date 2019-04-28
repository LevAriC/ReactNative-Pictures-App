import React, { Component } from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FavoritesScreenActions from './FavoritesScreenActions'
import HomeScreenActions from '../Home/HomeScreenActions'
import { Button } from 'react-native-elements'
import PicsList from '../../PicsList'


const mapStateToProps = ({ FavoritesScreen }) => {
    return {
        favoritesList: FavoritesScreen.favoritesList,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     HomeScreenActions: {
//         bindActionCreators(HomeScreenActions, dispatch)
//     }
// }
function mapDispatchToProps(dispatch) {
    return {
      actions: {
        FavoritesScreenActions: bindActionCreators(FavoritesScreenActions, dispatch),
        // HomeScreenActions: bindActionCreators(HomeScreenActions, dispatch)
      }
    }
}

export class FavoritesScreen extends Component {

    constructor(props) {
        super(props)
        this.checkFunc = this.checkFunc.bind(this)
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Favorites',
        headerStyle: {
            height: 70,
        },
    })

    checkFunc() {
        const { favoritesList, handleAddToFavorites } = this.props
        const { handleToggleView } = this.props.actions.HomeScreenActions
        // handleAddToFavorites('test')
        // console.log('checkFunc favoritesList: ')
        // console.log(favoritesList)
    }

    render() {
        const { favoritesList } = this.props
        const { loadFavoritesFromStorage } = this.props.actions.FavoritesScreenActions
        loadFavoritesFromStorage()
        // console.log('BEFORE: ')
        // console.log(favoritesList)
        // console.log('AFTER: ')
        // console.log(favoritesList)

        return (
            <View>
                <PicsList view={'Grid'} picsList={favoritesList} navigation={this.props.navigation} />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen)