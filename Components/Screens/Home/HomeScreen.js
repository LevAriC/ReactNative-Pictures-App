import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Icon, Image } from 'react-native-elements'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import actions from './HomeScreenActions'
import IBSearchBar from '../../IBSearchBar'
import IBButtonGroup from '../../IBButtonGroup'
import PicsList from '../../PicsList'

const mapStateToProps = ({ HomeScreen }) => {
    return {
        view: HomeScreen.view,
        picsList: HomeScreen.picsList,
    }
}

export class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.toggleView = this.toggleView.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Images Browser',
        headerStyle: {
            height: 70,
        },
        headerRight: (
            <Icon
                raised
                name='heart'
                type='font-awesome'
                color='#f50'
                onPress={() => { navigation.navigate('Favorites') }} 
            />
        )
    })

    toggleView() {
        const { view, handleToggleView } = this.props

        if (view === 'Grid') {
            handleToggleView('List')
        } else {
            handleToggleView('Grid')
        }
    }

    handleSearch(searchQuery) {
        const { handlePicsSearch } = this.props
        handlePicsSearch(searchQuery)
    }

    render() {
        const { view } = this.props
        return (
        <View>
            <IBSearchBar handleSearch={this.handleSearch} />
            <IBButtonGroup handlePress={this.toggleView} />
            <PicsList view={view} picsList={this.props.picsList} navigation={this.props.navigation} />
        </View>
        )
    }
}

// HomeScreen.propTypes = {
    // view: PropTypes.string,
//     picsList: PropTypes.arrayOf(Object),
// }
  
export default connect(mapStateToProps, actions)(HomeScreen)
