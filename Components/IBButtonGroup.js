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
        const grid = () => <Icon type='font-awesome' name='th' color='grey' size={'20'} />
        const gridSelected = () => <Icon type='font-awesome' name='th' color='white' size={'20'} />
        const list = () => <Icon type='font-awesome' name='list' color='grey' size={'20'} />
        const listSelected = () => <Icon type='font-awesome' name='list' color='white' size={'20'} />
        let buttons = []

        if (this.props.view === 'Grid') buttons = [{element: gridSelected}, {element: list}]
        else buttons = [{element: grid}, {element: listSelected}]

        const { selectedIndex } = this.state
        return (
            <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={styles.container}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 30, 
        marginTop: 5, 
        marginBottom: 5,
        borderWidth: 0.5
    }
})