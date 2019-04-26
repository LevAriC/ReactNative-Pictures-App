import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Header, Button, Icon, SearchBar, ButtonGroup, Image  } from 'react-native-elements';

export default class SinglePic extends Component {

    constructor(props) {
        super(props)
        // this.state = { view: this.props.view }
        this.renderGridView = this.renderGridView.bind(this)
    }

    renderGridView() {
        const {picsArr} = this.props
        return (
            picsArr.map(item => {
                console.log("SINGLE PIC: ")
                console.log(item.previewURL)
                return(
                    <View>
                        <Image source={{ uri: item.previewURL }} />
                    </View>
                )
            })
        )
        // return (
        //     <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
        //         <Image style={styles.imageThumbnail} source={{ uri: this.props.pic.previewURL }} />
        //     </View>
        // )
    }

    render() {
        return this.renderGridView()
    }

}

const styles = StyleSheet.create({
    MainContainer: {
      justifyContent: 'center',
      flex: 1,
      paddingTop: 30,
    },
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
});