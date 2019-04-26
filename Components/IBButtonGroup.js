import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Button, Icon, SearchBar, ButtonGroup  } from 'react-native-elements'

export default class IBButtonGroup extends Component {

    constructor(props) {
        super(props)
        this.state = { selectedIndex: 0 }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({selectedIndex})
        this.props.handlePress()
    }

    render() {
        const buttons = ['Grid View', 'List View']
        const { selectedIndex } = this.state
        return (
            <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{height: 28}}
            />
        )
    }
}