import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, AsyncStorage, Text } from 'react-native';
import { Icon } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeScreenActions from './HomeScreenActions'
import FavoritesScreenActions from '../Favorites/FavoritesScreenActions'
import IBSearchBar from '../../IBSearchBar'
import IBButtonGroup from '../../IBButtonGroup'
import PicsList from '../../PicsList'

const mapStateToProps = ({ HomeScreen, FavoritesScreen }) => {
    return {
        view: HomeScreen.view,
        picsList: HomeScreen.picsList,
        searchQuery: HomeScreen.searchQuery,
        lastView: HomeScreen.lastView,
        isLoading: HomeScreen.isLoading,
        favoritesList: FavoritesScreen.favoritesList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        HomeScreenActions: bindActionCreators(HomeScreenActions, dispatch),
        FavoritesScreenActions: bindActionCreators(FavoritesScreenActions, dispatch)
    }
}

export class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.toggleView = this.toggleView.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.changeToPicView = this.changeToPicView.bind(this)
        this.changeToLastView = this.changeToLastView.bind(this)
        this.renderHomeScreen = this.renderHomeScreen.bind(this)
        this.renderLoadingScreen = this.renderLoadingScreen.bind(this)
        this.loadFavoritesFromStorage = this.loadFavoritesFromStorage.bind(this)
    }

    componentDidMount() {
        const { searchQuery } = this.props
        this.handleSearch(searchQuery)
        this.loadFavoritesFromStorage()
    }

    loadFavoritesFromStorage() {
        const { addToFavorites } = this.props.FavoritesScreenActions

        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, stores) => {
                stores.map((result, i, store) => {
                    pic = JSON.parse(store[i][1])
                    addToFavorites(pic)
                })
            })
        })
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Images Browser',
        headerTitleStyle: {
            fontFamily: 'AppleSDGothicNeo-Light',
            fontSize: 18
        },
        headerStyle: {
            height: 70,
        },
        headerRight: (
            <Icon
                raised
                size={'22'}
                name='heart'
                type='font-awesome'
                color='#f50'
                onPress={() => { navigation.navigate('Favorites') }} 
            />
        )
    })

    toggleView() {
        const { view } = this.props
        const { handleToggleView, handleSaveLastView } = this.props.HomeScreenActions
        handleSaveLastView(view)

        if (view === 'Grid') {
            handleToggleView('List')
        } else {
            handleToggleView('Grid')
        }
    }

    changeToPicView(pic) {
        const { view } = this.props
        const { handleSaveLastView, handleToggleView, updatePicsList } = this.props.HomeScreenActions
        let picList = [pic]
        handleSaveLastView(view)
        handleToggleView('Picture')
        updatePicsList(picList)
    }

    changeToLastView() {
        const { searchQuery, lastView } = this.props
        const { handlePicsSearch, handleToggleView, handleUpdateIsLoading } = this.props.HomeScreenActions
        handleUpdateIsLoading(true)
        handlePicsSearch(searchQuery)
        handleToggleView(lastView)
        setTimeout(() => { handleUpdateIsLoading(false) }, 600)
    }

    handleSearch(searchQuery) {
        const { handlePicsSearch, handleUpdateSearchQuery, handleUpdateIsLoading } = this.props.HomeScreenActions
        handleUpdateIsLoading(true)
        handlePicsSearch(searchQuery)
        handleUpdateSearchQuery(searchQuery)
        setTimeout(() => { handleUpdateIsLoading(false) }, 800)
    }

    renderHomeScreen() {
        const { view, picsList, favoritesList } = this.props
        const { handleAddToFavorites } = this.props.FavoritesScreenActions
        return(
            <View style={styles.container}>
                <IBSearchBar handleSearch={this.handleSearch} />
                <IBButtonGroup handlePress={this.toggleView} />
                {
                    picsList.length == 0 ? (
                        <Text style={styles.noResultsText}>No Results Were Found...</Text>
                    ) : (
                        <View style={styles.imagesContainer}>
                            <PicsList 
                            view={view} 
                            picsList={this.props.picsList} 
                            picView={this.changeToPicView} 
                            lastView={this.changeToLastView}
                            addToFavorites={handleAddToFavorites}
                            favoritesList={favoritesList}
                            />
                        </View>
                    )
                }
            </View>
        )
    }

    renderLoadingScreen() {
        return(
            <View>
                <IBSearchBar handleSearch={this.handleSearch} />
                <IBButtonGroup handlePress={this.toggleView} />
                <View style={styles.horizontal}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            </View>
        )
    }

    render() {
        const { isLoading } = this.props
        return isLoading === true ? this.renderLoadingScreen() : this.renderHomeScreen() 
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 200
    },
    noResultsText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 200
    },
    imagesContainer: {
        flex: 1,
        justifyContent: 'center'
    }
})