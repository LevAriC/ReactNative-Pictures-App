import React, { Component } from 'react'
import { SearchBar  } from 'react-native-elements'

export default class IBSearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = { searchQuery: '' }
        this.updateSearch = this.updateSearch.bind(this)
    }

    updateSearch(searchQuery) {
        this.setState({ searchQuery })
        this.props.handleSearch(searchQuery)
    }

    render() {
        const { searchQuery } = this.state
        return (
            <SearchBar
            placeholder="Search"
            onChangeText={this.updateSearch}
            value={searchQuery}
            platform='ios'
            containerStyle={{ height: 50 }}
            inputContainerStyle={{height: 20}}
            />
        )
    }
  }