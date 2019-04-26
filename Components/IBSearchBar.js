import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button, Icon, SearchBar  } from 'react-native-elements';

export default class IBSearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            searchQuery: '',
        }
        this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch(searchQuery) {
        this.setState({ searchQuery });
        this.props.handleSearch(searchQuery)
        // console.log(search)
    };

    render() {
        const { searchQuery } = this.state;
        return (
            <SearchBar
                placeholder="Search"
                onChangeText={this.updateSearch}
                value={searchQuery}
                platform='ios'
            />
        );
    }
  }